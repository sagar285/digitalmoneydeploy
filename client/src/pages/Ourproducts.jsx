
import "../styles/ourproducts.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from "react"

// products page
const Ourproducts = () => {
  const [project,setproject]=useState([]);

  const availableprojects =async()=>{
    const res =await axios.get(`/getproduct`);
   if(res){
    setproject(res.data);
   }
}

useEffect(()=>{
  availableprojects();
},[])


  return (
    <>
{ /* Navbar */ }


    { /* top */ }
    <div className="card mt-4 container footer">
      <div className="card-body text-center">
        <blockquote className="blockquote mb-0" style={{ fontSize: "xx-large" }}>
          <p><strong>Products</strong></p>
        </blockquote>
      </div>
    </div>

    { /* middle */ }
    <div className="card mt-4 pt-4 pb-4 container footer bg-transparent border-0">
      <div className="card-body text-center">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
            project.length>0 ? project.map((p)=>(
              <div className="col-sm-12 col-md-6 col-lg-4 col-12">
            <div className="products card border-5">
              <Link to=""><img src={p.img.url} style={{ height: 180 }} className="card-img-top" alt="..." /></Link>
              <div className="card-body">
                <h5 className="card-title"><Link className="nav-link" to="desktop-10-login.html">Price:{p.price}</Link></h5>
                <h5 className="card-title"><Link className="nav-link" to="desktop-10-login.html"> Name:{p.name}</Link></h5>
              </div>
            </div>
          </div>
            )):(
              <h1>No product available</h1>
            )
          }
        </div>
      </div>
    </div>

  </>
  )
}

export default Ourproducts