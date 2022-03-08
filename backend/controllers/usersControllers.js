const User = require("../models/users");
const bcryptjs = require("bcryptjs");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { response } = require("express");

async function sendEmail(email, uniqueText) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "mytinerarymt@gmail.com",
      pass: "mitinerari123456",
    },
  });

  const sender = "mytinerarymt@gmail.com";
  const mailOptions = {
    from: sender,
    to: email,
    subject: "user verification",
    html: `
            <div style=" width: 50%;margin:10vh auto;box-shadow: 0px -1px 5px 6px rgba(201,247,254,1); padding: 8px; background: #096684;">
                <h1 style="color: #fff; font-family: Dancing Script; font-style: italic; font-size: 40px; text-align: center;">
                    MyTinerary
                </h1>
  
                <h2 style="color: #fff; font-size: 20px;text-align: center;">
                    Click <a style="color: #75e8fd; font-style: italic" href=http://localhost:4000/api/verify/${uniqueText}>here
                            </a> to validate your e-mail
                </h2>
    
                <h6 style="color: #fff; font-size: 12px;text-align: center;">All Rights Reserved Copyright - 2022</h6>

            </div>
        `,
  };

  await transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("mensaje enviado");
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
      res.redirect("http://localhost:3000/signin");
    } else {
      res.json({
        success: false,
        response: "Your email could not be verified",
      });
    }
  },

  nuevoUsuario: async (req, res) => {
    const { firstname, lastname, email, password } = req.body.NuevoUsuario;

    try {
      const usuarioExiste = await User.findOne({ email });

      if (usuarioExiste) {
        res.json({ success: "falseUE", response: "User exists, login" });
      } else {
        const uniqueText = crypto.randomBytes(15).toString("hex");
        const emailVerificado = false;
        const passwordHash = bcryptjs.hashSync(password, 10);
        const newUser = new User({
          firstname,
          lastname,
          email,
          password: passwordHash,
          uniqueText,
          emailVerificado,
          connected: false,
        });

        if (!emailVerificado) {
          await newUser.save();
          await sendEmail(email, uniqueText);
          res.json({
            success: "trueUE",
            response: "We have sent an email to verify your email",
          });
        }
      }
    } catch (error) {
      res.json({ success: "falseUE", response: null, error: error });
    }
  },

  accesoUsuario: async (req, res) => {
    const { email, password } = req.body.userData;

    try {
      const usuario = await User.findOne({ email });

      if (!usuario) {
        res.json({
          success: false,
          from: "controller",
          error: "The username and/or password are incorrect",
        });
      } else {
        if (usuario.emailVerificado) {
          let passwordCoincide = bcryptjs.compareSync(
            password,
            usuario.password
          );

          if (passwordCoincide) {
            const token = jwt.sign({ ...usuario }, process.env.SECRETKEY);
            const datosUser = {
              firstname: usuario.firstname,
              lastname: usuario.lastname,
              email: usuario.email,
            };
            usuario.connected = true;
            await usuario.save();
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
          res.json({
            success: false,
            from: "controller",
            error: "Verify your email to validate your entry",
          });
        }
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false, response: null, error: error });
    }
  },

  cerrarSesion: async (req, res) => {
    const email = req.body.email;
    const user = await User.findOne({ email });
    user.connected = false;

    await user.save();

    res.json({ success: true, response: "Closed section" });
  },
};

module.exports = usersControllers;
