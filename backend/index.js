const express =require("express")
const app=express();
const cors =require("cors");
const PORT = 8000
const userroutes =require("./routes/userRoutes")
const productroutes =require("./routes/productRoute")
require("./dbconnection/connection");
const path=require("path");



app.use(express.json());
const _dirname=path.dirname("")
const buildpath = path.join(_dirname,"../client/build")
app.use(express.static(buildpath));
app.use(
    cors({
      "origin": "*",
    })
  );
app.use(userroutes);
app.use(productroutes);




app.listen(PORT,()=>{
    console.log(`server runing on port no :${PORT}`)
})
