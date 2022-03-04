const User = require("../models/users")
const bcryptjs= require("bcryptjs")
const nodemailer =require("nodemailer")
const crypto =require("crypto")
const { response } = require("express")


async function sendEmail(email, uniqueText) {
    const transporter=nodemailer.createTransport({
        
        host:"smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user:"mytinerarymt@gmail.com",
            pass:"mitinerari123456"
        }
    })

    const sender="mytinerarymt@gmail.com"
    const mailOptions={
        from: sender,
        to:email,
        subject:"verificacion de usuario",
        html:`Presiona <a href=http://localhost:4000/api/verify/${uniqueText}>Aqui</a> para validar tu email`
    }

    await transporter.sendMail(mailOptions, function(error, response){
        if (error) {
            console.log(error)
        }else{
            console.log("mensaje enviado")
        }
    })

}


const usersControllers ={

    verifyEmail: async(req, res)=>{
        const{uniqueText}=req.params
        const user= await User.findOne({uniqueText:uniqueText})
        if (user) {
            user.emailVerificado=true
            await user.save()
            res.redirect("http://localhost:3000/signin")
            
        }else{
            res.json({success:false, response:"su email no se ha podido verificar"})
        }
    },

    nuevoUsuario: async (req,res)=>{

        const {firstname, lastname, email, password}= req.body.NuevoUsuario

        try {
            const usuarioExiste = await User.findOne({email})

            if (usuarioExiste) {
                res.json({success:"falseUE", response:" Usuario existe, realice login"})
            }
            else{
                const uniqueText= crypto.randomBytes(15).toString("hex")
                const emailVerificado=false
                const passwordHash = bcryptjs.hashSync(password,10)
                const newUser = new User({
                    firstname,
                    lastname,
                    email,
                    password:passwordHash,
                    uniqueText,
                    emailVerificado,
                })

                if (!emailVerificado) {
                    await newUser.save()
                    await sendEmail(email,uniqueText)
                    res.json({success:"trueUE", response:"Hemos enviado un correo electronico para verificar su email"})
                }
            }
          
        } catch (error) {
            res.json({success:"falseUE", response:null, error:error})
            
        }

    }

    









}

module.exports = usersControllers