import React from 'react'
import './sub.css'

const Subcribe = () => {
  return (
    <div className='subscribe'>
      <div className="content">
        <h2>join Our DeFi Community</h2>
        <form action="https://getform.io/f/c937945d-39e4-4c42-8cfb-ec2b048ae120" method='POST'>
          <div className="form-container display-col">
            <input type="email" name='email' placeholder='Enter your email' />
            <button className='btn'>Sign Up</button>
          </div>
          <div className="form-container">
            <input type="checkbox" name="" id="" /><p>Yes I agree to receive email communication from DeFI </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Subcribe