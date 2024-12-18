import React from 'react'
import video_homepage from '../../assets/video-homepage.mp4'

import './Homepage.scss'

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <video autoPlay loop muted>
        <source src={video_homepage} type="video/mp4"/>
      </video>
      <div className='homepage-content'>
        <div className='para1'>There's a better way to ask</div>
        <div className='para2'>You don't want to make a boring form. And your audience won't answer one. Create a typeform instead-and make everyone happy</div>
        <div className='para3'>
          <button>Get started, it's free</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage