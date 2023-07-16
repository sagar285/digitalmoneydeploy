import React,{useEffect, useState} from 'react'
import { useAuth } from '../component/Usercontext'
import axios from 'axios';
import { format } from 'date-fns';

const UserWithdrawhisotry = () => {
     const [userauth]=useAuth();
    const [name,setname]=useState('')
    const [AccountNumber,setAccountNumber]=useState('')
    const [IfscCode,setIfscCode]=useState('')
    const[withdrawhistory,setwithdrawhistory]=useState([]);
    const bankdetail =async()=>{
        const res= await axios.get(`/getpayment`)
        if(res.data){
         setname(res.data.Name);
         setAccountNumber(res.data.AccountNumber);
         setIfscCode(res.data.IfscCode);
        }       
   }

   const userswithdrawhistory=async()=>{
    const res=await axios.get(`/userwithdrawhistory`);
    setwithdrawhistory(res.data);
   }

   useEffect(()=>{
    bankdetail();
    userswithdrawhistory();
   },[])

  return (
    <>


    { /* top */ }
    <div className="card mt-0 container footer ">
      <div className="card-body text-center">
        <blockquote className="blockquote mb-0" style={{ fontSize: "xx-large" }}>
          <p><strong><span>{userauth?.user?.username}</span> Withdraw History</strong></p>
        </blockquote>
      </div>
    </div>

    <div>

      <div className="card mt-5 py-2 container footer">
          <div className="container-fluid">
            <h4>User Name : <span className="text-primary">{userauth?.user?.username}</span></h4>
            <h4>Account Number : <span className="text-primary">{AccountNumber}</span></h4>
            <h4>IFSC Code : <span className="text-primary">{IfscCode}</span></h4>
          </div>
      </div>

     {
        withdrawhistory && withdrawhistory.map((w)=>(
            <div className="navbar card mt-5 py-1 container info-banners text-bg-">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <h4>Rs. <span> {w.amount}</span></h4>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <h4>{format(new Date(w.reqtime),'yyy-MM-dd')}</h4>
                </li>
              </ul>
            </div>
        </div>
        ))
     }

      <div className="navbar card mt-2 py-1 container info-banners text-bg-">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <h4>Rs. <span> 1250</span></h4>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <h4>03/07/23</h4>
              </li>
            </ul>
          </div>
      </div>

      <div className="navbar card mt-2 py-1 container info-banners text-bg-">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <h4>Rs. <span> 1250</span></h4>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <h4>03/07/23</h4>
              </li>
            </ul>
          </div>
      </div>

      <div className="navbar card mt-2 py-1 container info-banners text-bg-">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <h4>Rs. <span> 1250</span></h4>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <h4>03/07/23</h4>
              </li>
            </ul>
          </div>
      </div>
 </div>
  </>
  )
}

export default UserWithdrawhisotry