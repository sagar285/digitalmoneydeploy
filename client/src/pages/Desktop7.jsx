import React from 'react'
import { Link } from 'react-router-dom'

// again contact page
const Desktop7 = () => {
  return (
    <>
{ /* Navbar */ }



    { /* top */ }
    <div className="card mt-4 container footer ">
      <div className="card-body text-center">
        <blockquote className="blockquote mb-0" style={{ fontSize: "xx-large" }}>
          <p><strong>Contact Us</strong></p>
        </blockquote>
      </div>
    </div>

    { /* main image */ }
    <div className="container text-center mt-3">
      <img src="images/contact.png" className="img-thumbnail mainImage mb-1" style={{ height: 220 }} alt="..." />
    </div>

    { /* middle */ }
    <div className="card mt-3 pt-2 pb-2 container footer">
      <div className="card-body text-center coloumn">
        <div className="my-2">
            <img src="images/email.png" alt="" style={{ height: 30 }} />
            <h3>Xyz@gmail.com</h3>
        </div>
        <div>
            <img src="images/phone-call.png" alt="" style={{ height: 30 }} />
            <h3>+91 9955XXXX55</h3>
        </div>
      </div>
    </div>

  </>
  )
}

export default Desktop7