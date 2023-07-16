import React, { useState } from "react";
import OtpInput from "otp-input-react";
import { Link,useNavigate } from "react-router-dom";
import { auth } from "./firebase.config";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast, { Toaster } from "react-hot-toast";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import axios from "axios";
// user registration page
const Desktop16 = () => {
  const [otp, setotp] = useState("");
  const [showotp, setshowotp] = useState(false);
  const [phone, setPhone] = useState("");
  const [user, setuser] = useState(null);
  const [username,setusername] =useState('')
  const [password,setpassword] =useState('')
  const [confirmpassword,setconfirmpassword] =useState('')
  const [sponsorid,setsponsorid] =useState('')
  const navigate =useNavigate();

  const userregister =async()=>{
       if(username==='' || sponsorid===''|| password===''||confirmpassword===''||phone===''){
        return toast.error("pls filled all field");
       }
       else if(password!==confirmpassword){
        return toast.error('password and confirm passwod must be same');
       }
       else{
        const res= await axios.post(`/register`,{
          username,password,confirmpassword,phone,sponsorid
         })
         if(res.status===200){
          navigate("/desktop10");
         }
         else{
          toast.error("pls filled correct details");
         }
       }
  }


  function onCaptchaverify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    onCaptchaverify();
    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + phone;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationresult) => {
        window.confirmationresult = confirmationresult;
        setshowotp(true);
        alert("otp send succesfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function onOTPVerify() {
    window.confirmationresult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setuser(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
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
              <strong>Register</strong>
            </p>
          </blockquote>
        </div>
      </div>

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
                          <strong>Register in Digital Money</strong>
                        </h3>
                        <p className="card-title text-light mb-3">
                          Let's start earning from today
                        </p>
                        <div>
                          <div id="recaptcha-container"></div>
                          {user ? (
                            <h2 className="bg-light">👍otp Success</h2>
                          ) : (
                            <div>
                              {showotp ? (
                                <>
                                  <label>Enter otp</label>
                                  <OtpInput
                                    //   className="mt-3 text-light px-2"
                                    //   style={{
                                    //    height: 40,
                                    //    width: "58%",
                                    //    fontSize: "large",
                                    //    backgroundColor: "transparent",
                                    //    border: "1px solid white",
                                    //    borderRadius: 5,
                                    //  }}
                                    OTPLength={6}
                                    otpType="number"
                                    value={otp}
                                    onChange={setotp}
                                  ></OtpInput>
                                  <button onClick={onOTPVerify}>
                                    otp verify
                                  </button>
                                </>
                              ) : (
                                <>
                                  <label>verify your number</label>
                                  <PhoneInput
                                    //   className="mt-3 text-light px-2"
                                    //   style={{
                                    //    height: 40,
                                    //    width: "58%",
                                    //    fontSize: "large",
                                    //    backgroundColor: "transparent",
                                    //    border: "1px solid white",
                                    //    borderRadius: 5,
                                    //  }}
                                    country={"in"}
                                    value={phone}
                                    onChange={setPhone}
                                  />
                                  <button onClick={onSignup}>
                                    Send code via sms
                                  </button>
                                </>
                              )}
                            </div>
                          )}
                          {/* <input
                             className="mt-3 text-light px-2"
                             style={{
                              height: 40,
                              width: "58%",
                              fontSize: "large",
                              backgroundColor: "transparent",
                              border: "1px solid white",
                              borderRadius: 5,
                            }}
                            type="number"
                            placeholder="Phone number" 
                          /> */}
                          {/* <button type="button" className="btn bg-light mb-1">
                            Request OTP
                          </button> */}
                          <input
                            className="mt-2 text-light px-2 mb-1"
                            type="number"
                            placeholder="sponsorid"
                            onChange={(e)=>setsponsorid(e.target.value)}
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
                          <input
                            className="mt-2 text-light px-2 mb-1"
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
                          <br />
                          <input
                            className="mt-2 text-light px-2 mb-1"
                            type="password"
                            placeholder="Create Password"
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
                          <input
                            className="mt-2 text-light px-2 mb-1"
                            type="password"
                            placeholder="Re-Enter Password"
                            onChange={(e)=>setconfirmpassword(e.target.value)}
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
                        </div>
                      </div>
                      <div className="container mt-3"></div>
                      <button
                      onClick={userregister}
                        className=" btn my-2 text-bg-light py-1 px-3"
                        style={{ width: "80%" }}
                      >
                        Register
                      </button>
                      <p className="mx-1 text-light">
                        Already have an account?
                        <Link
                          to="/desktop10"
                          className="mx-1 text-info"
                          style={{ textDecoration: "none" }}
                        >
                          sign in
                        </Link>
                      </p>
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
      {/* bottom */}
      <div className="container pt-3 text-center">
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

export default Desktop16;
