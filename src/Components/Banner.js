import React from "react";

function Banner({ title }) {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Banner;
