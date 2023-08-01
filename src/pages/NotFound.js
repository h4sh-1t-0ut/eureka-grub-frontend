import React from 'react'
import './NotFound.css'

const NotFound = () => {
  return (
    <>
    <div className='notfound'>
    <video autoPlay loop muted plays-inline className="back-video">
          <source src='videos/video-2.mp4' type='video/mp4'/>
        </video>
      <h1 className="notfound-heading">Uh oh, you are on fire! Go back Home!</h1>
    </div>
    </>
  )
}

export default NotFound