import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import "../styles/desktop2.css"


// this page comes after just login

const Desktop2 = () => {
  const [myearning,setmyearning]=useState(0);
  const [teamearning,setteamearning]=useState(0);
  const [amount,setwalletamount]=useState(0);
  const [project,setproject]=useState([]);


  // const walletamountvalue =async()=>{
  //   const {data}=await axios.get(`${baseurl}/walletamount`);
  //   setwalletamount(data.walletamountvalue);
  // }
  // const userearning =async()=>{
  //   const res=await axios.get(`${baseurl}/userincome`);
  //   console.log(res.data);
  //   if(res.status===200){
  //      setmyearning(res.data.myearning);
  //      const team = res.data.levelonearning+res.data.leveltwoearning+res.data.levelthreeearning
  //      setteamearning(team);
  //   }
  // }

  const availableprojects =async()=>{
    const res =await axios.get(`/getproduct`);
    let a=[];
   if(res){
      if(res.data.length<=3){
        setproject(res.data);
      }else{
        for( let i=0;i<=res.data.length;i++){
          if(i===0 || i===1 || i===2){
            a[i]=res.data[i];
          }
        }
        setproject(a);
      }
   }
}

useEffect(()=>{
  availableprojects();
},[])




  // useEffect(()=>{
  //  userearning()
  //  walletamountvalue();
  // },[])
  return (
    <>
      {/* Navbar */}
      

      {/* Main Image */}
      <div className="container text-center">
        <Link to="/desktop2">
          <img src="/images/logo.png" className="mainImage" alt="..." />
        </Link>
      </div>

      {/* info. cards */}
      <div className="container-fluid row mx-auto mt-3">
        <div className="col-sm-12 col-md-6 col-lg-3 col-12">
          <div
            className="btn card text-bg-light mb-3 mx-auto p-0"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title text-center">
                <strong>
                 {myearning}
                  <br />
                  my earning
                </strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 col-12">
          <div
            className="infoCards btn card text-bg-light mb-3 mx-auto  p-0"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title text-center">
                <strong>
               {myearning +teamearning}
                  <br />
                  Today Earning
                </strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 col-12">
          <div
            className="infoCards btn card text-bg-light mb-3 mx-auto p-0"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title text-center">
                <strong>
                {teamearning}
                  <br />
                  Team Earning
                </strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 col-12">
          <div
            className="btn card text-bg-light mb-3 mx-auto p-0"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title text-center">
                <strong>
                  {amount} Rs
                  <br />
                  Wallet
                </strong>
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* Product /images */}
      <div className="container-fluid row products text-center mt-4">
      <div className="container cards row mx-auto mt-2">
      {
        project.length>0 ? project.map((p)=>(
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-12">
        <div className="card mx-auto mb-3" style={{ width: "18rem" }}>
          <img src={p.img.url} style={{ height: 150 }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{p.name}</h5>
            <p className="card-text"> Price: {p.price}</p>
            <p className="card-text"> Dailyincome: {p.dailyincome}</p>
            <p className="card-text"> ValidUpto: {p.noOfDays} Days</p>
            <Link to="/auth/availableprojects" className="btn btn-primary">Buy It</Link>
          </div>
        </div>
      </div>
        )):(
          <h1>no products found</h1>
        )
      }
    </div>
        {/* <div className="col-sm-12 col-md-12 col-lg-4 col-12">
          <Link to="/desktop5">
            <img
              style={{ height: 150, width: 300 }}
              src="/images/plan1.jpg"
              className="img-thumbnail mt-4"
              alt="..."
            />
          </Link>
        </div> */}
        {/* <div className="col-sm-12 col-md-12 col-lg-4 col-12">
          <Link to="/desktop5">
            <img
              style={{ width: 350 }}
              src="/images/plan2.avif"
              className="img-thumbnail mx-2 mt-4 mt-lg-0"
              alt="..."
            />
          </Link>
        </div> */}
        {/* <div className="col-sm-12 col-md-12 col-lg-4 col-12">
          <Link to="/desktop5">
            <img
              style={{ height: 150, width: 300 }}
              src="/images/plan3.webp"
              className="img-thumbnail mt-4"
              alt="..."
            />
          </Link>
        </div> */}
      </div>

      {/* footer */}
      <div className="navbar card mt-4 container footer">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="link" to="/auth/pay">
                <strong>Recharge</strong>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="link" to="/auth/withdrawrequest">
                <strong>Withdraw</strong>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="link" to="/auth/availableprojects">
                <strong>Projects</strong>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="link" to="/auth/userprofile">
                <strong>Account</strong>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="link " to="/contact">
                <strong>Contact Us</strong>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Desktop2;
