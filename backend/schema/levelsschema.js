const mongoose =require("mongoose");

const levelschema = new mongoose.Schema({
    levels1:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    ,
    levels2:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    ,
    levels3:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    ,
   
})

module.exports =mongoose.model("Levels",levelschema);