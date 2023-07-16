import axios from 'axios'
import React ,{useEffect, useState}from 'react'
import { Link } from 'react-router-dom';

const ActiveUsers = () => {
  const [activeuser,setactiveusers]=useState([]);
  const activeusers=async()=>{
    const {data}=await axios.get(`/activeuser`)
    setactiveusers(data);
  }

  useEffect(() => {
    activeusers();
  }, [])
  
  



  return (
    <>
    { /* top */ }
    <div className="card mt-0 container footer ">
      <div className="card-body text-center mx-auto">
        <blockquote className="blockquote mb-0" style={{ fontSize: "xx-large" }}>
          <p><strong>Active Users</strong></p>
        </blockquote>
        <form className="d-flex mt-4" role="search">
            <input className="form-control me-2 border-3" type="search" placeholder="Search User" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>

    <div>

      {
        activeuser.length>0 ? activeuser.map((user)=>(
          <div key={user._id} className="navbar btn text-bg-light card mt-5 py-1 container info-banners">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/admin/userdetail/"+user._id}><h4>{user.username}</h4></Link>
              </li>
          </ul></div>
      </div>
        )):(
          <h1 style={{color:"white",textAlign:"center",margin:"20px"}}>No Active User Found</h1>
        )
      }
    </div>
  </>
  )
}

export default ActiveUsers