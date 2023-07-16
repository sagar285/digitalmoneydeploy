const Paymentmodel =require("../schema/Userpayment");
const levelsschema = require("../schema/levelsschema");
// const [AccountNumber,setAccountNumber]=useState("")
//   const [IfscCode,setIfscCode]=useState("")
//   const [dob,setdob]=useState("")
//   const [phone,setphone] =useState("");
// //   const [amount,setamount] =useState("");

exports.userpaymentdetail=async(req,res)=>{
    const { AccountNumber,IfscCode,Name}=req.body;
    const paymentalready = await Paymentmodel.findOne({user:req.user._id});
    try {
        if(paymentalready){
            const update = await Paymentmodel.findOneAndUpdate({user:req.user._id},{
                AccountNumber,IfscCode,Name
            },{new:true});
            return res.status(200).send(update);
        }
       else{
        const newaccountdetail = new Paymentmodel({AccountNumber,IfscCode,Name,user:req.user._id})
        const savedetail = await newaccountdetail.save();
       return res.status(200).send(savedetail);  
       }
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getpaymentdetail=async(req,res)=>{
    const paymentinfo = await Paymentmodel.findOne({user:req.user._id});

    if(paymentinfo || paymentinfo==null){
        res.status(200).send(paymentinfo);
    }
    else{
        res.status(400).send({message:"something went wrong"});
    }
}


