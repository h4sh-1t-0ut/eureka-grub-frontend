import React from 'react'

const TopSection = () => {
  return (
    <div>
        <video autoPlay loop muted>
          <source src='videos/video-1.mp4' type='video/mp4' />
          Video here
        </video>
        <h1>EurekaGrub</h1>
        <p>We gots the Meats</p>
    </div>
  )
}

export default TopSection