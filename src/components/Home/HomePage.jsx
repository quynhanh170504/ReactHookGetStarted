import React from 'react'
import video_homepage from '../../assets/video-homepage.mp4'

import './Homepage.scss'

const Homepage = () => {
  return (
    <div className='homepage-container'>
      <video autoPlay loop muted>
        <source src={video_homepage} type="video/mp4"/>
      </video>
    </div>
  )
}

export default Homepage