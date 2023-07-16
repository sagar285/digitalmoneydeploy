import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {format} from "date-fns"

const Reachargehistory = () => {

  const [withdrawhistory,setwithdrawhistory]=useState([])

const adminwithdraw=async()=>{
  const res=await axios.get(`/adminrecharge`);
  console.log(res)
  setwithdrawhistory(res.data);
}
console.log(withdrawhistory);

useEffect(()=>{
  adminwithdraw();
},[])


  return (
    <>
    { /* top */ }
    {/* <div className="card mt-0 container footer ">
      <div className="card-body text-center mx-auto">
        <blockquote className="blockquote mb-0" style={{ fontSize: "xx-large" }}>
          <p><strong>Recharge History</strong></p>
        </blockquote>
        <form className="d-flex mt-4" role="search">
            <input className="form-control me-2 border-3" type="search" placeholder="Search User" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div> */}
    <div className="navbar card mt-5 py-2 container text-center footer">
          <div className="container-fluid row">
            <ul className="navbar-nav col-md-3 col-6">
              <li className="nav-item">
                <h4><strong>Referalid</strong></h4>
              </li>
            </ul>
            <ul className="navbar-nav col-md-3 col-6">
              <li className="nav-item">
                <h4><strong>Amount Left(₹)</strong></h4>
              </li>
            </ul>
            <ul className="navbar-nav col-md-3 col-6">
              <li className="nav-item">
                <h4><strong>Date</strong></h4>
              </li>
            </ul>
          </div>
      </div>

    <div>

    {
      withdrawhistory.length>0 ?withdrawhistory.map((r)=>(
        <div key={r._id} className="navbar card mt-5 py-1 container text-center info-banners text-bg-">
        <div className="container-fluid row">
          <ul className="navbar-nav col-md-3 col-6">
            <li className="nav-item">
              <h4>{r.user.referalid}</h4>
            </li>
          </ul>
          <ul className="navbar-nav col-md-3 col-6">
            <li className="nav-item">
              <h4>Rs. <span className="text-primary"> {r.amount}</span></h4>
            </li>
          </ul>            
          { /* Dropdown */ }
        
          { /* -------------- */ }
          <ul className="navbar-nav col-md-3 col-6">
            <li className="nav-item">
              <h4>{format(new Date(r.date),'dd/MM/yyyy')}</h4>
            </li>
          </ul>
        </div>
    </div>
      )):(
        <h1 style={{color:"white",textAlign:"center",margin:"20px"}}>No Recharge history</h1>
      )
    }
    </div>
  </>
  )
}

export default Reachargehistory