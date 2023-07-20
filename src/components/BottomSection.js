import React from 'react'
import { Fade } from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
    "https://secretnyc.co/wp-content/uploads/2021/08/Featured-FFF-NY.jpeg",
    "https://resources.matcha-jp.com/resize/480x2000/2020/09/04-106854.webp",
    "https://i.pinimg.com/originals/ed/43/75/ed43753f960f4ea733d9f94addcfdc25.jpg"
  ]

const BottomSection = () => {
  return (
    <>
     <div className="slide-container1">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} alt='Dessert'/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} alt='Dessert'/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} alt='Dessert'/>
        </div>
      </Fade>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    <div className="slide-container2">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} alt='Course Meals'/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} alt='Course Meals'/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} alt='Course Meals'/>
        </div>
      </Fade>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    <div className="slide-container3">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} alt='Beverages'/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} alt='Beverages'/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} alt='Beverages'/>
        </div>
      </Fade>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    </>
  )
}

export default BottomSection