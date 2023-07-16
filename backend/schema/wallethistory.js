const mongoose =require("mongoose");

const wallethistoryschema =new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:"User"
    },
    amount:{
        type:Number,
        default:0,
    },
    date:{
        type:Date,
        default:Date.now(),
    }
   
})

module.exports = mongoose.model("Wallethistory",wallethistoryschema);