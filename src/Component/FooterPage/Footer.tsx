import { Link } from "react-router-dom";
import React from "react";
import "./footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import logo from "../../assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <div className="footer-box">
          <h4 className="head">
            <img src={logo} alt="" />
          </h4>
          <div className="help">
            <div className="help-box">
              <div className="company three-box">
                <ul className="help-lu ">
                  <li>
                    <Link className="link" to="./about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="policies three-box">
                {/* <h4 className="head">Policies</h4> */}
                <ul>
                  <li>
                    <Link className="link" to="./heliophysics">
                      Heliophysics
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/parker-probe">
                      ParkerProbe
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="./solar-eclips">
                      Solar Eclips
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="./solar-flares">
                      Solar Flares
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="help three-box">
                {/* <h4 className="head">Help</h4> */}
                <ul>
                  <li>
                    <Link className="link" to="./multi-media">
                      Video
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="./multi-media">
                      Image
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="./news-event">
                      News & Events
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="">
                      Over View
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contect">
              <div className="contect-box">
                <ul>
                  <li>
                    <Link to="">
                      <FacebookTwoToneIcon className="facebook icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <InstagramIcon className="insta icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <TwitterIcon className=" twiter icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <LinkedInIcon className="linked icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <YouTubeIcon className="youtube icon" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="copy-right">
              <div className="copy">
                <span>
                  Copyright © {year} - All rights reserved by Celestial Coder Team
                </span>
              </div>
              <div className="Powered">
                <span>Powered by : Team Celestial Coder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
