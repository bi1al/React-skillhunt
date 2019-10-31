import React from "react";
import img1 from "../images/image_1.jpg";
import img2 from "../images/image_2.jpg";
import img3 from "../images/image_3.jpg";
import img4 from "../images/image_4.jpg";
import Blog from "./Blog";

function Blogs() {
  return (
    <>
      <div className="blogs-container">
        <div className="blogs-heading">
          <p>Our Blogs</p>
          <h1>Recent Blogs</h1>
        </div>

        <div className="blogs-wrapper">
          <Blog img={img1} />
          <Blog img={img2} />
          <Blog img={img3} />
          <Blog img={img4} />
        </div>
      </div>
    </>
  );
}

export default Blogs;
