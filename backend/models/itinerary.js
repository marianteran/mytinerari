const mongoose=require("mongoose")

const itinerarySchema= new mongoose.Schema({

    city:{type:String, require:true},
    name:{type:String},
    description:{type:String},
    price:{type:Number},
    time:{type:Number},
    image:{type:Array} , 
    likes:{type:Array}

})

const Itinerary =mongoose.model("itineraries",itinerarySchema)

module.exports=Itinerary