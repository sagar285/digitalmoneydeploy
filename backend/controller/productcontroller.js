const cloudinary =require("../middleware/cloudinary");
const Productmodels = require("../schema/Productschema");

exports.adddProduct =async(req,res)=>{
    const {name,price,noOfDays,img,dailyincome,referalBonus,reward} =req.body;
    try {
        const result= await cloudinary.uploader.upload(img,{
            folder:"Products",
            // width:300,
            // crop:"scale"
        })

        const newproduct =new Productmodels({
            name,noOfDays,dailyincome,price,referalBonus,reward,img:{
                public_id:result.public_id,
                url:result.secure_url,
            }
        });

        const savedproduct =await newproduct.save();
        res.status(200).send(savedproduct);
    } catch (error) {
        console.log(error);
    }
}


// get all product

exports.getallproduct=async(req,res)=>{
    const products =await Productmodels.find({});
    res.status(200).send(products);
}

// single product
exports.singleproduct=async(req,res)=>{
    try {
        const {id}=req.params;
    const product = await Productmodels.findOne({_id:id});
    res.status(200).send(product); 
    } catch (error) {
       res.status(400).send(error); 
    } 
}

// update product
exports.updateproduct =async(req,res)=>{
    try {
    const {id}=req.params;
    console.log(id);
    const {name,price,noOfDays,dailyincome,referalBonus,reward} =req.body;
    console.log(req.body);
    const update =await Productmodels.findByIdAndUpdate({_id:id},{
        name,price,noOfDays,dailyincome,referalBonus,reward
    },{new:true})
    res.status(200).send(update);
} catch (error) {
      res.status(400).send(error);  
}
}

// delete product

exports.deleteproduct =async(req,res)=>{
    const {id}=req.params;
    const deleteproductbyadmin = await Productmodels.findByIdAndDelete({_id:id});
    if(deleteproductbyadmin){
        res.status(200).send({message:"user deleted succesfully"});
    }
    else{
        res.status(400).send({error:"thereis something wrong into"});
    }
}