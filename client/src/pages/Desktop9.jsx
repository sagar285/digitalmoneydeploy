import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// live project
//

const Desktop9 = () => {
  const [disable, setdisable] = useState(false);
  const [projects, setporject] = useState([]);
  const liveprojects = async () => {
    const res = await axios.get(`/liveprojects`);
    setporject(res.data);
  };

  const addwalletamount = async (price, e) => {
    e.preventDefault();
    const res = await axios.put(`/addwallet/${price}`);
    console.log(res);
    setdisable(true);
  };

  useEffect(() => {
    liveprojects();
  }, []);

  return (
    <>
      {/* Navbar */}

      {/* top */}
      <div className="card mt-4 container footer bg-body-tertiary">
        <div className="card-body text-center">
          <blockquote
            className="blockquote mb-0"
            style={{ fontSize: "xx-large" }}
          >
            <p>
              <strong>Project Live</strong>
            </p>
          </blockquote>
        </div>
      </div>

      {projects.length > 0 ? (
        projects.map((p) => (
          <nav className="info-banners navbar bg-body-secondary container mt-5 pb-1">
            <div className="container-fluid">
              <img src={p.img.url} style={{ height: 70, width: 120 }} alt="" />
              <form className="d-flex" role="search">
                <h3 style={{ fontSize: "x-large" }} className="mx-3">
                  <span>{p.dailyincome}</span>₹
                </h3>
                <button
                  disabled={disable}
                  className="btn btn-outline-primary"
                  onClick={(e) => addwalletamount(p.dailyincome, e)}
                  type="submit"
                >
                  {disable ? "Received" : "Recieve"}
                </button>
              </form>
            </div>
          </nav>
        ))
      ) : (
        <h1>No projects available</h1>
      )}
    </>
  );
};

export default Desktop9;
