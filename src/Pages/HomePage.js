import React from "react";
import Hero from "../Components/Hero";
import Position from "../Components/Position";
import {
  FiCode,
  FiAward,
  FiPieChart,
  FiActivity,
  FiShoppingBag,
  FiPenTool
} from "react-icons/fi";
import Topcategories from "../Components/Topcategories";
import FeaturedJob from "../Components/FeaturedJob";
import HappyClients from "../Components/HappyClients";
import Blogs from "../Components/Blogs";
import NewsLatter from "../Components/NewsLatter";
import Footer from "../Components/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import LatestCandidates from "../Components/LatestCandidates";

function HomePage() {
  return (
    <>
      <Hero />
      <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
        <div className="available-positions">
          <Position
            title="Website & Software"
            icon={<FiCode className="position-icon" />}
            position="223"
          />
          <Position
            title="Education & Training"
            icon={<FiAward className="position-icon" />}
            position="445"
          />
          <Position
            title="Graphic & UI/UX Design"
            icon={<FiPenTool className="position-icon" />}
            position="311"
          />
          <Position
            title="Accounting & Finance"
            icon={<FiPieChart className="position-icon" />}
            position="107"
          />
          <Position
            title="Restaurant & Food"
            icon={<FiShoppingBag className="position-icon" />}
            position="76"
          />
          <Position
            title="Health & Hospital"
            icon={<FiActivity className="position-icon" />}
            position="89"
          />
        </div>
      </ScrollAnimation>

      {/* 
      <ScrollAnimation animateIn="slideInUp" delay={500} animateOnce={true} animateOnce={true}>
      <Position title="Website & Software" icon={< FiCode className="position-icon" />} position="223"/>
  </ScrollAnimation>

  <ScrollAnimation animateIn="slideInUp" delay={550} animateOnce={true}>
  <Position title="Education & Training" icon={<FiAward className="position-icon" />} position="445"/>
  </ScrollAnimation>

  <ScrollAnimation animateIn="slideInUp" delay={600} animateOnce={true}>
  <Position title="Graphic & UI/UX Design" icon={<FiPenTool className="position-icon" />} position="311"/>
  </ScrollAnimation>

  <ScrollAnimation animateIn="slideInUp" delay={650} animateOnce={true}>
  <Position title="Accounting & Finance" icon={<FiPieChart className="position-icon" />} position="107"/>
  </ScrollAnimation>

  <ScrollAnimation animateIn="slideInUp" delay={700} animateOnce={true}>
  <Position title="Restaurant & Food" icon={<FiShoppingBag className="position-icon" />} position="76"/>
  </ScrollAnimation>

  <ScrollAnimation animateIn="slideInUp" delay={750} animateOnce={true}>
  <Position title="Health & Hospital" icon={< FiActivity className="position-icon" /> } position="89"/>
  </ScrollAnimation> */}

      <Topcategories />
      <FeaturedJob />
      <HappyClients />
      <LatestCandidates />
      <Blogs />

      <NewsLatter />
      <Footer />
    </>
  );
}

export default HomePage;
