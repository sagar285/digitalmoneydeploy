const mongoose =require("mongoose")

mongoose.connect("mongodb+srv://wayseasy291:N5va3DXwRiGlHckz@cluster0.8uqrqj7.mongodb.net/digitalmoneyapp?retryWrites=true&w=majority").then(()=>{
    console.log("connection succesfull")
}).catch((e)=>{
    console.log(e)
})