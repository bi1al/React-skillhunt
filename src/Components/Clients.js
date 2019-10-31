import React from "react";
import Slider from "react-slick";
import img1 from "../images/person_1.jpg";
import img2 from "../images/person_2.jpg";
import img3 from "../images/person_3.jpg";
import img4 from "../images/person_4.jpg";
import img5 from "../images/person_5.jpg";

export default class Client extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      lazyLoad: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
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
      <div className=" Clients-wrapper">
        <Slider {...settings}>
          <div className="Person">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live...
            </p>
            <div>
              <img src={img1} alt="" className="client-img" />
              <h3>Roger Scott</h3>
              <span>Marketing Manager</span>
            </div>
          </div>

          <div className="Person">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live...
            </p>
            <div>
              <img src={img2} alt="" className="client-img" />
              <h3>Roger Scott</h3>
              <span>Marketing Manager</span>
            </div>
          </div>

          <div className="Person">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live...
            </p>
            <div>
              <img src={img3} alt="" className="client-img" />
              <h3>Roger Scott</h3>
              <span>Marketing Manager</span>
            </div>
          </div>

          <div className="Person">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live...
            </p>
            <div>
              <img src={img4} alt="" className="client-img" />
              <h3>Roger Scott</h3>
              <span>Marketing Manager</span>
            </div>
          </div>

          <div className="Person">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live...
            </p>
            <div>
              <img src={img5} alt="" className="client-img" />
              <h3>Roger Scott</h3>
              <span>Marketing Manager</span>
            </div>
          </div>

          <div className="Person">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live...
            </p>
            <div>
              <img src={img1} alt="" className="client-img" />
              <h3>Roger Scott</h3>
              <span>Marketing Manager</span>
            </div>
          </div>

          <div className="Person">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live...
            </p>
            <div>
              <img src={img2} alt="" className="client-img" />
              <h3>Roger Scott</h3>
              <span>Marketing Manager</span>
            </div>
          </div>

          <div className="Person">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live...
            </p>
            <div>
              <img src={img3} alt="" className="client-img" />
              <h3>Roger Scott</h3>
              <span>Marketing Manager</span>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
