import React from 'react'
import {Link} from "react-router-dom"
import { useAuth } from '../component/Usercontext'
import { toast,Toaster } from 'react-hot-toast';

const Navbar = () => {
  const [userauth,setuserauth]=useAuth();

  const handleLogout =()=>{
    setuserauth({
      ...userauth,user:null,token:"",
    });
    localStorage.removeItem("auth");
    toast.success("Logout succesfully")
  }

  


  return (
    <>
    
     <nav className="navbar navbar-expand-lg bg-body-transparent bg-transparent">
      <div className="container-fluid">
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
         
         {
          userauth && userauth?.user?.role==1 ?(
            <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link link" aria-current="page" to="/admin/adminpanel">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link" to="/admin/adminprofile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link" to="/admin/editproducts">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link" to="/admin/rechargerequest">Recharge</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link" to="/admin/withdrawrequest">Withdraw</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link" to="/admin/allusers">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link" to="/admin/activeusers">ActiveUsers</Link>
            </li>
          </ul>
           ):(
             <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link link" aria-current="page" to={userauth?.user ? "/auth/earning" :"/"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link" to="/auth/availableprojects">Our Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link" to="/contact">Contact Us</Link>
          </li>
          
          {/* <li className="nav-item">
            <Link className="nav-link link" to="/auth/earning">Earning</Link>
          </li> */}
        </ul>
        )
         }    
         {
           
           userauth?.user && userauth?.user?.role!==1 ? (
            <>
            <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link link " to="/auth/pay">Recharge</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link " to="/auth/withdrawrequest">Withdraw</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link" to="/auth/liveprojects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link" to="/auth/userprofile">Account</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link" to="/auth/levels">Team</Link>
          </li>
              </ul>

            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link link" onClick={handleLogout} to="/desktop10">Logout</Link>
            </li>
            <li className="nav-item">
          <Link to="/auth/bankdetail"><img className="img-thumbnail" src="/images/img_569204.png" alt="" /></Link>
            </li>
          </ul>
          </>
           ):(
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link link" to="/desktop16">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link" to="/desktop10">Login</Link>
            </li>
          </ul>
           )

         }
        </div>
      </div>
    </nav>
    <Toaster/>
    </>
  )
}

export default Navbar