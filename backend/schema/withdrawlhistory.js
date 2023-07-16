const mongoose =require("mongoose");

const withdrawlhistoryschema = new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:"User",
    },
    amount:{
        type:Number,
        required:true,
    },
    payable:{
        type:Number,
        default:0,
    },
    reqtime:{
        type:Date,
        default:Date.now(),
    },
    status:{
        type:Number,
        default:0,
    },
    Appprovetime:{
        type:Date,
        default:Date.now(),
    }

})

module.exports =mongoose.model("Withdrawlhistory",withdrawlhistoryschema);