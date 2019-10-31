import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';


function Featured({title, time }) {
    return (
        <ScrollAnimation animateIn="slideInUp" animateOnce={true}>

        <div className="Featured-component">
                <div >
                    <p>{time}</p>
                    <h2>{title}</h2>
                    <div>
                          <span>FACEBOOK INC.</span>
                          <span>WESTERN CITY, UK </span>
                    </div>
                </div>
                <div>
                <div className="heart"></div>
                <button type="button">Apply Job</button>
                </div>

                
                
        </div>
        </ScrollAnimation>

    )
}

export default Featured
