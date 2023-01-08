import React from 'react'
import './about.css'

const AboutCard = ({icon,heading,text}) => {
  return (
    <div>
      <div className="icon-container">
       {icon}
      </div>
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  )
}

export default AboutCard
