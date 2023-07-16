const mongoose =require("mongoose");

const rechargeschema = new mongoose.Schema({
  
    referalid:{
        type:Number,
        default:0,
    },
    amount:{
        type:Number,
        default:0,
    },
    date:{
        type:Date,
        default:Date.now(),
       },
})



module.exports =mongoose.model("Adminrecharge",rechargeschema);