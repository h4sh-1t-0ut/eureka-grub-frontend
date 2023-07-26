import React from 'react'
import '../styles/TopSection.css'

const TopSection = () => {
  return (
    <div className="top-section">
        <video autoPlay loop muted plays-inline className="back-video">
          <source src='videos/video-1.mp4' type='video/mp4'/>
        </video>
        <div className="content">
          <h1>EurekaGrub</h1>
          <p>We gots the Meats</p>
        </div>
    </div>
  )
}

export default TopSection