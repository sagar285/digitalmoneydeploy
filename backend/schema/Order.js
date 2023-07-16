const mongoose =require("mongoose")

const Orderschema = new mongoose.Schema({
    products:
        {
            type:mongoose.ObjectId,
            ref:"Product",
        },
    buyer:{
        type:mongoose.ObjectId,
        ref:"User",
    },
})

module.exports = mongoose.model("Order",Orderschema);