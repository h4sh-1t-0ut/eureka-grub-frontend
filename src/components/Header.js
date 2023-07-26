import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({ currentUser, logout }) => {
  const [click, setClick] = useState(false)
  const navigate = useNavigate()
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const handleLogOut = () => {
    logout()
    navigate('/')
  }
  
  return (
    <>
     <nav className="navbar">
          <div className="navbar-container">

              <div className='menu-icon' onClick={handleClick}>
                  <i className = {click ? 'fa-regular fa-circle-xmark' : 'fa-solid fa-bars'} />
              </div>
              {currentUser && (
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
                  <Link to='/myrecipes' className="nav-links" onClick={closeMobileMenu}>
                      My Recipes
                  </Link>
                  </li>

                  <li className="nav-item">
                  <Link className="nav-links" onClick={handleLogOut}>
                      Log Out
                  </Link>
                  </li>
                </ul> 
              )}
              {!currentUser && (
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
              )}
          </div>
      </nav>
    </>
  )
}

export default Header