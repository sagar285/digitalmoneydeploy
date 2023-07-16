import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Addproduct = () => {
 const [name,setname]=useState('');
 const [price,setprice]=useState('');
 const [dailyincome,setdailyincome]=useState('');
 const [noOfDays,setnoOfDays]=useState('');
 const [referalBonus,setreferalBonus]=useState('');
 const [reward,setreward]=useState('');
 const [img,setimg]=useState('');
 const navigate =useNavigate();


 const addproduct =async(e)=>{
  e.preventDefault();
  const res =await axios.post(`/addproduct`,{
    name,price,noOfDays,img,dailyincome,referalBonus,reward
  })
  if(res.status==200){
    navigate("/admin/editproducts");
  }
 }
  
 const handleimage =(e)=>{
   const file =e.target.files[0];
   setfiletobase(file);
 }

 const setfiletobase=(file)=>{
  const reader =new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend=()=>{
    setimg(reader.result);
  }
 }












  return (
    <>

     {/* top */}
      <div className="card mt-0 container footer">
        <div className="card-body text-center">
          <blockquote
            className="blockquote mb-0"
            style={{ fontSize: "xx-large" }}
          >
            <p>
              <strong>Add Product</strong>
            </p>
          </blockquote>
        </div>
      </div>

      {/* middle */}
      <form >
        <div className="card mt-4 pt-4 pb-0 container footer ">
          <div className="card-body text-center coloumn">
            <input
              id="pName"
              className=" ms-sm form-control"
              type="text"
              placeholder="Enter Product Name"
              onChange={(e)=>setname(e.target.value)}
              style={{ height: 40, width: "100%", fontSize: "large" }}
            />
            <br />
            <input
              id="price"
              className="mt-3 form-control"
              type="number"
              placeholder="Enter Price"
              onChange={(e)=>setprice(e.target.value)}
              style={{ height: 40, width: "100%", fontSize: "large" }}
            />
            <br />
            <input
              id="dailyIncome"
              className="ml-22 form-control"
              type="number"
              placeholder="Enter Daily Income"
              onChange={(e)=>setdailyincome(e.target.value)}
              style={{ height: 40, width: "100%", fontSize: "large" }}
            />
            <br />
            
            <input
              id="noOfDays"
              className="ms-10 form-control"
              type="number"
              placeholder="Enter No. of Days"
              onChange={(e)=>setnoOfDays(e.target.value)}
              style={{ height: 40, width: "100%", fontSize: "large" }}
            />
            <br />
            <input
              id="referalBonus"
              className="mt-3 form-control"
              type="text"
              placeholder="Enter Referal Bonus"
              onChange={(e)=>setreferalBonus(e.target.value)}
              style={{ height: 40, width: "100%", fontSize: "large" }}
            />
            <br />
            <input
              id="reward"
              className="ml-3 form-control"
              type="text"
              placeholder="Enter Reward"
              onChange={(e)=>setreward(e.target.value)}
              style={{ height: 40, width: "100%", fontSize: "large" }}
            />
            <br />
            <input
              className="mt-3 form-control"
              type="file"
              placeholder="Enter Reward"
              onChange={handleimage}
              style={{
                height: 40,
                width: "100%",
                fontSize: "large",
                border: "1px solid rgba(0,0,0,0.5)",
              }}
            />
            <br />
            <Link
              className="btn btn-dark my-3 me-2 text-bg-dark py-2 px-5"
              to={"/admin/adminpanel"}
            >
              CANCEL
            </Link>
            <button onClick={addproduct} className="btn btn-dark my-3 ms-2 text-bg-dark py-2 px-5">
              ADD
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Addproduct;
