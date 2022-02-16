const Cities = require("../models/cities")
const Itinerary = require("../models/itinerary.js")
const Comments= require("../models/comments.js")

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
    },

    ObtenerItinerary:async(req,resp)=>{
        let itinerary

        let error=null

        try {
            itinerary= await Itinerary.find()
            
        } catch (err) {
            error=err
            console.log(error)
            
        }

        resp.json({
            response:error?"ERROR":{itinerary},
            success:error? false:true,
            error:error
        })

        
    },

    ObtenerComentarios:async(req,resp)=>{
        let comments
        let error=null

        try {
            comments=await Comments.find()
        } catch (err) {
            error=err
            console.log(error)
        }

        resp.json({
            response:error?"ERROR":{comments},
            success:error? false:true,
            error:error
        })

    }

  
}

module.exports=citiesController