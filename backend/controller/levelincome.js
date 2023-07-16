const Userincome = require("../schema/Userincome");
const Usermodel =require("../schema/UserSchema");

exports.levelincome=async(req,res)=>{
    // const {amount} =req.body;
    try {
        // const usertotalincome = new Userincome({wallet:amount,user:req.user._id});
        // const saveincome =await usertotalincome.save();
        // res.send(saveincome);
        const user = await Userincome.find({user:req.user._id}).populate("user");
        res.send(user);

    } catch (error) {
        console.log(error);
    }
}