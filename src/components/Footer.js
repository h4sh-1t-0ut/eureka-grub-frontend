import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
      <div className='info'>
        Copyright: Brandon Shinzato, Ricky Espinoza, Michael Ortega
      </div>
      <div className='footer-links'>
          <Link to='/contactus'>
            Contact Us
          </Link>
          <Link to='/meetus'>
            About Us
          </Link>
      </div>
    </div>
    </>
  )
}

export default Footer