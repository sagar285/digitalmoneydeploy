const { levelincome } = require("../controller/levelincome");
const {
  userpaymentdetail,
  getpaymentdetail,
} = require("../controller/payment");
const {
  register,
  login,
  adminwithdrawhistory,
  getuserlevelone,
  getuserleveltwo,
  getuserlevelthree,
  withdrawhistory,
  withdrawstatus,
  rechargerequest,
  alluser,
  activeusers,
  userdetailforadmin,
  allrechargerequestforadmin,
  userrechargeamount,
  userwalletamount,
  userorder,
  userwithdrawhistory,
  withdrawrequest,
  adminupi,
  getadminupi,
  adminqrcode,
  getadminqrcode,
  rechargestatus,
  totalamountinvested,
  adminrechargehistory,
  liveprojects,
  getuserupi,
  getuserqrcode,
  rechargeupdate
} = require("../controller/usercontroller");
const { adminauth, loginauth } = require("../middleware/auth");
const {  userincomeonly, addwalletamount } = require("../middleware/user");

const route = require("express").Router();

route.post("/register", register);
route.post("/login", login);
route.get("/loginverify", loginauth, (req, res) => {
  res.send({ ok: "user verify succesfully" });
});
route.get("/adminverify", loginauth, adminauth, (req, res) => {
  res.send({ ok: "user verify succesfully" });
});

route.post("/addpayment", loginauth, userpaymentdetail);
route.get("/getpayment", loginauth, getpaymentdetail);
route.post("/income", loginauth, levelincome);
route.get("/getlevelone", loginauth, getuserlevelone);
route.get("/getleveltwo", loginauth, getuserleveltwo);
route.get("/getlevelthree", loginauth, getuserlevelthree);




route.get("/adminwithdraw", loginauth, adminauth, adminwithdrawhistory);
route.get("/adminrecharge", loginauth, adminauth, adminrechargehistory);
route.put("/withdrawstatus/:id", loginauth, adminauth, withdrawstatus);
route.put("/rechargestatus/:id", loginauth, adminauth, rechargestatus);
route.get("/alluser",loginauth,adminauth,alluser);
route.get("/activeuser",loginauth,adminauth,activeusers);
route.get("/user/:id",loginauth,adminauth,userdetailforadmin)
route.get("/rechargerequest",loginauth,adminauth,allrechargerequestforadmin)
route.get("/witdrawrequest",loginauth,adminauth,withdrawrequest);
route.put("/adminupi",loginauth,adminauth,adminupi);
route.get("/getadminupi",loginauth,adminauth,getadminupi)
route.get("/getadminqrcode",loginauth,adminauth,getadminqrcode)
route.put("/adminqrcode",loginauth,adminauth,adminqrcode)
route.get("/totalamountinvested",loginauth,adminauth,totalamountinvested);



route.get("/getuserupi",loginauth,getuserupi)
route.get("/getuserqrcode",loginauth,getuserqrcode)
route.post("/recharge", loginauth, rechargerequest);
route.get("/rechargeamount",loginauth,userrechargeamount);
route.get("/walletamount",loginauth,userwalletamount);
route.post("/userorder/:id",loginauth,userorder)
route.post("/userwithdraw", loginauth, withdrawhistory);
route.get("/userwithdrawhistory",loginauth,userwithdrawhistory)
route.get("/userincome",loginauth,userincomeonly)
// route.get("/income",loginauth,userleveloneincome);
// route.get("/incometwo",loginauth,userleveltwoincome);
route.get("/liveprojects",loginauth,liveprojects);
route.put("/addwallet/:price",loginauth,addwalletamount);
route.put("/rechargeupdate",loginauth,rechargeupdate)



module.exports = route;
