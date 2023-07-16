const mongoose =require("mongoose");


const Admincredentialschema=new mongoose.Schema({
   admin:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
   },
    QRcode:{
        public_id:{
         type:String,
        },
        url:{
         type:String,
        }
     },
     upiid:{
        type:String,
     }
})

module.exports = mongoose.model("Admincredential",Admincredentialschema);