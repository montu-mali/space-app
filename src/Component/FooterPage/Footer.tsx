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
            
            <div className="contect">
              <div className="contect-box">
                <ul>
                  <li>
                    <Link to="/try">
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
                <span>Created By : Team Celestial Coder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
