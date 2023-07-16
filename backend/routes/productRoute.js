const express =require("express")
const route =express.Router();
const { loginauth,adminauth } =require("../middleware/auth");
const { adddProduct, getallproduct,singleproduct,updateproduct,deleteproduct } = require("../controller/productcontroller");

route.post("/addproduct",loginauth,adminauth,adddProduct);
route.get("/getproduct",getallproduct);
route.get("/singleproduct/:id",loginauth,adminauth,singleproduct)
route.put("/updateproduct/:id",loginauth,adminauth,updateproduct)
route.delete("/deleteproduct/:id",loginauth,adminauth,deleteproduct)



module.exports =route;