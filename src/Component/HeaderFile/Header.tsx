import React from 'react'
import "./Header.scss"
import { Link, NavLink } from 'react-router-dom'
import viewspace from "../../assets/viewspace.jpg"
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <>
      <header>
        <div className="header-box">
          <div className="logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>
          {/* <NavLink to=''></NavLink> */}
          <div className="navbar-box">
            <div className="navbar">
              <ul>
                <li><NavLink className="navLink" to="/">Home</NavLink></li>
                <li className="dropdown-box">Interactives
                  <div className="dropdown">
                    <div className="dropdown-content">
                     <NavLink className="navLink" to='/'>Link 1</NavLink>
                     <NavLink className="navLink" to='/'>Link 2</NavLink>
                     <NavLink className="navLink" to='/'>Link 3</NavLink>
                    </div>
                  </div>
                </li>
                <li><NavLink className="navLink" to='/video'>Video</NavLink></li>
                <li><NavLink className="navLink" to='/'>Contact</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header