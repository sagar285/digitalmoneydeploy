import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// user see their network on basis of referal id
// other users of app but thier coupon code must belon to this user

const Desktop8 = () => {
const [levelone,setlevelone]=useState([])
const [leveltwo,setleveltwo]=useState([])
const [levelthree,setlevelthree]=useState([])
  
  const getlevelone = async()=>{
    const {data}=await axios.get(`/getlevelone`)
    console.log(data);
    setlevelone(data.user1arrya)
  }
  const getleveltwo = async()=>{
    const {data}=await axios.get(`/getleveltwo`)
   
    setleveltwo(data.level2user)
  }
  const getlevelthree = async()=>{
    const {data}=await axios.get(`/getlevelthree`)
    setlevelthree(data.level3user);

  }

  useEffect(()=>{
     getlevelone();
     getleveltwo();
     getlevelthree();
  },[])





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
              <strong>My Network</strong>
            </p>
          </blockquote>
        </div>
      </div>

      {/* middle */}
      <div className="card mt-1 pt-4 pb-4 container-fluid footer bg-transparent border-0">
        <div className="card-body text-center">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="card border-5 mb-4">
                <div className="card-body">
                  <h4>Level-1</h4>

                  <div className="navbar card mt-1 py-0 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>
                            <strong>Name</strong>
                          </h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>
                            <strong>Percentage</strong>
                          </h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>
                            <strong>
                              Refers
                              <br />
                              Amount
                            </strong>
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {
                     
                      levelone && levelone.map((user)=>(
                        <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>{user.username}</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                      ))     
                  }

                 

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="card border-5 mb-4">
                <div className="card-body">
                  <h4>Level-2</h4>

                  <div className="navbar card mt-1 py-0 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>
                            <strong>Name</strong>
                          </h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>
                            <strong>Percentage</strong>
                          </h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>
                            <strong>
                              Refers
                              <br />
                              Amount
                            </strong>
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {
                    leveltwo && leveltwo.map((user)=>(
                      <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>{user.username}</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                    ))
                  }

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="card border-5 mb-4">
                <div className="card-body">
                  <h4>Level-3</h4>
                  

                  <div className="navbar card mt-1 py-0 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>
                            <strong>Name</strong>
                          </h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>
                            <strong>Percentage</strong>
                          </h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>
                            <strong>
                              Refers
                              <br />
                              Amount
                            </strong>
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {
                    levelthree && levelthree.map((user)=>(
                      <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>{user.username}</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                    ))
                  }

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                 

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* <div className="navbar card mt-2 py-0 px-1 container footer">
                    <div className="container-fluid">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>XYZ1</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>10%</h6>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <h6>Rs.6,254</h6>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop8;
