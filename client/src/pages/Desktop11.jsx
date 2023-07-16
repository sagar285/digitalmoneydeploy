import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../component/Usercontext";
import axios from "axios";


// user profile page
// show profile detail as well as account detail


const Desktop11 = () => {
  const [userauth,setuserauth]=useAuth();
  const [name,setname]=useState('')
  const [AccountNumber,setAccountNumber]=useState('')
  const [IfscCode,setIfscCode]=useState('')

  const bankdetail =async()=>{
       const res= await axios.get(`/getpayment`)
       if(res.data){
        setname(res.data.Name);
        setAccountNumber(res.data.AccountNumber);
        setIfscCode(res.data.IfscCode);
       }       
  }

  useEffect(() => {
    bankdetail();
  }, [])
  





  return (
    <>
      {/* Navbar */}


      {/* main image */}
      <div className="container text-center">
        <img
          src="/images/img_569204.png"
          className="img-thumbnail mainImage mb-1 "
          alt="..."
        />
        <h3 className="text-light">{userauth?.user?.username}</h3>
        <h5 className="text-light">
          <strong>Referral ID :{userauth?.user?.referalid} </strong> 
        </h5>
      </div>

      <div
        className="mt-4 py-2 footer"
        style={{ backgroundColor: "rgb(248, 161, 48)" }}
      >
        <div className="card-body text-center ">
          <blockquote className="blockquote mb-0">
            <p>
              <strong>Purchase Plans And Earn Money From Today</strong>
            </p>
          </blockquote>
        </div>
      </div>

      {/* footer */}
      <div className="card mt-4 container footer">
        <div className="card-body ">
          <blockquote className="blockquote mb-0">
            <h4 className="mb-3">
              <strong>Personal Information</strong>
            </h4>
            <div>
              <h6>
                <strong>Name :</strong> {userauth?.user?.username}
              </h6>
          
              <h6>
                <strong>Mobile Number :</strong> {userauth?.user?.phone}
              </h6>
              {/* <Link to="" className="btn btn-primary mt-3">
                Edit info.
              </Link> */}
            </div>
          </blockquote>
        </div>
      </div>

      <div className="card mt-4 container footer">
        <div className="card-body ">
          <blockquote className="blockquote mb-0">
            <h4 className="mb-3">
              <strong>Bank Details</strong>
            </h4>
            <div>
            <h6>
                <strong>Account Holder :</strong> {name}
              </h6>
              <h6>
                <strong>Account Number :</strong> {AccountNumber}
              </h6>
              <h6>
                <strong>IFSC Code :</strong> {IfscCode}
              </h6>
              <Link to="/auth/bankdetail" className="btn btn-primary mt-3">
                Edit info.
              </Link>
            </div>
          </blockquote>
        </div>
      </div>

      <div className="d-grid gap-2 container">
        <Link
          to="/auth/pay"
          className="btn mt-5 py-3"
          style={{ backgroundColor: "rgb(248, 161, 48)", fontSize: "larger" }}
          type="button"
        >
          <strong>Recharge Now to Buy Products</strong>
        </Link>
        <Link
          to="/auth/liveprojects"
          className="btn mt-3 py-3"
          style={{ backgroundColor: "rgb(248, 161, 48)", fontSize: "larger" }}
          type="button"
        >
          <strong>Veiw Active Products</strong>
        </Link>
      </div>

      <div className="container my-5 pt-4 text-center">
        <p className="mx-1 text-light">
          By proceeding, you agree to Digital Money
          <Link
            to="desktop-15-t&c.html"
            className="mx-1 text-info"
            style={{ textDecoration: "none" }}
          >
            Terms of Use
          </Link>
          &
          <Link
            to="desktop-15-t&c.html"
            className="mx-1 text-info"
            style={{ textDecoration: "none" }}
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default Desktop11;
