import React from 'react'
import { Link } from 'react-router-dom'
// about us page
const Desktop14 = () => {
  return (
    <>
{ /* Navbar */ }
    { /* top */ }
    <div className="card mt-4 container footer ">
      <div className="card-body text-center">
        <blockquote className="blockquote mb-0" style={{ fontSize: "xx-large" }}>
          <p><strong>About Us</strong></p>
        </blockquote>
      </div>
    </div>

    { /* Main Image */ }
    <div className="container text-center">
        <Link to="/desktop2"><img src="images/logo.png" className="mainImage" alt="..." /></Link>
    </div>

    { /* middle */ }
    <div className="card mt-2 pt-4 pb-4 container footer">
      <div className="card-body coloumn">
        <h5>Digital Money is a company that provides network marketing, money investment, and money-making services. Network marketing, also known as multi-level marketing (MLM), is a business model where individuals can earn income by promoting and selling products or services to a network of customers. Money investment involves allocating funds with the expectation of generating profits or returns over time. Money-making refers to various methods or opportunities through which individuals can earn income. <br /><br />

            Digital Money offers these services to individuals who are interested in leveraging network marketing strategies to generate income, investing their money in different avenues to grow their wealth, or exploring opportunities to make money through various means. The company likely provides resources, training, and support to its members or clients to help them succeed in their endeavors. <br /><br />
            
            It's important to note that the specific details, offerings, and operations of Digital Money as a company are not mentioned in the provided information. Without additional information about the company, it is difficult to provide specific insights into their services, strategies, or success stories. If you have more specific questions or require further details about Digital Money, please provide additional context or information.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit odit ipsam optio rerum asperiores mollitia, dicta quos sunt dignissimos molestiae maiores rem. Esse unde deleniti at, cumque molestiae sed, explicabo veritatis omnis qui, quasi saepe repellat adipisci velit maxime ea incidunt aut rerum in mollitia est minus magnam deserunt reiciendis. Ut laboriosam corporis neque, quibusdam vel deleniti nemo dolor sapiente illo, ad saepe amet, iure similique voluptatibus voluptatem possimus repellendus eligendi molestias ratione! In dolor suscipit et a, eum incidunt, error expedita ipsa dignissimos maiores voluptas rerum ducimus magnam tempora corrupti rem assumenda placeat cum minus repudiandae enim vero! Doloribus qui debitis nam facilis est nemo et quas at sint quaerat? Ut delectus tenetur, numquam laborum nihil totam assumenda, cumque quo a sapiente magni illo neque ex deserunt vero quas, quam eos debitis vel voluptatem velit laboriosam? Nisi ullam labore dolorum placeat quam quia fuga. <br /><br /> Consequatur quisquam eveniet repellendus est expedita, perspiciatis fuga, et libero aperiam possimus accusantium sapiente quis aliquid magni, recusandae dignissimos cum saepe? Perspiciatis consequuntur qui quae harum eum voluptas repudiandae reiciendis animi molestiae quos recusandae, quas, laudantium ab odit libero, quasi et blanditiis. Ad doloremque maiores mollitia consectetur ipsum est adipisci praesentium ex vero? Perspiciatis, culpa.          </h5>
      </div>
    </div>

    <div className="container my-5 pt-4 text-center">
        <p className="mx-1 text-light">By proceeding, you agree to Digital Money<Link to="/desktop15" className="mx-1 text-info" style={{ textDecoration: "none" }}>Terms of Use</Link>&<Link to="/desktop15" className="mx-1 text-info" style={{ textDecoration: "none" }}>Privacy Policy</Link>.</p>
    </div>

  </>
  )
}

export default Desktop14