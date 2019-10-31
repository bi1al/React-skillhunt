import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../images/person_1.jpg";
import img2 from "../images/person_2.jpg";
import img3 from "../images/person_3.jpg";
import img4 from "../images/person_4.jpg";
import img5 from "../images/person_5.jpg";
import Person from "../Components/Person";

export class LatestCandidates extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 200,
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      lazyLoad: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
        <div className="latest-candidates">
          <div className="heading">
            <h4>CANDIDATES</h4>
            <h1>Latest Candidates</h1>
          </div>
          <Slider {...settings}>
            {/* <div className="candid">
              <img src={img4} alt="" />
              <h2>Nicole Simons</h2>
              <span>WESTERN CITY, UK</span>
            </div>

            <div className="candid">
              <img src={img3} alt="" />
              <h2>Nicole Simons</h2>
              <span>WESTERN CITY, UK</span>
            </div>

            <div className="candid">
              <img src={img2} alt="" />
              <h2>Nicole Simons</h2>
              <span>WESTERN CITY, UK</span>
            </div>

            <div className="candid">
              <img src={img1} alt="" />
              <h2>Nicole Simons</h2>
              <span>WESTERN CITY, UK</span>
            </div>

            <div className="candid">
              <img src={img5} alt="" />
              <h2>Nicole Simons</h2>
              <span>WESTERN CITY, UK</span>
            </div> */}

            <Person img={img2} name="Nicole Simons" />
            <Person img={img1} name="Nicole Simons" />
            <Person img={img3} name="Nicole Simons" />
            <Person img={img4} name="Nicole Simons" />
            <Person img={img5} name="Nicole Simons" />
            <Person img={img3} name="Nicole Simons" />
          </Slider>
        </div>
      </>
    );
  }
}

export default LatestCandidates;
