const Cities = require("../models/cities")

const citiesController={
    ObtenerTodosLosDatos:async(req,resp)=>{
        let cities

        let error =null

        try {
            cities = await Cities.find()
            
        } catch (err) {
            error =err
            console.log(error)
        }

        resp.json({
            response:error?"ERROR":{cities},
            success:error? false:true,
            error:error
        })
    }
}

module.exports=citiesController