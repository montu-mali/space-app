import React from "react";
import teamData from './MemberApi'
import blog from "../../assets/blog.webp" 
import './SaveBlog.scss'

export const SaveBloge = () => {
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
                {teamData.map((cur) => {
                  return (
                    <div className="member">
                      <div className="image"><img src={blog} alt="" /></div>
                      <div className="name">{cur.name}</div>
                      <p>{cur.about}</p>
                      {/* <div className="media_box">
                       
                      </div> */}
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
