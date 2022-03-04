const joi = require("joi")

const validator =(req,res,next)=>{
    console.log(req.body.NuevoUsuario)

    const Schema=joi.object({

        firstname:joi.string().max(10).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({

            "string.min":"El nombre debe contener minimo 3 caracteres",
            "string.empty":"El campo no puede estar vacio"
        }),

        lastname:joi.string().max(20).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({

            "string.min":"El apellido debe contener minimo 3 caracteres",
            "string.empty":"El campo no puede estar vacio"
        }),

        email:joi.string().email({minDomainSegments:2}).required().messages({

            "string.email":"formato de email incorrecto"
        }),


        password:joi.string().max(20).min(6).pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/).required().messages({

            "string.pattern.base":"El password debe contener minimo 6 caracteres y ser alfanumerico",
            "string.min":"El password debe contener minimo 6 caracteres",
            "string.max":"El password debe contener maximo 20 caracteres"
            
        }) 



    })

    const validation =Schema.validate(req.body.NuevoUsuario,{abortEarly:false})

    if (validation.error) {
        return res.json({success:"falseVAL", response:validation})
        
    }
    next()
}

module.exports = validator

