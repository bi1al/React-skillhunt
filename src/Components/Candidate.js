import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

function Candidate({img,Name}) {
  return (
    <>
    <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
    <div className="candidate">

      <img src={img} alt="" />

      <div className="candidate-details">
        <span>Western City, UK</span>
        <h3>{Name}</h3>
        <span className="Graduate-lable">Graduate</span>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <p className="active">
        Last Activity 4 months ago
        </p>

        <button className="shortlist">Shortlist</button>
      </div>
      </div>
      </ScrollAnimation>

    </>
  );
}

export default Candidate;
