const mongoose =require("mongoose");

const DailyEarningSchema = new mongoose .Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    myearning:{
        type:Number,
        default:0,
    },
    levelonearning:{
        type:Number,
        default:0,
    },
    leveltwoearning:{
        type:Number,
        default:0,
    },
    levelthreeearning:{
        type:Number,
        default:0,
    },
    date:{
        type:String,
        default:Date.now()
    }
},{timestamps:true})


module.exports = mongoose.model("Earning",DailyEarningSchema);