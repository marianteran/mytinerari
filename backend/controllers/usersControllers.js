const User = require("../models/users")
const bcryptjs= require("bcryptjs")

const usersControllers ={

    nuevoUsuario: async (req,res)=>{

        const {firstname, lastname, email, password}= req.body.NuevoUsuario

        try {

            const usuarioExiste = await User.findOne({email})

            if (usuarioExiste) {
                res.json({sucess:false, response:" Usuario existe, realice login"})
            }
            else{
                const passwordHash = bcryptjs.hashSync(password,10)
                const newUser = new User({
                    firstname,
                    lastname,
                    email,
                    password:passwordHash
                })
                await newUser.save()
                res.json({sucess:true, response:"Usuario creado exitosamente"})
            }

            
        } catch (error) {
            res.json({sucess:false, response:null, error:error})
            
        }

    }


}

module.exports = usersControllers