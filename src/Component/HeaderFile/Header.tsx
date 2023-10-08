import React, { useState } from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import viewspace from "../../assets/viewspace.jpg";
import logo from "../../assets/logo.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Header = () => {
  const [navBar, setNavBar] = useState(false);
  console.log(navBar);
  return (
    <>
      <header>
        <div className="header-box">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          {/* <NavLink to=''></NavLink> */}
          <div className={navBar ? "mobile_nav navbar-box " : "navbar-box "}>
            <div className="navbar">
              <ul>
                <li>
                  <NavLink className="navLink" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navLink" to="news-event">
                    News & Events
                  </NavLink>
                </li>
                <li className="dropdown-box">
                  Interactives
                  <div className="dropdown">
                    <div className="dropdown-content">
                      <NavLink className="navLink" to="heliophysics">
                        Heliophysics
                      </NavLink>
                      <NavLink className="navLink" to="parker-probe">
                        ParkerProbe
                      </NavLink>
                      <div className="navLink dropdown2">
                        Solar Maximum
                        <div className="dropdown21">
                          <NavLink to="solar-eclips">Solar Eclips</NavLink>
                          <NavLink to="solar-flares">Solar Flares</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <NavLink className="navLink" to="/multi-media">
                    MultiMedia
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navLink" to="/add-blog">
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="cross">
              <CloseRoundedIcon className="cross_icon" onClick={() => setNavBar(false)} />
            </div>
          </div>
          <div className="nav_bar">
            <MenuRoundedIcon onClick={() => setNavBar(true)} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
