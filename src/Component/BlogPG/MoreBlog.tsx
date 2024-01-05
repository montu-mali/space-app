import React, { useEffect, useState } from "react";
import "./MoreBlog.scss";
import { useLocation, useNavigate } from "react-router-dom";

const MoreBlog = () => {
  const [blogData, setBlogData] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const idNumber = useLocation();
  const [id, setId] = useState();
  const idx = idNumber.state.id;

  

  useEffect(() => {
    setId(idx);
    fetch("https://albany-bandicoot-esma.1.ie-1.fl0.io/api/v1/post/all", {
      method: "post",
    })
      .then((response) => response.json())
      .then((result) => {
        setBlogData(result.data);
      });

    const newItem = blogData.filter((old: any) => {
      return old.id === id;
    });

    setData(newItem);
  }, [blogData]);


  return (
    <>
      <div className="detail_box">
        {data.map((cur: any) => {
          return (
            <div className="detail">
              <div className="name">
                <h3>{cur.name}</h3>
              </div>
              <div className="title">
                <h1>{cur.title}</h1>
              </div>
              <div className="image">
                <img src={cur.image} alt="" />
              </div>
              <div className="content">
                <p>{cur.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MoreBlog;
