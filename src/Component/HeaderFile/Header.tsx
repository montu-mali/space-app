import React from 'react'
import "./Header.scss"
import { Link,NavLink  } from 'react-router-dom'
import viewspace from "../../assets/viewspace.jpg"

const Header = () => {
  return (
    <>
      <header>
        <div className="header-box">
          <div className="logo">
            <img  src={viewspace} alt="logo" />
          </div>
          <div className="navbar-box">
            <div className="navbar">
              <ul>
                <li>Home</li> 
                  <li>Interactives</li>
                <li>Videos</li>
                <li>Resource</li> 
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header