import React from "react";


const Footer = () => {

  function handleEmail(e){
    e.preventDefault()
    alert("submited")
  }

  return (
    <>
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <div className="footer-raise" >
          <h3>Majoring</h3>
          <p>
          Majoring is a software company that specializes in creating custom software solutions for businesses. In addition, we offer internship opportunities to bridge the gap between theoretical and practical learning through project-base
          d experience.  </p>
          </div>
        </div>

       

        <div className="footer-column">

         <div className="footer-raise" >
         <h4>Contact Us</h4>
          <p>
            Rd Number 6, Nagarjuna Colony, Balaji Colony Phase 1,<br />
            Hastinapuram, Hyderabad,<br />
            Telangana 500070<br />
            <strong>Phone:</strong>7330637595 / 70360 23591<br />
            <strong>Email:</strong> majoring.learning@gmail.com<br />
          </p>
         </div>

          
        </div>

        <div className="footer-column">
          <div className="footer-raise">
          <h4>Subscription</h4>
          <p>For updates from Majoring, drop your email below:</p>
          <form>
            <input type="email" name="email" placeholder="Enter your email address" />
            <button type="submit" onClick={handleEmail} >Subscribe</button>
          </form>
          </div>
        </div>
      </div>

    
    </footer>
    <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2023 Majoring. All rights reserved.</p>
        </div>
      </div>
      </>
  );
};

export default Footer;
