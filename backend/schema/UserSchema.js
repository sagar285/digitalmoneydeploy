const mongoose =require("mongoose")
const jwt =require("jsonwebtoken")
const Userschema = new  mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
        required:true,
    },
    role:{
        type:Number,
        default:0,
    },
    referalid:{
        type:Number,
        required:true,
    },
    sponsorid:{
        type:Number,
        required:true,
    },
    level1:[
         {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Levels"
         }
    ],
    level2:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Levels"
         }

    ],
    level3:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Levels"
         }
    ],
  
   
})

Userschema.methods.generatetoken =async function(){
    try {
        let usertoken = jwt.sign({_id:this._id},"jdjksdkjsadjksdjsjdsjdjsj");
        return usertoken;
    } catch (error) {
        res.status(422).send(error)
    }
}


module.exports =mongoose.model("User",Userschema);