const mongoose =require("mongoose");

const rechargeschema = new mongoose.Schema({
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
   },
   amount:{
    type:Number,
    default:0,
   },
   utrid:{
    type:Number,
    required:true,
   },
   date:{
    type:Date,
    default:Date.now(),
   },
   status:{
      type:Number,
      default:0,
   }
})

module.exports =mongoose.model("Recharge",rechargeschema);