import React from 'react'
import '../styles/TopSection.css'
import { Link } from 'react-router-dom'
import Cooking from '../assets/cooking.png'
import Phone from '../assets/telephone.png'

const TopSection = () => {
  return (
    <div className="top-section">
        <video autoPlay loop muted plays-inline className="back-video">
          <source src='videos/video-1.mp4' type='video/mp4'/>
        </video>
        <div className="content">
          <h1>
          Eur<span className="highlight">eka</span>Grub
          </h1>
          <p>We gots the Meats</p>
          <div className='links'>
          <Link to='/recipes'><img alt='cooking' src={Cooking}/></Link>
          <Link to='/contactus'><img alt='phone 'src={Phone}/></Link>
          </div>
        </div>
    </div>
  )
}

export default TopSection