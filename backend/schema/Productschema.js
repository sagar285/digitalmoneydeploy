const mongoose =require("mongoose");

const Productschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    img:{
       public_id:{
        type:String,
        required:true,
       },
       url:{
        type:String,
        required:true,
       }
    },
    price:{
        type:Number,
        required:true,
    },
    noOfDays:{
        type:Number,
        required:true,
    },
    dailyincome:{
        type:Number,
        required:true,
    },
    referalBonus:{
        type:Number,
        required:true,
    },
    reward:{
        type:Number,
        required:true,
    },
})

module.exports =mongoose.model("Product",Productschema);