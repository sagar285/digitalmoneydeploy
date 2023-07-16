import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Withdrawhisotry = () => {
//  adminwithdraw
const [withdrawhistory,setwithdrawhistory]=useState([])

const adminwithdraw=async()=>{
  const res=await axios.get(`/adminwithdraw`);
  setwithdrawhistory(res.data);
}
console.log(withdrawhistory);

useEffect(()=>{
  adminwithdraw();
},[])


  return (
    <>
    { /* top */ }
    <div className="card mt-0 container footer ">
    <div className="card-body text-center">
        <blockquote className="blockquote mb-0" style={{ fontSize: "xx-large" }}>
          <p><strong>Withdraw history</strong></p>
        </blockquote>
      </div>
    <div className="navbar card mt-5 py-2 container text-center footer">
          <div className="container-fluid row">
            <ul className="navbar-nav col-md-3 col-6">
              <li className="nav-item">
                <h4><strong>Referalid</strong></h4>
              </li>
            </ul>
            <ul className="navbar-nav col-md-3 col-6">
              <li className="nav-item">
                <h4><strong>Amount (₹)</strong></h4>
              </li>
            </ul>
            <ul className="navbar-nav col-md-3 col-6">
              <li className="nav-item">
                <h4><strong>Date</strong></h4>
              </li>
            </ul>
          </div>
      </div>
    </div>

    <div>

    
           {
               withdrawhistory.length>0 ? withdrawhistory.map((w)=>(
                <div key={w._id} className="navbar btn text-bg-light card mt-2 py-1 container info-banners" onClick={event => { window.location.href = 'usersWithdrawHistory.html'; }}>
                <div className="container-fluid">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <h4><span>Referal </span>{w.user.referalid}</h4>
                    </li> 
                  </ul>
                </div>
            </div>   
               )) :(

                <h1 style={{color:"white",textAlign:"center",margin:"10px"}}>No History</h1>
               )
               }
    </div>
  </>
  )
}

export default Withdrawhisotry