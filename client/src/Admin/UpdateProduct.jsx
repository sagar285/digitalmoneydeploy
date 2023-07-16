import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [dailyincome, setdailyincome] = useState("");
  const [noOfDays, setnoOfDays] = useState(0);
  const [referalBonus, setreferalBonus] = useState(0);
  const [reward, setreward] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  const singleproduct = async () => {
    const { data } = await axios.get(`/singleproduct/${id}`);
    setname(data.name);
    setprice(data.price);
    setdailyincome(data.dailyincome);
    setnoOfDays(data.noOfDays);
    setreferalBonus(data.referalBonus);
    setreward(data.reward);
  };

  const updateproductdetail=async(e)=>{
    e.preventDefault();
    const res= await axios.put(`/updateproduct/${id}`,{name,price,dailyincome,noOfDays,referalBonus,reward});
    if(res.status===200){
      navigate("/admin/editproducts")
    }
  }

  

  useEffect(() => {
    singleproduct();
  },[]);

  return (
    <>

      {/* top */}
      <div className="card mt-0 container footer">
        <div className="card-body text-center">
          <blockquote
            className="blockquote mb-0"
            style={{ fontSize: "xx-large" }}
          >
            <p>
              <strong>Update Product</strong>
            </p>
          </blockquote>
        </div>
      </div>

      {/* middle */}
      <form>
        <div className="card mt-4 pt-4 pb-0 container footer">
          <div className="card-body text-center coloumn">
            <input
              className="mt-3"
              type="text"
               onChange={(e)=>setname(e.target.value)}
              value={name}
              placeholder="Enter Product Name"
              style={{ height: 40, width: "60%", fontSize: "large" }}
            />
            <br />
            <input
              id="price"
              className="mt-3"
              type="number"
              onChange={(e)=>setprice(e.target.value)}
              value={price}
              placeholder="Enter Price"
              style={{ height: 40, width: "60%", fontSize: "large" }}
            />
            <br />
            <input
              id="dailyIncome"
              className="mt-3"
              type="number"
              onChange={(e)=>setdailyincome(e.target.value)}
              value={dailyincome}
              placeholder="Enter Daily Income"
              style={{ height: 40, width: "60%", fontSize: "large" }}
            />
            <br />
            <input
              id="noOfDays"
              className="mt-3"
              type="number"
              onChange={(e)=>setnoOfDays(e.target.value)}
              value={noOfDays}
              placeholder="Enter No. of Days"
              style={{ height: 40, width: "60%", fontSize: "large" }}
            />
            <br />
            <input
              id="referalBonus"
              className="mt-3"
              type="text"
              onChange={(e)=>setreferalBonus(e.target.value)}
              value={referalBonus}
              placeholder="Enter Referal Bonus"
              style={{ height: 40, width: "60%", fontSize: "large" }}
            />
            <br />
            <input
              id="reward"
              className="mt-3"
              type="text"
              onChange={(e)=>setreward(e.target.value)}
              value={reward}
              placeholder="Enter Reward"
              style={{ height: 40, width: "60%", fontSize: "large" }}
            />
            <br />
            <Link
              className="btn btn-dark my-3 me-2 text-bg-dark py-2 px-5"
              to="/"
            >
              CANCEL
            </Link>
            <button
              className="btn btn-dark my-3 ms-2 text-bg-dark py-2 px-5"
              onClick={updateproductdetail}
            >
              UPDATE
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateProduct;
