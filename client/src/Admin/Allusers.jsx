import axios from 'axios';
import React,{useState,useEffect} from 'react'

const Allusers = () => {
     const [alluser,setalluser]=useState([]);
    const getallusers=async()=>{
        const {data}=await axios.get(`/alluser`);
        setalluser(data);
      }
    
       useEffect(()=>{
            getallusers();
       },[]);


  return (
    <>
    { /* top */ }
    <div className="card mt-0 container footer ">
      <div className="card-body text-center mx-auto">
        <blockquote className="blockquote mb-0" style={{ fontSize: "xx-large" }}>
          <p><strong>ALL Users</strong></p>
        </blockquote>
        <form className="d-flex mt-4" role="search">
            <input className="form-control me-2 border-3" type="search" placeholder="Search User" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>

    <div>

      {
        alluser && alluser.map((user)=>(
          <div key={user._id} className="navbar btn text-bg-light card mt-5 py-1 container info-banners">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <h4>{user.username}</h4>
              </li>
          </ul></div>
      </div>
        ))
      }

      {/* <div className="navbar btn text-bg-light card mt-2 py-1 container info-banners" onClick={event => { window.location.href = 'user.html'; }}>
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <h4>Ratan Tata</h4>
              </li>
          </ul></div>
      </div>

      <div className="navbar btn text-bg-light card mt-2 py-1 container info-banners" onClick={event => { window.location.href = 'user.html'; }}>
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <h4>Ratan Tata</h4>
              </li>
          </ul></div>
      </div>

      <div className="navbar btn text-bg-light card mt-2 py-1 container info-banners" onClick={event => { window.location.href = 'user.html'; }}>
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <h4>Ratan Tata</h4>
              </li>
          </ul></div>
      </div>

      <div className="navbar btn text-bg-light card mt-2 py-1 container info-banners" onClick={event => { window.location.href = 'user.html'; }}>
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <h4>Ratan Tata</h4>
              </li>
          </ul></div>
      </div>

      <div className="navbar btn text-bg-light card mt-2 py-1 container info-banners" onClick={event => { window.location.href = 'user.html'; }}>
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <h4>Ratan Tata</h4>
              </li>
          </ul></div>
      </div> */}

    </div>
  </>
  )
}

export default Allusers