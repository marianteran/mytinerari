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
        //console.log(req.params)
        const city =req.params.city

        let error=null

        try {
            itinerary= await Itinerary.find({city:city})
            
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

    likeDislike: async (req, res) => {
        const id = req.params.id;
        const user= req.user.id

        //console.log(id)
        //console.log(user)
        let itinerary

        try {
            itinerary= await Itinerary.findOne({_id:id})

            if (itinerary.likes.includes(user)) {

                Itinerary.findOneAndUpdate({_id:id}, {$pull:{likes:user}}, {new:true} )
                .then(response=>res.json({success:true, response:response.likes}))

                .catch(error=>console.log(error))
                
            }else{
                Itinerary.findOneAndUpdate({_id:id}, {$push:{likes:user}}, {new:true} )
                .then(response=>res.json({success:true, response:response.likes}))

                .catch(error=>console.log(error))
                
            }
            
        } catch (err) {
            error=err
            res.json({success:false, response:error})
            
        }

       

    }, 



  
}

module.exports=citiesController