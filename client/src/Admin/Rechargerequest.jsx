import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {format} from "date-fns"

const Rechargerequest = () => {
    const [usereequest,setuserrequest]=useState([]);

    const statuschange=async(id)=>{
      const status =1;
      const res=await axios.put(`/rechargestatus/${id}`,{status});
      if(res.status==200){
        allrechargerequest();
      }
   }

  const allrechargerequest =async()=>{
       const {data}=await axios.get(`/rechargerequest`);
       setuserrequest(data);
  }

  useEffect(()=>{
   allrechargerequest();
  },[])

  return (
    <>
    { /* top */ }
    <div className="card mt-0 container footer ">
      <div className="card-body text-center">
        <blockquote className="blockquote mb-0" style={{ fontSize: "xx-large" }}>
          <p><strong>Recharge Requests</strong></p>
        </blockquote>
      </div>
    </div>

    <div>

      <div className="navbar card mt-5 py-2 container text-center footer">
          <div className="container-fluid row">
            <ul className="navbar-nav col-md-3 col-6">
              <li className="nav-item">
                <h4><strong>Name</strong></h4>
              </li>
            </ul>
            <ul className="navbar-nav col-md-3 col-6">
              <li className="nav-item">
                <h4><strong>Amount(₹)</strong></h4>
              </li>
            </ul>
            <ul className="navbar-nav col-md-3 col-6">
              <li className="nav-item">
                <h4><strong>Status</strong></h4>
              </li>
            </ul>
            <ul className="navbar-nav col-md-3 col-6">
              <li className="nav-item">
                <h4><strong>Date</strong></h4>
              </li>
            </ul>
          </div>
      </div>

     {
      usereequest.length>0 ? usereequest.map((req)=>(
        <div className="navbar card mt-5 py-1 container text-center info-banners text-bg-">
        <div className="container-fluid row">
          <ul className="navbar-nav col-md-3 col-6">
            <li className="nav-item">
              <h4>{req.user.username}</h4>
            </li>
          </ul>
          <ul className="navbar-nav col-md-3 col-6">
            <li className="nav-item">
              <h4>Rs. <span className="text-primary"> {req.amount}</span></h4>
            </li>
          </ul>            
          { /* Dropdown */ }
          <ul className="navbar-nav col-md-3 col-6">
            <li className="nav-item dropdown">
              <button className="btn btn-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Select
              </button>
              <ul className="dropdown-menu dropdown-menu-light" style={{ position: "absolute" }}>
            <li><a className="dropdown-item text-success" onClick={()=>{statuschange(req._id)}} href="#">Pay</a></li>
            <li><a className="dropdown-item text-danger" href="#">Reject</a></li>
          </ul>
            </li>
          </ul>
          { /* -------------- */ }
          <ul className="navbar-nav col-md-3 col-6">
            <li className="nav-item">
              <h4>{format(new Date(req.date),'dd/MM/yyyy')}</h4>
            </li>
          </ul>
        </div>
    </div>
      )):(
        <h1 style={{color:"white",textAlign:"center",margin:"20px"}}>no request found</h1>
      )
     }
    </div>


  </>
  )
}

export default Rechargerequest