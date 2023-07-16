import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [name, setname] = useState("");
  const [uniqueid, setuniqueid] = useState("");
  const [team, setteam] = useState(0);
  const [wallet, setwallet] = useState(0);
  const [availablereacharge, setavailablerecharge] = useState(0);
  const [accountdetail, setaccountdetail] = useState({});
  const { id } = useParams();
  console.log(id);

  const getuser = async () => {
    const { data } = await axios.get(`/user/${id}`);
    setname(data.user);
    setuniqueid(data.refralid);
    setteam(data.usertem);
    setwallet(data.userwallet);
    setavailablerecharge(data.availablerecharge);
    setaccountdetail(data.info);
    console.log(data.info);
  };

  useEffect(() => {
    getuser();
  }, []);

  return (
    <>
      {/* top */}
      <div className="card mt-0 container footer ">
        <div className="card-body text-center">
          <blockquote
            className="blockquote mb-0"
            style={{ fontSize: "xx-large" }}
          >
            <p>
              <strong>{name}</strong>
            </p>
          </blockquote>
          <h5>
            (Uni ID : <span className="text-primary">{uniqueid}</span>)
          </h5>
        </div>
      </div>

      {/* middle 1 */}

      <div className="container row mx-auto mt-4">
        <div className="col-12 col-md-6 my-2 my-md-0">
          <div className="infoCards text-bg-light btn card text-center">
            <div className="card-body">
              <h3 className="card-title">
                Team - <span className="text-primary">{team}</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 my-2 my-md-0">
          <div
            className="infoCards text-bg-light btn card text-center"
            onClick={(event) => {
              window.location.href = "editProducts.html";
            }}
          >
            <div className="card-body">
              <h3 className="card-title">
                Wallet - Rs. <span className="text-primary">{wallet}</span>
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* middle 2 */}

      <div className="card mt-4 container footer ">
        <div className="card-body text-center">
          <h3>
            Recharge Available : Rs.{" "}
            <span className="text-primary">{availablereacharge}</span>
          </h3>
        </div>
      </div>

      {/* middle 3 */}

      <div className="card mt-4 py-2 container footer">
        <div className="container-fluid">
          <h4>
            <strong>Account Details :-</strong>
          </h4>
          <h5>
            Account Number :{" "}
            <span className="text-primary">{accountdetail.AccountNumber}</span>
          </h5>
          <h5>
            IFSC Code :{" "}
            <span className="text-primary">{accountdetail.IfscCode}</span>
          </h5>
        </div>
      </div>

      {/* bottom */}

      <div className="container row mx-auto mt-4">
        <div className="col-12 col-md-6 my-2 my-md-0">
          <div
            className="infoCards text-bg-light btn card text-center"
            onClick={(event) => {
              window.location.href = " ";
            }}
          >
            <div className="card-body">
              <h4 className="card-title">Withdraw Request</h4>

              <div
                className="navbar btn text-bg-light card mt-2 py-1 container info-banners"
                onClick={(event) => {
                  window.location.href = "usersRechargeHistory.html";
                }}
              >
                <div className="container-fluid">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <h4>
                        Rs. <span className="text-primary">500</span>
                      </h4>
                    </li>
                  </ul>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <h4>03/07/23</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 my-2 my-md-0">
          <div
            className="infoCards text-bg-light btn card text-center"
            onClick={(event) => {
              window.location.href = "editProducts.html";
            }}
          >
            <div className="card-body">
              <h4 className="card-title">Recharge Request</h4>

              <div
                className="navbar btn text-bg-light card mt-2 py-1 container info-banners"
                onClick={(event) => {
                  window.location.href = "usersRechargeHistory.html";
                }}
              >
                <div className="container-fluid">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <h4>
                        Rs. <span className="text-primary">500</span>
                      </h4>
                    </li>
                  </ul>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <h4>03/07/23</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
