import React from 'react'
import { Link } from 'react-router-dom'


// daily earning

const Desktop13 = () => {

 



  return (
    <>

    <ul className="navbar-nav">
      <li className="back nav-item m-2">
        <Link to="/desktop2"><img style={{ height: 50, filter: "invert(100%)", width: "fit-content" }} src="/images/back.png" alt="" /></Link>
      </li>
    </ul>

    { /* top */ }
    <div className="card container footer ">
      <div className="card-body text-center">
        <blockquote className="blockquote mb-0" style={{ fontSize: "xx-large" }}>
          <p><strong>Today's Earning</strong></p>
        </blockquote>
      </div>
    </div>

    { /* middle */ }
    <div className="card mt-5 pt-4 pb-0 container footer">
      <div className="card-body text-center coloumn">
        <h2><strong>My Earning : </strong>100 Rs.</h2>
        <h2><strong>Team Earning : </strong>47 Rs.</h2>
        <h2><strong>Total Earning : </strong>53 Rs.</h2>
        <br />
     </div>
    </div>

  </>
  )
}

export default Desktop13