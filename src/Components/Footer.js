import React from "react";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { MdCall, MdLocationOn, MdEmail } from "react-icons/md";
import ScrollAnimation from "react-animate-on-scroll";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-wrapper">
          <div>
            <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
              <h4>Skill Hunt</h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>

              <div className="social_icons">
                <FaFacebookF className="icon" />
                <FaTwitter className="icon" />
                <FaYoutube className="icon" />
              </div>
            </ScrollAnimation>
          </div>

          <div>
            <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
              <h4>Employers</h4>
              <ul>
                <li>
                  <a href="####">Browse Candidates</a>
                </li>
                <li>
                  <a href="####"> Post a Job</a>
                </li>
                <li>
                  {" "}
                  <a href="####">Resume Page</a>
                </li>
                <li>
                  {" "}
                  <a href="####">Employer Listing</a>
                </li>
                <li>
                  {" "}
                  <a href="####">Dashboard</a>
                </li>
                <li>
                  <a href="####">Job Packages</a>
                </li>
              </ul>
            </ScrollAnimation>
          </div>

          <div>
            <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
              <h4>Candidate</h4>
              <ul>
                <li>
                  <a href="###">Browse job</a>
                </li>
                <li>
                  <a href="###">Submit resume</a>
                </li>
                <li>
                  {" "}
                  <a href="###">Dashboard</a>
                </li>
                <li>
                  {" "}
                  <a href="###">Browse Categories</a>
                </li>
                <li>
                  {" "}
                  <a href="###">My Bookmarks</a>
                </li>
                <li>
                  <a href="###">Candidate listing</a>
                </li>
              </ul>
            </ScrollAnimation>
          </div>

          <div>
            <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
              <h4>Account</h4>
              <ul>
                <li>
                  <a href="###">My Account</a>
                </li>
                <li>
                  <a href="###"> sing in</a>
                </li>
                <li>
                  {" "}
                  <a href="###">Create Account</a>
                </li>
                <li>
                  {" "}
                  <a href="###">Checkout</a>
                </li>
              </ul>
            </ScrollAnimation>
          </div>

          <div>
            <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
              <h4>Employers</h4>
              <ul>
                <p>
                  <span>
                    <MdLocationOn className="location" />
                  </span>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
                <li>
                  <span>
                    <MdCall className="location" />
                  </span>
                  +2 392 3929 210
                </li>
                <li>
                  <span>
                    <MdEmail className="location" />
                  </span>
                  info@yourdomain.com
                </li>
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
