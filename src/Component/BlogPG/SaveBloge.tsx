import React, { useEffect, useState } from "react";
import teamData from "./MemberApi";
import blog from "../../assets/blog.webp";
import "./SaveBlog.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { ClassNames } from "@emotion/react";

export const SaveBloge = () => {
  const[blogData,setBlogData]=useState([]);
  const navigate = useNavigate();

  const gOToAbout = (cur: any) => {
    navigate(`/blog-details?id=${cur}`, { state: { id: cur } });
    window.scrollTo({
      top: 0,
    });
  };


  console.log(blogData);

  useEffect(() => {
    fetch("https://albany-bandicoot-esma.1.ie-1.fl0.io/api/v1/post/all", {
      method: "post",
    })
      .then((response) => response.json())
      .then((result) => {
        setBlogData(result.data)
      });
  },[]);
  
  return (
    <div>
      <>
        <div className="SaveB_box">
          <div className="team">
            <div className="centent_box">
              <div className="button">Blogs</div>
              {/* <h1>Our Creative Team</h1> */}
            </div>
            <div className="team_member">
              <div className="members">
                {blogData.map((cur:any) => {
                  return (
                    <div className="member">
                      <div className="image">
                        <img src={cur.image} alt="" />
                      </div>
                      <div className="name">{cur.name}</div>
                      <p>{cur.title}</p>
                      <div className="more_button" onClick={()=>gOToAbout(cur.id)}>
                          <NavLink className="button" to="blog-details"><span>more<ArrowOutwardRoundedIcon className="arrow"/></span></NavLink>
                          
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
