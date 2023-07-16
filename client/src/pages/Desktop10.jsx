import React,{useState} from "react";
import "../styles/desktop10.css";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../component/Usercontext";


// login page
const Desktop10 = () => {
  const [username,setusername] =useState('')
  const [password,setpassword] =useState('')
   const [userauth,setuserauth] =useAuth();  
   const navigate=useNavigate();
   const userlogin =async(e)=>{
    e.preventDefault();
    if(username=="" || password==""){
      return toast.error("please filled all field");
    }
     const res =await axios.post(`/login`,{username,password});
     if(res.status===200){
      setuserauth({...userauth,user:res.data.usercheck,token:res.data.token});
      localStorage.setItem("auth",JSON.stringify(res.data));
      if(res.data.usercheck.role==1){
        navigate("/admin/adminpanel");
      }
      else{
        navigate("/auth/userprofile");
      }
     }
   }

  return (
    <>
      {/* top */}
      <div className="card mt-4 container footer">
        <div className="card-body text-center">
          <blockquote
            className="blockquote mb-0"
            style={{ fontSize: "xx-large" }}
          >
            <p>
              <strong>Login</strong>
            </p>
          </blockquote>
        </div>
      </div>

      {/* bottom */}
      <div className="mt-4 container footer">
        <div className="card-body text-center">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col-sm-12 col-md-12 col-lg-6 col-12">
              <div className="card-body">
                <div className="row-cols-md-1 g-4">
                  <div className="col">
                    <div
                      className="mt-4 ms-auto"
                      style={{ borderRight: "2px solid white" }}
                    >
                      <div className="card-body">
                        <h3 className="card-title text-light">
                          <strong>Login to your Account</strong>
                        </h3>
                        <p className="card-title text-light mb-3">
                          See what is going on with your business
                        </p>
                      
                        <h6 className="text-light">
                          ------- signin with username -------
                        </h6>

                        <form>
                            <input
                              className="mt-3 text-light px-2"
                              type="text"
                              placeholder="Username"
                              onChange={(e)=>setusername(e.target.value)}
                              style={{
                                height: 40,
                                width: "80%",
                                fontSize: "large",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: 5,
                              }}
                            />
                            <input
                              className="mt-2 text-light px-2"
                              type="password"
                              placeholder="Password"
                              onChange={(e)=>setpassword(e.target.value)}
                              style={{
                                height: 40,
                                width: "80%",
                                fontSize: "large",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: 5,
                              }}
                            />
                            <br />
                          
                            {/* <div className="container mt-3">
                              <p>
                                <Link
                                  to=""
                                  className="text-info"
                                  style={{ textDecoration: "none" }}
                                >
                                  Forgot Password?
                                </Link>
                              </p>
                            </div> */}
                            <button
                             onClick={userlogin}
                              className=" btn my-2 text-bg-light py-1 px-3"
                              style={{ width: "80%" }}
                            >
                              Login
                            </button>
                            <p className="mx-1 text-light">
                              Registered yet?
                              <Link
                                to="/desktop16"
                                className="mx-1 text-info"
                                style={{ textDecoration: "none" }}
                              >
                                Create an account
                              </Link>
                            </p>
                          </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 col-12 p-0">
              <div className="">
                <div className="card-body row mx-auto">
                  <img
                    className="mx-auto"
                    src="images/logo.png"
                    alt=""
                    style={{ height: 190, width: 240 }}
                  />
                  <h5 className="card-title text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    consequuntur alias obcaecati magnam iste magni quam omnis
                    temporibus iure incidunt doloremque optio illum provident,
                    voluptatem unde officiis voluptas porro fuga! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Debitis maiores
                    quidem dolor, harum fugit hic illo explicabo. Modi, facilis
                    consequuntur?{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4 pt-3 text-center">
        <p className="mx-1 text-light">
          By proceeding, you agree to Digital Money
          <Link
            to="/desktop15"
            className="mx-1 text-info"
            style={{ textDecoration: "none" }}
          >
            Terms of Use
          </Link>
          &
          <Link
            to="/desktop15"
            className="mx-1 text-info"
            style={{ textDecoration: "none" }}
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
      <Toaster />
    </>
  );
};

export default Desktop10;
