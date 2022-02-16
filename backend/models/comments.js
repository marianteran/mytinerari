const mongoose=require("mongoose")

const commentsSchema = new mongoose.Schema({
    itinerary:{type:String, require:true},
    user:{type:String, require:true},
    img_user:{type:String, require:true},
    comment:{type:String, require:true},
    like:{type:String, require:true}

})

const Comments = mongoose.model("comments", commentsSchema)

module.exports = Comments