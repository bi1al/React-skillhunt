import React from "react";
import Category from "./Category";
import ScrollAnimation from "react-animate-on-scroll";

import {
  IoIosBriefcase,
  IoIosClock,
  IoIosPaper,
  IoMdSearch
} from "react-icons/io";

function Topcategories() {
  return (
    <>
      <div className="top-categories">
        <div className="categories-heading">
          <p>job categories</p>
          <h1>Top Categories</h1>
        </div>
        <div className="category-childs">
          <ScrollAnimation animateIn="slideInUp" delay={300} animateOnce={true}>
            <Category title="web development" amount="389" />
            <Category title="web development" amount="209" />
            <Category title="Education & Training" amount="300" />
            <Category title="PHP Programming" amount="133" />
          </ScrollAnimation>

          <ScrollAnimation animateIn="slideInUp" delay={400} animateOnce={true}>
            <Category title="Web Designer" amount="172" />
            <Category title="English" amount="78" />
            <Category title="Project Management" amount="344" />
            <Category title="Customer Services" amount="278" />
          </ScrollAnimation>

          <ScrollAnimation animateIn="slideInUp" delay={400} animateOnce={true}>
            <Category title="Multimedia" amount="119" />
            <Category title="Social Media" amount="56" />
            <Category title="Finance Management" amount="99" />
            <Category title="Marketing & Sales" amount="128" />
          </ScrollAnimation>

          <ScrollAnimation animateIn="slideInUp" delay={500} animateOnce={true}>
            <Category title="Advertising " amount="339" />
            <Category title="Writing" amount="192" />
            <Category title="Office & Admin" amount="56" />
            <Category title="Software Development" amount="285" />
          </ScrollAnimation>
        </div>
      </div>
      <div className="services-categories">
        <div className="s1">
          <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
            <IoIosBriefcase className="services-icon" />
            <h5>Millions of Jobs</h5>
            <p>A small river named Duden flows by their place and supplies.</p>
          </ScrollAnimation>
        </div>

        <div className="s1">
          <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
            <IoIosClock className="services-icon" />
            <h5>Easy To Manage Jobs</h5>
            <p>A small river named Duden flows by their place and supplies.</p>
          </ScrollAnimation>
        </div>

        <div className="s1">
          <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
            <IoIosPaper className="services-icon" />
            <h5>Easy To Manage Jobs</h5>
            <p>A small river named Duden flows by their place and supplies.</p>
          </ScrollAnimation>
        </div>

        <div className="s1">
          <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
            <IoMdSearch className="services-icon" />
            <h5>Search Candidates</h5>
            <p>A small river named Duden flows by their place and supplies.</p>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
}

export default Topcategories;
