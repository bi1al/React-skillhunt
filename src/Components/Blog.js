import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Blog({ img }) {
  return (
    <div className="blog">
      <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
        <img src={img} alt="" />
        <div>
          <span>AUGUST 28, 2019 ADMIN 3</span>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
          </p>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Blog;
