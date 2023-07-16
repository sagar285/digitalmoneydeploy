import React, { useEffect, useState } from 'react'
import { useAuth } from '../component/Usercontext'
import axios from 'axios';


const Adminprofile = () => {
  const [userauth,setuserauth]=useAuth();
  const [upi,setupi]=useState('');
  const [adminupiid,setadminupi]=useState('');
  const [img,setimg]=useState('');
  const [qrcode,setqrcode]=useState({});

  const getadminupi =async()=>{
    const res=await axios.get(`/getadminupi`);
    if(res.status===200){
      setadminupi(res.data);
    }
    else{
      alert(res.data.message);
    }
  }
  const getadminqrcode =async()=>{
    const res=await axios.get(`/getadminqrcode`);
    if(res.status===200){
      setqrcode(res.data)
    }
    else{
      alert(res.data.message);
    }
  }

  const adminupi=async()=>{
    const res= await axios.put(`/adminupi`,{upi});
    if(res.status===200){
      getadminupi();
      setupi('');
    }
    else{
      alert(res.data.message);
    }
  }


  const adminqrcode =async()=>{
    const res=await axios.put(`/adminqrcode`,{img});
    if(res.status==200){
      getadminqrcode();
    }
    else{
      alert(res.data.message);
    }
  }


  const handleimage =(e)=>{
    if(e.target.files[0]){
      const file =e.target.files[0];
      setfiletobase(file);
    }
    else{
      alert("pls choosesomething");
    }
  }
 
  const setfiletobase=(file)=>{
   const reader =new FileReader();
   reader.readAsDataURL(file);
   reader.onloadend=()=>{
     setimg(reader.result);
   }
   setimg("");
  }

  useEffect(()=>{
     getadminupi();
     getadminqrcode();
  },[])

  return (
    <>

    { /* top */ }
    <div className="card mt-0 container footer">
      <div className="card-body text-center">
        <blockquote className="blockquote mb-0" style={{ fontSize: "xx-large" }}>
          <p><strong>Admin Profile</strong></p>
        </blockquote>
      </div>
    </div>

    { /* middle */ }
    <div className="card mt-4 container footer">
      <div className="card-body text-center">
        <div className="row">

          <div className="col-12 col-lg-6">
            <div className="card text-bg-dark">
              <div className="card-body row">
                <h4 className="card-title">Name</h4>
                <h4 className="card-title text-info">{userauth?.user?.username}</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 mt-3 mt-lg-0">
            <div className="card text-bg-dark">
              <div className="card-body">
                <h4 className="card-title">Phone No.</h4>
                <h4 className="card-title text-info">{userauth?.user?.phone}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    { /* bottom */ }
    <div className="card mt-4 container footer">
      <div className="card-body text-center">
        <div className="row">

          <div className="col-12 col-lg-6 p-0">
            <div className="card text-bg-light border-0">
              <div className="card-body row mx-auto">
                <img className="mx-auto mb-1" src={qrcode && qrcode.url} alt="" style={{ height: 190, width: 240 }} />
                <h4 className="card-title mt-3">{adminupiid}</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 p-0">
            <div className="card text-bg-light border-0">
              <div className="card-body row mx-auto">
                <input type='text' value={upi} placeholder='enter upi id' onChange={(e)=>setupi(e.target.value)}/>
                 <button  className="btn btn-dark my-1" onClick={adminupi}>Edit UPI ID</button>
              </div>
              <div className="card-body row mx-auto">
              <input type='file'   onChange={handleimage} placeholder='enter upi id'/>
                 <button className="btn btn-dark my-1" onClick={adminqrcode}>Edit QR Code</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </>
  )
}

export default Adminprofile