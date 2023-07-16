const mongoose =require("mongoose");

const userincomeschema =new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    wallet:{
        type:Number,
        default:0,
    }
})

module.exports =mongoose.model("usertotalincome",userincomeschema);