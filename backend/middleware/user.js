const Userincome = require("../schema/Userincome");
const Wallethistory = require("../schema/wallethistory");
const Ordermodel = require("../schema/Order");
const Productmodel = require("../schema/Productschema");
const Usermodel = require("../schema/UserSchema");
const DailyEarning = require("../schema/dailyearning");

let pre = 12;
let myincome = 0;

exports.userincomeonly=async(req,res)=>{
    const user =await Usermodel.findOne({_id:req.user._id})
    const userorders = await Ordermodel.find({ buyer: user._id });
    let myincome=0;
    try {
    if (!userorders.length > 0) {
        return res.send({ message: "no orders found of this requested user" });
      }
      for(i=0;i<userorders.length;i++){
        const productdetail = await Productmodel.findOne({
            _id: userorders[i].products,
          });
          myincome =myincome+productdetail.dailyincome;
        }
        if(pre=== new Date().getDate()){
          const newearning =new DailyEarning({user:user._id,myearning:myincome});
          const saveincome =await newearning.save();
        }
        } catch (error) {
           res.status(400).send(error);
        }
}
exports.userleveloneincome = async (req, res) => {
  const user = await Usermodel.findOne({ _id: req.user._id });
  // here i will check weather user level one array has element or not
  if (!user.level1 > 0) {
    return res.status(201).send({ message: "no users in levelone" });
  }
  //find user order on the basis of userid which available in order collection

  const userorders = await Ordermodel.find({ buyer: user._id });

  // check weather user has any orders or not
  if (!userorders.length > 0) {
    return res
      .status(201)
      .send({ message: "no orders found of this requested user" });
  } else {
    // here our execution begin
    for (j = 0; j < user.level1.length; j++) {
      // here i will find the levelone orders
      const leveloneorders = await Ordermodel.find({ buyer: user.level1[j] });
      //   check weather leveone has any order or not
      if (!leveloneorders.length > 0) {
        return res
          .status(201)
          .send({ message: "no products found of level one" });
      } else {
        for (i = 0; i < userorders.length; i++) {
          // find product detail of user each product then assign
          // my income on basis of daily income of each product
          for (j = 0; j < leveloneorders.length; j++) {
            // check condition weather userorder any productid match with leveone products id
            // if match then we find the detail of that particular product the assign leveone income
            if (userorders[i].products === leveloneorders[j].products) {
              const productdetail = await Productmodel.findOne({
                _id: userorders[i].products,
              });
              if (!productdetail) {
                return res.status(400).send({ message: "you are a scammer" });
              } else {
                var leveloneincome = 0;
                leveloneincome += (productdetail.dailyincome * 10) / 100;
              }
            }
          }
        }
      }
    }
  }
  const updateincome = await DailyEarning.findOneAndUpdate(
    { user: req.user._id },
    { levelonearning: leveloneincome },
    { new: true }
  ).sort(-1);
};
exports.userleveltwoincome = async (req, res) => {
  const user = await Usermodel.findOne({ _id: req.user._id });
  // here i will check weather user level one array has element or not
  if (!user.level2 > 0) {
    return res.send({ message: "no users in levelone" });
  }
  //find user order on the basis of userid which available in order collection

  const userorders = await Ordermodel.find({ buyer: user._id });

  // check weather user has any orders or not
  if (!userorders.length > 0) {
    return res
      .status(400)
      .send({ message: "no orders found of this requested user" });
  } else {
    // here our execution begin
    for (i = 0; i < userorders.length; i++) {
      const productdetail = await Productmodel.findOne({
        _id: userorders[i].products,
      });
      myincome += productdetail.dailyincome;
    }
    for (j = 0; j < user.level2.length; j++) {
      // here i will find the levelone orders
      const leveloneorders = await Ordermodel.find({ buyer: user.level2[j] });
      //   check weather leveone has any order or not
      if (!leveloneorders.length > 0) {
        return res
          .status(201)
          .send({ message: "no products found of level one" });
      } else {
        for (i = 0; i < userorders.length; i++) {
          // find product detail of user each product then assign
          // my income on basis of daily income of each product
          for (j = 0; j < leveloneorders.length; j++) {
            // check condition weather userorder any productid match with leveone products id
            // if match then we find the detail of that particular product the assign leveone income
            if (userorders[i].products === leveloneorders[j].products) {
              const productdetail = await Productmodel.findOne({
                _id: userorders[i].products,
              });
              if (!productdetail) {
                return res.status(201).send({ message: "you are a scammer" });
              } else {
                var leveltwoincome = 0;
                leveltwoincome += (productdetail.dailyincome * 10) / 100;
              }
            }
          }
        }
      }
    }
  }

  const updateincome = await DailyEarning.findOneAndUpdate(
    { user: req.user._id },
    { leveltwoearning: leveltwoincome },
    { new: true }
  );
};

exports.userlevelthreeincome = async (req, res) => {
  const user = await Usermodel.findOne({ _id: req.user._id });
  // here i will check weather user level one array has element or not
  if (!user.level3 > 0) {
    return res.status(201).send({ message: "no users in levelone" });
  }
  //find user order on the basis of userid which available in order collection

  const userorders = await Ordermodel.find({ buyer: user._id });

  // check weather user has any orders or not
  if (!userorders.length > 0) {
    return res.status(201).send({ message: "no orders found" });
  } else {
    // here our execution begin
    for (i = 0; i < userorders.length; i++) {
      const productdetail = await Productmodel.findOne({
        _id: userorders[i].products,
      });
      myincome += productdetail.dailyincome;
    }
    for (j = 0; j < user.level3.length; j++) {
      // here i will find the levelone orders
      const leveloneorders = await Ordermodel.find({ buyer: user.level3[j] });
      //   check weather leveone has any order or not
      if (!leveloneorders.length > 0) {
        return res
          .status(201)
          .send({ message: "no products found of level one" });
      } else {
        for (i = 0; i < userorders.length; i++) {
          // find product detail of user each product then assign
          // my income on basis of daily income of each product
          for (j = 0; j < leveloneorders.length; j++) {
            // check condition weather userorder any productid match with leveone products id
            // if match then we find the detail of that particular product the assign leveone income
            if (userorders[i].products === leveloneorders[j].products) {
              const productdetail = await Productmodel.findOne({
                _id: userorders[i].products,
              });
              if (!productdetail) {
                return res.status(400).send({ message: "you are a scammer" });
              } else {
                var levelthreeincome = 0;
                levelthreeincome += (productdetail.dailyincome * 10) / 100;
              }
            }
          }
        }
      }
    }
  }

  const updateincome = await DailyEarning.findOneAndUpdate(
    { user: req.user._id },
    { levelthreeearning: levelthreeincome },
    { new: true }
  ).sort(-1);
};

exports.addwalletamount = async (req, res) => {
  const { price } = req.params;
  // let dailyearning=0;
  // let myearning=0
  // let teamerning=0;
  // if (pre === new Date().getDate()) {
  //   userincomeonly();
  //   const userdailyearning = await DailyEarning.findOne({user:req.user._id});
  //   myearning=userdailyearning.myearning;
  //   teamerning=userdailyearning.levelonearning+userdailyearning.leveltwoearning+userdailyearning.levelthreeearning;
  //   dailyearning=myearning+teamerning;
  //   pre++;
  //   if(pre>=30){
  //     pre--;
  //   }
  // }
  const wallet = await Wallethistory.findOne({ user: req.user._id });
  try {
    if (!wallet) {
      return res.status(201).send({ message: "no amount" });
    } else {
      wallet.amount += Number(price);
      await wallet.save();
      return res.status(200).send({ walletamount: wallet, daily:dailyearning,team:teamerning,my:myearning});
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
