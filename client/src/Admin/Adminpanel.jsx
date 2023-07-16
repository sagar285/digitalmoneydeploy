import axios, { all } from 'axios';
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const Adminpanel = () => {
 const [totalusers,settotalusers]=useState(0);
 const [rechargerequest,setrechargerequest]=useState(0);
 const [withdrawrequest,setwithdrawrequest]=useState(0);
 const [activeuser,setactiveuser]=useState(0);
 const [totalamount,settotalamount]=useState(0);
  const getallusers=async()=>{
    const {data}=await axios.get(`/alluser`);
    settotalusers(data.length)
  }

  const allrechargerequest =async()=>{
    const {data}=await axios.get(`/rechargerequest`);
    setrechargerequest(data.length);
}
const adminwithdrawrequest=async()=>{
  const res=await axios.get(`/witdrawrequest`);
  setwithdrawrequest(res.data.length);
}

const activeusers=async()=>{
  const {data}=await axios.get(`/activeuser`)
  setactiveuser(data.length);
}
const totalamountinvested=async()=>{
  const {data}=await axios.get(`/totalamountinvested`)
  console.log(data);
  settotalamount(data.data);
}

   useEffect(()=>{
        getallusers();
        allrechargerequest();
        adminwithdrawrequest();
        activeusers();
        totalamountinvested();
   },[]);





  return (
    <>

    { /* Navbar */ }
  

    { /* top */ }
    <div className="card mt-0 container footer">
      <div className="card-body text-center">
        <blockquote className="blockquote mb-0" style={{ fontSize: "xx-large" }}>
          <p><strong>Admin Panel</strong></p>
        </blockquote>
      </div>
    </div>

    { /* middle */ }

        <div className="container row mx-auto mt-5">
            <div className="col-12 col-md-6 my-2 my-md-0">
                <div className="infoCards text-bg-light btn card text-center">
                    <div className="card-body">
                    <Link to={"/admin/ourproducts"}>
                      <h3 className="card-title">Products</h3>
                      </Link>
                    </div>
                  </div>
            </div>
            <div className="col-12 col-md-6 my-2 my-md-0">
                <div className="infoCards text-bg-light btn card text-center" >
                    <div className="card-body">
                      <Link to={"/admin/editproducts"}>
                      <h3 className="card-title">Edit Products</h3>
                      </Link>
                    </div>
                  </div>
            </div>
        </div>

        { /* Total Users */ }
        <Link to={"/admin/allusers"}>
        <nav className="info-banners navbar bg-body-secondary container-fluid mt-4 pb-1">
            <div className="container">
                <h3>Total Users</h3>
              <form className="d-flex">
                <h3 style={{ fontSize: "x-large" }} className="mx-3"><strong className="text-primary">{totalusers}</strong></h3>
              </form>
            </div>
        </nav>
        </Link>
        <div className="container row mx-auto mt-4">
            <div className="col-12 col-md-4 my-2 my-md-0">
                <div className="card text-center">
                    <div className="card-body">
                      <h3 className="card-title">Total Amount Invested <br />Rs. <strong className="text-primary">{totalamount}</strong></h3>
                    </div>
                  </div>
            </div>
            <div className="col-12 col-md-4 my-2 my-md-0">
                <div className="infoCards text-bg-light card text-center">
                    <div className="card-body">
                      <h3 className="card-title">Recharge Requests <br /><strong className="text-primary">{rechargerequest}</strong></h3>
                    </div>
                  </div>
            </div>
            <div className="col-12 col-md-4 my-2 my-md-0">
                <div className="infoCards text-bg-light card text-center" >
                    <div className="card-body">
                      <Link to={"/admin/rechargerequest"}>
                      <h3 className="card-title">Recharge <br />History</h3>
                      </Link>
                    </div>
                  </div>
            </div>
            <div className="col-12 col-md-4 my-2 my-md-4">
                <Link to={"/admin/activeusers"}>
                <div className="infoCards text-bg-light card text-center">
                    <div className="card-body">
                      <h3 className="card-title">Active Users <br /><strong className="text-primary">{activeuser}</strong></h3>
                    </div>
                  </div>
                    </Link>
            </div>
            <div className="col-12 col-md-4 my-2 my-md-4">
                <div className="infoCards text-bg-light card text-center" >
                    <div className="card-body">
                      <h3 className="card-title">Withdraw Requests <br /><strong className="text-primary">{withdrawrequest}</strong></h3>
                    </div>
                  </div>
            </div>
            <div className="col-12 col-md-4 my-2 my-md-4">
                <div className="infoCards text-bg-light card text-center">
                    <div className="card-body">
                      <Link to={"/admin/withdrawrequest"}>
                      <h3 className="card-title">Withdraw <br />History</h3>
                      </Link>
                    </div>
                  </div>
            </div>
        </div>

  </>
  )
}

export default Adminpanel