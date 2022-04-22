const User = require("../models/users");
const bcryptjs = require("bcryptjs");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
//const { response } = require("express");


async function sendEmail(email, uniqueText) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "mytinerarymt@gmail.com",
            pass:process.env.NODEMAILER,
        },
    });

    const sender = "mytinerarymt@gmail.com";
    const mailOptions = {
        from: sender,
        to: email,
        subject: "User verification email",
        html: `
            <div style="width:300px; margin: auto; ">
                <div style=" width:300px;height: 200px;margin:auto;box-shadow: 0px -1px 5px 6px rgba(201,247,254,1); padding: 5px; background: #096684;
                    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);border-radius: 2rem;">
                    <h1 style="color: #fff; font-family: Dancing Script; font-style: italic; font-size: 40px; text-align: center;">
                        MyTinerary
                    </h1>
                    <h2 style="color: #fff; font-size: 20px;text-align: center;">Validate your e-mail</h2>
                </div>

                <div style="text-align: center; margin-top:20px">
                   
                        <a href=https://mytinerary-marianela.herokuapp.com/api/verify/${uniqueText} style="width:100px; height:50px; padding: 10px; border-radius: 2rem; background:#096684; color: white; font-size: 15px; text-decoration: none; ">Click Here</a>
                </div>

                <h6 style="color: #096684; font-size: 12px;text-align: center;">All Rights Reserved Copyright - 2022</h6>
            </div>
        `,
    };

    await transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent");
        }
    });
}

const usersControllers = {
    
    verifyEmail: async (req, res) => {
        const { uniqueText } = req.params;
        const user = await User.findOne({ uniqueText: uniqueText });
        if (user) {
            user.emailVerificado = true;
            await user.save();
            res.redirect("https://mytinerary-marianela.herokuapp.com/signin");
        } else {
            res.json({
                success: false,
                response: "Your email could not be verified",
            });
        }
    },

    nuevoUsuario: async(req, res) => {
        /* let {firstname, lastname, email, password, from }=req.body.NuevoUsuario; */
        let {imguser,firstname, lastname, email, password, from }=req.body.NuevoUsuario;
            

            //console.log(req.body)
        try { 
            const usuarioExiste = await User.findOne({email})

            if (usuarioExiste) {
               
                if(from!=="signup") { 
                    const passwordHash = bcryptjs.hashSync(password,10)
                    usuarioExiste.imguser=imguser
                    usuarioExiste.password = passwordHash
                    usuarioExiste.emailVerificado = true
                    usuarioExiste.from = from
                    usuarioExiste.connected = false
                    usuarioExiste.save()
                    
                    return res.json({success:true,response:"We update your signup so that you can do it with " + from})

                } else {
                    return res.json({success:false,response:"User already exist. Please sign in"})
                }

            } else {
                const uniqueText = crypto.randomBytes(15).toString("hex") 
                const emailVerificado = false
                const passwordHash = bcryptjs.hashSync(password,10)
                const newUser = new User({
                    imguser,
                    firstname,
                    lastname,
                    email,
                    password: passwordHash,
                    uniqueText,
                    emailVerificado,
                    connected:false,
                    from, 
                })
                    //console.log(newUser.imguser)
                if(from!=="signup") {
                    //usuario no existe y se crea
                    newUser.emailVerificado = true
                    newUser.from = from
                    newUser.connected = false
                    await newUser.save()
                   return res.json({success:true,response: "Congratulations your user has been created with " + from});
                } else {
                    newUser.emailVerificado = false
                    newUser.from = from
                    newUser.connected = false
                    await newUser.save()
                    await sendEmail(email, uniqueText)
                   return res.json({success:true,response: "We have sent an email to verify your email"});
                }
            }
        } catch (error) {
            console.log(error)
        }
    },

    accesoUsuario: async (req, res) => {
        const { email, password } = req.body.userData;

        try {
            const usuario = await User.findOne({ email });

            if (!usuario) {
                res.json({success: false,from: "controller",error: "The username and/or password are incorrect"});
            } else {
                if (usuario.emailVerificado) {
                    let passwordCoincide = bcryptjs.compareSync(password,usuario.password);

                    if (passwordCoincide) {
                         
                        const datosUser = {
                            imguser:usuario.imguser,
                            firstname: usuario.firstname,
                            lastname: usuario.lastname,
                            email: usuario.email,
                            id:usuario._id,
                        };
                        usuario.connected = true;
                        await usuario.save();

                        const token = jwt.sign({...datosUser }, process.env.SECRETKEY, {expiresIn:60*60*24});
                        res.json({
                            success: true,
                            from: "controller",
                            response: { token, datosUser },
                        });
                    } else {
                        res.json({
                            success: false,
                            from: "controller",
                            error: "The username and/or password are incorrect",
                        });
                    }
                } else {
                    res.json({success: false,from: "controller",error: "Verify your email to validate your entry"});
                }
            }
        } catch (error) {
            console.log(error);
            res.json({ success: false, response: null, error: error });
        }
    },

    cerrarSesion: async (req, res) => {
        const email = req.body.email;
        const user = await User.findOne({email});
        user.connected = false;

        await user.save();

        res.json({ success: true, response: "Your session has been closed" });
    }, 
    
    
    verificarToken: async(req, res)=>{
        //console.log(req)
        if (!req.error) {
            res.json({success:true,
                datosUser:{
                imguser:req.user.imguser,
                firstname:req.user.firstname,
                lastname:req.user.lastname,
                email:req.user.email,
                id: req.user.id },
                response: "Welcome Back " + req.user.firstname})
            
        }else{
            res.json({success:false, response:" Please sign again"})
        }
    },



    
          
};

module.exports = usersControllers;
