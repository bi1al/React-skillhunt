import React, { useState } from "react";
import { IoIosBusiness, IoMdFlag, IoMdPeople } from "react-icons/io";
import ScrollAnimation from "react-animate-on-scroll";
import CountUp from "react-countup";

function Hero() {
  const [formOne, setStateOne] = useState(true);
  const [formTwo, setStateTwo] = useState(true);

  const toggle = () => {
    setStateOne(!formOne);
    setStateTwo(!formTwo);
  };

  return (
    <>
      <div className="Hero"></div>

      <div className="Hero-content">
        <ScrollAnimation animateIn="slideInLeft" delay={500} animateOnce={true}>
          <p>Find Job, Employment, and Career Opportunities</p>
          <h1 className="Hero-slogan">The Eassiest Way to Get Your New Job</h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="slideInDown" delay={600} animateOnce={true}>
          <div className="Hero-calcs">
            <div className="countries">
              <IoMdFlag className="Hero-icon" />
              <div>
                <h1>
                  {" "}
                  <CountUp end={115} duration={5} className="counter" />
                </h1>
                <p>Countries</p>
              </div>
            </div>
            <div className="companies">
              <IoIosBusiness className="Hero-icon" />
              <div>
                <h1>
                  <CountUp end={349} duration={5} className="counter" />
                </h1>
                <p>Companies</p>
              </div>
            </div>
            <div className="active-employees">
              <IoMdPeople className="Hero-icon" />
              <div>
                <h1>
                  {" "}
                  <CountUp end={80500} duration={5} className="counter" />
                </h1>
                <p>Active Employees</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="slideInUp" delay={700} animateOnce={true}>
          <div className="form-parent">
            <button
              type="button"
              className={formOne ? "form-parent-btn" : " "}
              onClick={toggle}
            >
              Find a job
            </button>
            <button
              type="button"
              className={formTwo ? "form-parent-btn2" : " "}
              onClick={toggle}
            >
              Find a candidate
            </button>
            <form action="" className={formOne ? "Hero-form" : "hide"}>
              <input
                type="text"
                placeholder="Graphic, Web Designer"
                className="Hero-input"
              />
              <select
                type="input"
                placeholder="Category"
                className="Hero-input"
              >
                <option value="">Freelance</option>
                <option value="">Full time</option>
                <option value="">Part time</option>
                <option value="">internship</option>
                <option value="">Temporary</option>
              </select>
              <input
                type="text"
                placeholder=" &#xf036; Location"
                className="Hero-input"
              />
              <button className="Hero-input">Search</button>
            </form>
            <form action="" className={formTwo ? "hide" : "Hero-form"}>
              <input
                type="text"
                placeholder="eg. Bee kay"
                className="Hero-input"
              />
              <select
                type="input"
                placeholder="Category"
                className="Hero-input"
              >
                <option value="">Full time</option>
                <option value="">Part time</option>
                <option value="">Freelance</option>
                <option value="">internship</option>
                <option value="">Temporary</option>
              </select>
              <input
                type="text"
                placeholder="eg. Sans Francisco, US "
                className="Hero-input"
              />
              <button className="Hero-input">Find Now</button>
            </form>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
}

export default Hero;
