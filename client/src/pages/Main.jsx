import { useEffect, useState } from "react"
import "../styles/main.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

// home page

const Main = () => {
  const [project,setproject]=useState([]);
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

    


  return (
    <>
    { /* Navbar */ }
   

    { /* main image */ }
    <div className="container text-center">
      <Link to="/"><img src="images/logo.png" className="mainImage mb-1" alt="..." /></Link>
    </div>

    { /* cards */ }
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
            <Link to="/desktop10" className="btn btn-primary">Buy It</Link>
          </div>
        </div>
      </div>
        )):(
          <h1>no products found</h1>
        )
      }
    </div>
    { /* footer */ }
    <div className="card mt-2 container footer">
      <div className="card-body text-center">
        <blockquote className="blockquote mb-0">
          <p>
            <strong>Register And Login To Purchase Plans And Earn Money From
              Today</strong>
          </p>
        </blockquote>
      </div>
    </div>
  </>
  )
}

export default Main