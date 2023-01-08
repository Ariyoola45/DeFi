import React from 'react'
import './navbar.css'
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [click, setClick] = useState(false)
  const hanDle = ()=>{
    setClick(!click)
  }
  return (
    <div className='navbar'> 
       <div className="container">
       <h1 style={{
          marginLeft:'1rem',
          color:'#00d8ff'
        }}>defi</h1>
        <ul className= {!click ? 'nav active' : 'nav'}>
          <li className="nav-item">
            <a href="">platform</a>
          </li>
          <li className="nav-item">
            <a href="">developer</a>
          </li>
          <li className="nav-item">
            <a href="">communities</a>
          </li>
          <li className="nav-item">
            <a href="">about</a>
          </li>
          <li className="nav-item">
            <a href="" className='btn'>use defi</a>
          </li>
        </ul>
        <div className="bugger" onClick={hanDle}>
          {click ? (  <AiOutlineMenu className='icon'/>) : (<AiOutlineClose className='icon'/>) }
      
        </div>
       </div>
    </div>
  )
}

export default Navbar