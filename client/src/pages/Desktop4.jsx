import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";

// user can withdraw payment request to admin
// show walletamout 
// show withdraw history

const Desktop4 = () => {

const [amount,setamount]=useState(0);
const [walletamount,setwalletamount]=useState(0);
const navigate =useNavigate();

const walletamountvalue =async()=>{
  const {data}=await axios.get(`/walletamount`);
  setwalletamount(data.walletamountvalue);
}
  const withdrawrequest =async()=>{
    if(walletamount<=200){
      return alert("hey, u can not withdraw amount less than 200")
    }
    else if(amount>walletamount){
      return alert("this amount higher than wallet amount");
    }
    else{
      const res= await axios.post(`/userwithdraw`,{amount});
      console.log(res);
      if(res.status===200){
        walletamountvalue();
        navigate("/auth/userprofile");
      }
      else{
        alert(res.data.message);
        navigate("/auth/userprofile");
      }
    }  
  }
useEffect(()=>{
   walletamountvalue();
},[]);


  return (
    <>
      {/* Navbar */}
   

      {/* top */}
      <div className="card mt-4 container footer">
        <div className="card-body text-center">
          <blockquote
            className="blockquote mb-0"
            style={{ fontSize: "xx-large" }}
          >
            <p>
              <strong>Withdaw the payment from wallet to account</strong>
            </p>
          </blockquote>
        </div>
      </div>

      {/* middle */}
      <div className="card mt-5 pt-4 pb-4 container footer">
        <div className="card-body text-center">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="card text-bg-dark">
                <div className="card-body row">
                  <h4 className="card-title">Wallet</h4>
                  <h4 className="card-title text-info"> Rs.{walletamount}</h4>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 mt-3 mt-md-0">
              <div className="card text-bg-dark">
                <Link to={"/auth/userwithdrawhistory"}>
                <div className="card-body">
                  <h4 className="card-title">Withdraw</h4>
                  <h4 className="card-title">History</h4>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <input
            className="mt-5 mb-3"
            type="number"
            onChange={(e)=>setamount(e.target.value)}
            placeholder=" Enter Amount in Rs."
            style={{ height: 40, width: "50%", fontSize: "large" }}
          />
          <br />
          {/* <button class="mt-3 mb-3 text-bg-dark py-1 px-3">Request</button> */}
          <button onClick={withdrawrequest} className="btn text-bg-dark border-0">
            Request
          </button>
        </div>
      </div>
    </>
  );
};

export default Desktop4;
