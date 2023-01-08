import React from 'react'
import main from '../../assets/video.mp4'
import  './hero.css'

const hero = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video' typeof='video' src={main}/>
        <div className="hero-text">
            <h1>decentralized</h1>
            <h1><span className="blue">trading</span> Protocol</h1>
            <p>guaranteed liquidity trading for millions of user and top ethereum applications.</p>
            <div className="btn-group">
                <button className="btn">use defi</button>
                <button className="btn btn-outline">documentation</button>
                <button className="btn btn-outline">FAQ</button>

            </div>
        </div>
        <div className="bottom-text">

            <h2>total value seccured: $40,000,000,012</h2>
            .
        </div>
    </div>
  )
}

export default hero