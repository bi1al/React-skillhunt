import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
function Queries({title, val_1,val_2, val_3,val_4,val_5,val_6}) {

//     const QueriesBoxs = (search) => {
//             search.map(el => {
//                 return  (
//                     <>
// <input type="checkbox" name="" className="Q-checkbox"/> {search}
//                     </>
//                 );

//             })
//     } 

    return (
        <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
        <div className="Queries">
            <h2>{title}</h2>
            <input type="text" placeholder="Search" className="Q-search"/>

            <div >
            <input type="checkbox" name="" className="Q-checkbox"/><span>{val_1}</span>  
           <br /> <input type="checkbox" name="" className="Q-checkbox"/><span>{val_2}</span>
           <br /> <input type="checkbox" name="" className="Q-checkbox"/><span>{val_3}</span>
           <br /> <input type="checkbox" name="" className="Q-checkbox"/><span>{val_4}</span>
           <br /> <input type="checkbox" name="" className="Q-checkbox"/><span>{val_5}</span>
           <br /> <input type="checkbox" name="" className="Q-checkbox"/> <span>{val_6}</span>
            </div>

        </div>
        </ScrollAnimation>
    )
}

export default Queries
