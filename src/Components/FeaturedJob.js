import React from "react";
import Featured from "./Featured";
import img1 from "../images/company-1.jpg";
import img2 from "../images/company-2.jpg";
import img3 from "../images/company-3.jpg";
import img4 from "../images/company-4.jpg";
import ScrollAnimation from "react-animate-on-scroll";

function FeaturedJob() {
  return (
    <>
      <div className="featured-parent">
        <div>
          <div className="featured-heading">
            <p>RECENTLY ADDED JOBS</p>
            <h1>Featured Jobs Posts For This Week</h1>
          </div>
          <div>
            <Featured title="Frontend Development" time="Part Time" />
            <Featured title="Full Stack Developer" time="Full Time" />
            <Featured title="Open Source Developer" time="Freelance" />
            <Featured title="Frontend Development" time="part Time" />
            <Featured title="Open  Interactive Developer" time="Temporary" />
            <Featured title="Open Source Developer" time="Freelance" />
            <Featured title="Open  Interactive Developer" time="Full Time" />
            <Featured title="Frontend Development" time="Temporary" />
          </div>
        </div>

        <div className="Top-Recruitments">
          <div className="rec-heading">
            <h1>Top Recruitments</h1>
          </div>
          <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
            <div>
              <img src={img1} alt="" />
              <h3>IT Programming INC</h3>
              <p>
                <span>500</span>Open Positions
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
            <div>
              <img src={img2} alt="" />
              <h3>Facebook INC.</h3>
              <p>
                <span>500</span>Open Positions
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
            <div>
              <img src={img3} alt="" />
              <h3>Google Hires</h3>
              <p>
                <span>500</span>Open Positions
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
            <div>
              <img src={img4} alt="" />
              <h3>Twitter inc.</h3>
              <p>
                <span>500</span>Open Positions
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
}

export default FeaturedJob;
