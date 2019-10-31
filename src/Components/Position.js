import React from 'react'

function Position({title, icon, position}) {
    return (
        <div className="position">
              <h3>{title}</h3>
               <h3>{icon}</h3>
              <p> {position} open Positions</p>
        </div>
    )
}

export default Position
