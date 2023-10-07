import React from "react";
import './HelioPhysics.scss'
import heliophysics from "../../assets/heliophysics.jpg";

const HelioPhysics = () => {
  return (
    <>
      <div className="heliop_box">
        <div className="heliop">
          <div className="image_box">
            <img src={heliophysics} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HelioPhysics;
