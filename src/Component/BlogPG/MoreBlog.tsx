import React, { useEffect, useState } from "react";
import "./MoreBlog.scss";
import { useLocation, useNavigate } from "react-router-dom";

const MoreBlog = () => {
  const [blogData, setBlogData] = useState([]);
  const navigate = useNavigate();
  const idNumber = useLocation();
  const id = idNumber.state.id;

//   const newItem = bookData.filter((old) => {
//     return old.key === id;
//   });

  useEffect(() => {
    fetch("https://albany-bandicoot-esma.1.ie-1.fl0.io/api/v1/post/all", {
      method: "post",
    })
      .then((response) => response.json())
      .then((result) => {
        setBlogData(result.data);
        console.log(result)
      });
      const newItem = blogData.filter((old:any) => {
        return old.id === id;
      });
      
  }, []);

  

  return <>
      <div className="detail_box">
        <div className="detail">
            
        </div>
      </div>
  </>;
};

export default MoreBlog;
