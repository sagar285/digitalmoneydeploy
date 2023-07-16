const Usermodel = require("../schema/UserSchema");
const crypto = require("crypto");
const Levelsmodel = require("../schema/levelsschema");
const cloudinary = require("../middleware/cloudinary");
// const {
//   userleveloneincome,
//   userleveltwoincome,
//   userlevelthreeincome,
// } = require("../middleware/user");
const Withdrawlhistory = require("../schema/withdrawlhistory");
const Rechargemodel = require("../schema/recharge");
const Userincome = require("../schema/Userincome");
const Paymentmodel = require("../schema/Userpayment");
const Projectmodel = require("../schema/Productschema");
const wallethistory = require("../schema/wallethistory");
const Ordermodel = require("../schema/Order");
const Admincredential = require("../schema/admincredential");
const { userleveloneincome, userleveltwoincome, userlevelthreeincome } = require("../middleware/user");

exports.register = async (req, res) => {
  const { username, password, confirmpassword, phone, sponsorid } = req.body;
  const referalid = crypto.randomInt(0, 1000000);
  try {
    const newuser = new Usermodel({
      username,
      password,
      confirmpassword,
      phone,
      referalid,
      sponsorid,
    });
    const saveduser = await newuser.save();
    await Paymentmodel.create({ user: saveduser._id });
    const user1 = await Usermodel.findOne({ referalid: sponsorid });
    if (user1 && user1.sponsorid !== 0) {
      var levels1 = saveduser._id;
      user1.level1.push(saveduser._id);
      await user1.save();
      const user2 = await Usermodel.findOne({ referalid: user1.sponsorid });
      if (user2 && user2.sponsorid !== 0) {
        var levels2 = saveduser._id;
        user2.level2.push(saveduser._id);
        await user2.save();
      }
      const user3 = await Usermodel.findOne({ referalid: user2.sponsorid });
      if (user3 && user3.sponsorid !== 0) {
        var levels3 = saveduser._id;
        user3.level3.push(saveduser._id);
        await user3.save();
      }
    }

    const levels = new Levelsmodel({ levels1, levels2, levels3 });
    const savelevels = await levels.save();
    res.status(200).send({ user: saveduser, userlevels: savelevels });
  } catch (error) {
    res.status(400).send(error);
  }
};
exports.login = async (req, res) => {
  const { username, password } = req.body;
  const usercheck = await Usermodel.findOne({ username, password });
  if (usercheck) {
    const token = await usercheck.generatetoken();
    res.status(200).send({ usercheck, token });
  } else {
    res.status(400).send({ message: "pls signup or somthing went wrong" });
  }
};

exports.getuserlevelone = async (req, res) => {
  try {
    console.log(req.user);
    const user = await Usermodel.findOne({ _id: req.user._id });
    let level1userarray = [];
    var a = 0;
    for (let i = 0; i < user.level1.length; i++) {
      const user23 = await Levelsmodel.findOne({ levels1: user.level1[i] })
        .populate("levels1")
        .select("-levels2")
        .select("-levels3");
      if (user23 !== null) {
        level1userarray[a] = user23.levels1;
        a++;
      }
    }
    if(level1userarray>0){
      userleveloneincome()
  }
    res.send({ user1arrya: level1userarray });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getuserleveltwo = async (req, res) => {
  try {
    const user = await Usermodel.findOne({ _id: req.user._id });
    // console.log(user);
    let level2userarray = [];
    var b = 0;
    for (let i = 0; i < user.level2.length; i++) {
      const user23 = await Levelsmodel.findOne({ levels2: user.level2[i] })
        .populate("levels2")
        .select("-levels1")
        .select("-levels3");
      // console.log(user23);
      if (user23 !== null) {
        level2userarray[b] = user23.levels2;
        b++;
      }
    }
    if(level2userarray>0){
      userleveltwoincome();
    }
    res.send({ level2user: level2userarray });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getuserlevelthree = async (req, res) => {
  try {
    const user = await Usermodel.findOne({ _id: req.user._id });
    // console.log(user);
    let level3userarray = [];
    var c = 0;
    for (let i = 0; i < user.level3.length; i++) {
      const user23 = await Levelsmodel.findOne({ levels3: user.level3[i] })
        .populate("levels3")
        .select("-levels2")
        .select("-levels1");
      // console.log(user23);
      if (user23 !== null) {
        level3userarray[c] = user23.levels3;
        c++;
      }
    }
    if(level3userarray>0){
      userlevelthreeincome();
    }
    res.status(200).send({ level3user: level3userarray });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.adminupi = async (req, res) => {
  const { upi } = req.body;
  const adminverify = await Usermodel.findOne({ _id: req.user });
  if (adminverify.role === 1) {
    const alreadyupiid = await Admincredential.findOne({ admin: req.user._id });
    if (alreadyupiid) {
      const updateupiid = await Admincredential.findOneAndUpdate(
        { admin: req.user._id },
        { upiid: upi },
        { new: true }
      );
      return res.status(200).send(updateupiid);
    } else {
      const newupiid = await Admincredential({
        upiid: upi,
        admin: req.user._id,
      });
      const saveupi = await newupiid.save();
      return res.status(200).send(saveupi);
    }
  } else {
    return res.status(201).send({ message: "hat be bsdk, tu admin nhi hai" });
  }
};

exports.getadminupi = async (req, res) => {
  try {
    const adminupi = await Admincredential.findOne({
      admin: req.user._id,
    }).select("upiid");
    if (adminupi) {
      return res.status(200).send(adminupi.upiid);
    } else {
      return res.status(201).send({ message: "you don't have any upi id" });
    }
  } catch (error) {
    return res.send(error);
  }
};
exports.getuserupi = async (req, res) => {
  try {
    const adminupi = await Admincredential.findOne({}).select("upiid");
    if (adminupi) {
      return res.status(200).send(adminupi.upiid);
    } else {
      return res.status(201).send({ message: "you don't have any upi id" });
    }
  } catch (error) {
    return res.send(error);
  }
};
exports.getadminqrcode = async (req, res) => {
  try {
    const adminupi = await Admincredential.findOne({
      admin: req.user._id,
    }).select("QRcode");
    if (adminupi) {
      return res.status(200).send(adminupi.QRcode);
    } else {
      return res.status(201).send({ message: "you don't have any upi id" });
    }
  } catch (error) {
    return res.send(error);
  }
};
exports.getuserqrcode = async (req, res) => {
  try {
    const adminupi = await Admincredential.findOne({}).select("QRcode");
    if (adminupi) {
      return res.status(200).send(adminupi.QRcode);
    } else {
      return res.status(201).send({ message: "you don't have any upi id" });
    }
  } catch (error) {
    return res.send(error);
  }
};

exports.adminqrcode = async (req, res) => {
  try {
    const { img } = req.body;
    const result = await cloudinary.uploader.upload(img, {
      folder: "QRCode",
      // width:300,
      // crop:"scale"
    });

    const adminverify = await Usermodel.findOne({ _id: req.user._id });
    if (adminverify.role === 1) {
      const alreadyupiid = await Admincredential.findOne({
        admin: req.user._id,
      });
      if (alreadyupiid) {
        const updateqrcode = await Admincredential.findOneAndUpdate(
          { admin: req.user._id },
          {
            QRcode: {
              public_id: result.public_id,
              url: result.secure_url,
            },
          },
          { new: true }
        );
        return res.status(200).send(updateqrcode);
      } else {
        const newqrcode = new Admincredential({
          QRcode: {
            public_id: result.public_id,
            url: result.secure_url,
          },
          admin: req.user._id,
        });
        const saveqrcode = await newqrcode.save();
        return res.status(200).send(saveqrcode);
      }
    } else {
      return res.status(201).send({ message: "hat be bsdk, tu admin nhi hai" });
    }
  } catch (error) {
    return res.send(error);
  }
};

// withdrwal

exports.withdrawhistory = async (req, res) => {
  const { amount } = req.body;
  const walletamount = await wallethistory.findOne({ user: req.user._id });
  const withdrawrequestuser = await Withdrawlhistory.findOne({
    user: req.user._id,
    status: 0,
  });
  if (withdrawrequestuser) {
    return res
      .status(201)
      .send({
        message: "your previousrequest in pending, first this will confirmed",
      });
  } else {
    if (walletamount) {
      walletamount.amount -= amount;
      await walletamount.save();
      const newwithdraw = new Withdrawlhistory({
        user: req.user._id,
        amount: amount,
      });
      const savewithdraw = await newwithdraw.save();
      return res.status(200).send({ message: "your request has submitted" });
    }
  }
};
// admin withdrwa
exports.adminwithdrawhistory = async (req, res) => {
  const withdrawlhistory = await Withdrawlhistory.find().populate(
    "user",
    "referalid"
  );
  if (withdrawlhistory) {
    let newarr = [];
    let j = 0;
    for (i = 0; i < withdrawlhistory.length; i++) {
      if (withdrawlhistory[i].status == 1) {
        newarr[j] = withdrawlhistory[i];
        j++;
      }
    }
    return res.status(200).send(newarr);
  }
};
exports.adminrechargehistory = async (req, res) => {
  const rechargehistory = await Rechargemodel.find().populate(
    "user",
    "referalid"
  );
  if (rechargehistory) {
    let newarr = [];
    let j = 0;
    for (i = 0; i < rechargehistory.length; i++) {
      if (rechargehistory[i].status == 1) {
        newarr[j] = rechargehistory[i];
        j++;
      }
    }
    return res.status(200).send(newarr);
  }
};

exports.withdrawrequest = async (req, res) => {
  const withdrawlrequest = await Withdrawlhistory.find().populate(
    "user",
    "username"
  );
  if (withdrawlrequest) {
    let newarr = [];
    let j = 0;
    for (i = 0; i < withdrawlrequest.length; i++) {
      if (withdrawlrequest[i].status == 0) {
        newarr[j] = withdrawlrequest[i];
        j++;
      }
    }
    return res.status(200).send(newarr);
  }
};
// user withraw hisotry

exports.userwithdrawhistory = async (req, res) => {
  const withdrawhistory = await Withdrawlhistory.find({ user: req.user._id });
  res.status(200).send(withdrawhistory);
};

// withdraw status controller
exports.withdrawstatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const withdraw = await Withdrawlhistory.findByIdAndUpdate(
    { _id: id },
    { status: status },
    { new: true }
  );
  res.send(withdraw);
};
exports.rechargestatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const recharge = await Rechargemodel.findByIdAndUpdate(
    { _id: id },
    { status: status },
    { new: true }
  );
  res.status(200).send(recharge);
};

exports.rechargerequest = async (req, res) => {
  try {
    const { amount, utrid } = req.body;
    const alreadyrecharge = await Rechargemodel.findOne({
      user: req.user._id,
      status: 1,
    });
    if (alreadyrecharge) {
      alreadyrecharge.amount += amount;
      alreadyrecharge.utrid = utrid;
      const updaterecharge = await alreadyrecharge.save();
      res.status(200).send(updaterecharge);
    } else {
      const newrecharge = new Rechargemodel({
        amount,
        utrid,
        user: req.user._id,
      });
      const saverecharge = await newrecharge.save();
      res.status(200).send(saverecharge);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

// all users except admin the function only acess by admin
exports.alluser = async (req, res) => {
  try {
    const users = await Usermodel.find({});
    const newusers = users.filter((user) => {
      return user.sponsorid != 0;
    });
    res.send(newusers);
  } catch (error) {
    res.status(400).send(error);
  }
};

// active user all user who are purchase any plan

exports.activeusers = async (req, res) => {
  try {
    const rechargeuser = await Rechargemodel.find({})
      .populate("user")
      .select("-amount")
      .select("-utrid")
      .select("-date");
    let newuser = [];
    for (i = 0; i < rechargeuser.length; i++) {
      newuser[i] = rechargeuser[i].user._id;
    }
    const user = new Set(newuser);
    const unique = [...user];
    let activeuser = [];
    for (j = 0; j < unique.length; j++) {
      activeuser[j] = await Usermodel.findById({ _id: unique[j] }).select(
        "username"
      );
    }
    res.status(200).send(activeuser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// userdetail for admin
exports.userdetailforadmin = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Usermodel.findOne({ _id: id });
    const Uniid = user.referalid;
    const team = user.level1.length + user.level2.length + user.level3.length;
    const wallet = (await Userincome.findOne({ user: id })) || 0;
    const recharegamount = await Rechargemodel.find({ user: id }).select(
      "amount"
    );
    let rechargeavailable = 0;
    for (i = 0; i < recharegamount.length; i++) {
      rechargeavailable += recharegamount[i].amount;
    }
    const accountinfo = await Paymentmodel.findOne({ user: id });
    res.status(200).send({
      user: user.username,
      refralid: Uniid,
      usertem: team,
      userwallet: wallet,
      availablerecharge: rechargeavailable,
      info: accountinfo,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// allrechargerequestforadmin
exports.allrechargerequestforadmin = async (req, res) => {
  try {
    const rechargerequsts = await Rechargemodel.find({}).populate(
      "user",
      "username"
    );
    if (rechargerequsts) {
      let newarr = [];
      let j = 0;
      for (i = 0; i < rechargerequsts.length; i++) {
        if (rechargerequsts[i].status == 0) {
          newarr[j] = rechargerequsts[i];
          j++;
        }
      }
      return res.status(200).send(newarr);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

// earning model

// exports.dailyearning =async(req,res)=>{
//     try {
//         const dailyamount =0;
//        const userrechargeproject = await Rechargemodel.findOne({user:req.user._id})
//        console.log(userrechargeproject);
//        if(userrechargeproject||null){
//         if(userrechargeproject.amount){
//         dailyamount = await Projectmodel.findOne({price:userrechargeproject.amount}).select("dailyincome");
//         }
//        }
//     } catch (error) {
//        res.status(400).send(error);
//     }
// }

// user amount walllet and recharge

exports.userrechargeamount = async (req, res) => {
  let rechargeamount = await Rechargemodel.findOne({
    user: req.user._id,
    status: 1,
  }).select("amount");
  if (rechargeamount) {
    res.send({ rechargeamountvalue: rechargeamount.amount });
  } else {
    rechargeamount = 0;

    res.send({ rechargeamountvalue: rechargeamount });
  }
};
exports.userwalletamount = async (req, res) => {
  let walletamount = await wallethistory
    .findOne({ user: req.user._id })
    .select("amount");
  if (walletamount) {
    res.send({ walletamountvalue: walletamount.amount });
  } else {
    walletamount = 0;

    res.send({ walletamountvalue: walletamount });
  }
};

exports.userorder = async (req, res) => {
  const { id } = req.params;
  const user = await Ordermodel.findOne({ buyer: req.user._id });
  const products = await Ordermodel.findOne({ products: id });
  if (products && user) {
    return res.send({ productid: products.products, buyerid: products.buyer });
  } else {
    const order = new Ordermodel({
      products: req.params.id,
      buyer: req.user._id,
    }).save();
    const product = await Projectmodel.findById(id);
    const prewallet = await wallethistory.findOne({user:req.user._id})
    if(prewallet){
        prewallet.amount+= product.reward;
        await prewallet.save();
    }
    else{
      const newwallet = new wallethistory({user:req.user._id,amount:product.reward});
      const savewallet  =await newwallet.save();
    }
      return res.send({ ok: true });
  }
};

exports.totalamountinvested = async (req, res) => {
  try {
    const amountinvested = await Rechargemodel.find({}).select("amount");
    let newamount = 0;
    for (i = 0; i < amountinvested.length; i++) {
      newamount += amountinvested[i].amount;
    }
    return res.status(200).send({ data: newamount });
  } catch (error) {
    res.status(400).send(error);
  }
};

// live projects
exports.liveprojects = async (req, res) => {
  const orders = await Ordermodel.find({ buyer: req.user._id });
  console.log(orders.length);
  let product = [];
  let j = 0;
  try {
    if (!orders) {
      return res.status(201).send({ message: "no live projects available" });
    }
    for (i = 0; i < orders.length; i++) {
      const productdetail = await Projectmodel.findOne({
        _id: orders[i].products,
      });
      if (productdetail) {
        product[j] = productdetail;
        j++;
      }
    }

    return res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.rechargeupdate = async (req, res) => {
  try {
    const { amount } = req.body;
    console.log(amount);
    const rechargevalue = await Rechargemodel.findOneAndUpdate(
      { user: req.user._id },
      { amount },
      { new: true }
    );
    console.log(rechargevalue);
    return res.status(200).send(rechargevalue);
  } catch (error) {
    return res.status(400).send(error);
  }
};

exports.walletamount = async () => {};
