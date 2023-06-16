import React, { useState } from 'react'

function BlueCard(props: {border: string, content: string, img: string} ) {
const [active, setActive] = useState(false)
  return (
    <div 
         onMouseEnter={()=>setActive(true)}
         onMouseLeave={()=>setActive(false)}
          className={`col-md-3 blue-card ${props.border} ${active? 'active-card': ''}`}
    >
          <img className="d-lg-flex" src={props.img} />
          <p className="card-desc">{props.content}</p>
        </div>
  )
}

export default BlueCard