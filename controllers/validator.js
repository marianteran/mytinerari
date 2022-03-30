const joi = require("joi")

const validator =(req,res,next)=>{
    //console.log(req.body.NuevoUsuario)

    const Schema=joi.object({

        imguser:joi.string().required(),

        firstname:joi.string().max(40).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({

            "string.min":"The name must contain at least 3 characters",
            "string.empty":"The field cannot be empty"
        }),

        lastname:joi.string().max(20).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({

            "string.min":"The last name must contain at least 3 characters",
            "string.empty":"The field cannot be empty"
        }),

        email:joi.string().email({minDomainSegments:2}).required().messages({

            "string.email":"Wrong email format"
        }),


        password:joi.string().max(40).min(6).pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/).required().messages({

            "string.pattern.base":"The password must contain at least 6 characters, uppercase and be alphanumeric",
            "string.min":"The password must contain at least 6 characters",
            "string.max":"The password must contain a maximum of 20 characters"
            
        }) ,

        from: joi.string()



    })

    const validation =Schema.validate(req.body.NuevoUsuario,{abortEarly:false})

    if (validation.error) {
        return res.json({success:"falseVAL", response:validation})
        
    }
    next()
}

module.exports = validator

