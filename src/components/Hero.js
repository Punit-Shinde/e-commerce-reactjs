import React from 'react'
import "./Hero.css"

const Hero = () => {
  return ( 
    <div className='container'>
        <div className='contant'>
            {/* Overlay */}
            <div className='heading'>
                <h1>The <span>Best</span></h1>
                <h1> <span>Steps</span> Devlivered</h1>
            </div>
            <img className='img' src="https://media.gq.com/photos/59e779eab2ac1f76b03c344c/16:9/w_1920,h_1080,c_limit/zoomfly-sp-sneak-of-the-week.gif" alt="/" />
        </div>
    </div>
  )
}

export default Hero;
