import React from "react";

function Person({ name, img }) {
  return (
    <div className="ind-person">
      <img src={img} alt="" />
      <h1>{name}</h1>
      <span>WESTERN CITY, UK</span>
    </div>
  );
}

export default Person;
