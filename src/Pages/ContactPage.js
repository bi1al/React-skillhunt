import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";

import { FaMapMarkerAlt, FaMobile, FaEnvelope, FaGlobe } from "react-icons/fa";

function ContactPage() {
  return (
    <>
      <Banner title="Contact us" />

      <div className="contact-information">
        <div>
          <FaMapMarkerAlt className="contact-icon" />
          <h4>Address</h4>
          <span> 198 West 21th Street, Suite 721 New York NY 10016</span>
        </div>

        <div>
          <FaMobile className="contact-icon" />
          <h4>Phone</h4>
          <span>+ 1235 2355 98</span>
        </div>

        <div>
          <FaEnvelope className="contact-icon" />
          <h4>Email</h4>
          <span>info@yoursite.com</span>
        </div>

        <div>
          <FaGlobe className="contact-icon" />
          <h4>Phone</h4>
          <span>www.yoursite.com</span>
        </div>
      </div>

      <div className="contact_wrapper">
        {/* <div className="contact_information">
          <div>
          <h1>Contact Information</h1>

          <div>
            <span>
              Address: 198 West 21th Street, Suite 721 New York NY 10016
            </span>
            <span>Phone: + 1235 2355 98</span>
            <span>Email: info@yoursite.com</span>
            <span>Website yoursite.com</span>
          </div>
        </div>
        </div> */}

        <div className="contact_section">
          <div className="contact-details"></div>
          <div className="contact-details">
            <input type="text" placeholder="Name" />
            <br /> <input type="text" placeholder="your Email" />
            <br /> <input type="text" placeholder="Subject" />
            <br /> <textarea placeholder="Message" />
            <br />
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;
