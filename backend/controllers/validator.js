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


        password:joi.string().max(30).min(6).trim().pattern(new RegExp("^[a-zA-Z0-9]+$")).required().messages({

            "string.min":"El password debe contener minimo 6 caracteres",
            "string.alphanum":"El password debe ser alfanumerico"
        }) 



    })

    const validation =Schema.validate(req.body.NuevoUsuario,{abortEarly:false})

    if (validation.error) {
        return res.json({success:"falseVAL", response:validation})
        
    }
    next()
}

module.exports = validator

