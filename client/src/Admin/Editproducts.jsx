import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Editproducts = () => {
  const [products,setproducts]=useState([])

  const getproducts =async()=>{
    const {data} =await axios.get(`/getproduct`);
    setproducts(data);
  }

  const deleteproduct =async(id)=>{
    const result =await axios.delete(`/deleteproduct/${id}`)
    console.log(result);
    getproducts();
  }


  useEffect(()=>{
     getproducts();
  },[])





  return (
    <>
    { /* top */ }
    <div className="card mt-0 container footer">
      <div className="card-body text-center">
        <blockquote className="blockquote mb-0" style={{ fontSize: "xx-large" }}>
          <p><strong>Edit Products</strong></p>
        </blockquote>
      </div>
    </div>

    { /* middle */ }
    <div className="container row mx-auto mt-5">
        <div className="col-12">
            <div className="btn infoCards text-bg-light card text-center">
                <div className="card-body">
                 <Link to={"/admin/addproduct"}><h3 className="card-title"><strong className="text-primary">ADD </strong>➕</h3></Link> 
                </div>
              </div>
        </div>
    </div>

    { /* Products */ }
    <div className="card mt-4 pt-3 pb-4 container footer bg-transparent border-0">
      <div className="card-body text-center">

        { /* product 1 */ }
        <div className="row row-cols-1 row-cols-md-3 g-4">
         {
          products.length>0 ? products.map((product)=>(
            <div key={product._id} className="col-sm-12 col-md-6 col-lg-4 col-12">
            <div className="products card border-5">
              <a href=""><img src={product.img.url} style={{ height: 180 }} className="card-img-top" alt="..." /></a>
              <div className="card-body">
                <h5 className="card-title"><a className="nav-link" href="">{product.name}</a></h5>

                { /* ------------- */ }
                <section className="navbar">
                  <div className="col-12 col-sm-6">
                    <div className="btn-sm mx-1 cardBtn text-bg-light border-2 card text-center">
                        <div className="card-body">
                         <Link  to={"/admin/updateproducts/"+product._id}> <h5 className="card-title"><strong className="text-primary">Update </strong></h5></Link>
                        </div>
                      </div>
                  </div>
  
                  <div className="col-12 col-sm-6">
                    <div className="btn-sm mx-1 cardBtn text-bg-light border-2 card text-center">
                        <div className="card-body">
                          <button onClick={()=>{deleteproduct(product._id)}} className="card-title"><strong className="text-primary">Delete </strong></button>
                        </div>
                      </div>
                  </div>
                </section>
                { /* ------------- */ }

              </div>
            </div>
          </div>
          )):(
            <h1 style={{color:"white",textAlign:"center",margin:"20px"}}>No Products Found,pls add any project</h1>
          )
         }
        </div>
      </div>
    </div>

  </>
  )
}

export default Editproducts