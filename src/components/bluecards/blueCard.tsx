import React, { useState } from 'react'

function BlueCard(props: {border: string, active: boolean, content: string, img: string} ) {

  return (
    <div className={`col-md-3 blue-card ${props.border} ${props.active? 'active-card': ''}`}>
            <img className="d-lg-flex" src={props.img} />
            <p className="card-desc">{props.content}</p>
        </div>
  )
}

export default BlueCard