import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
     <nav className="navbar">
          <div className="navbar-container">

              <div className='menu-icon' onClick={handleClick}>
                  <i className = {click ? 'fa-regular fa-circle-xmark' : 'fa-solid fa-bars'} />
              </div>

              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                    Home
                </Link>
                </li>

                <li className="nav-item">
                <Link to='/recipes' className="nav-links" onClick={closeMobileMenu}>
                    Recipes
                </Link>
              </li>

                <li className="nav-item">
                <Link to='/login' className="nav-links" onClick={closeMobileMenu}>
                    Login
                </Link>
                </li>

              <li className="nav-item">
                <Link to='/signup' className="nav-links" onClick={closeMobileMenu}>
                    Sign up
                </Link>
              </li>
            </ul> 
          </div>
      </nav>
    </>
  )
}

export default Header