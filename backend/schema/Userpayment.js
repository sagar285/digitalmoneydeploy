const mongoose =require("mongoose")

const Paymentschema =new mongoose.Schema({
    user:{
   type:String,
   require:true,
    },
    Name:{
     type:String,
     default:"Guest"
    },
   AccountNumber:{
    type:Number,
    default:0,
   
   },
   IfscCode:{
    type:String,
    default:0,
   },
},{timestamps:true})

module.exports =mongoose.model("Payment",Paymentschema);