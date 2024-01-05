import React from "react";
import solarE from "../../assets/imgs/eclips-img.jpg";
import se1 from "../../assets/imgs/se1.jpg";
import se2 from "../../assets/imgs/se2.jpg";
import se3 from "../../assets/imgs/se3.jpg";
import se4 from "../../assets/imgs/se4.jpg";
import se5 from "../../assets/imgs/se5.jpg";
import sm2 from "../../assets/imgs/sm2.jpg";
import sm3 from "../../assets/imgs/sm3.jpg";
import sm4 from "../../assets/imgs/sm4.jpg";
import sm5 from "../../assets/imgs/sm5.jpg";

import "./MeltiMedia.scss";

const MultiMedia = () => {
  return (
    <>
    <div className="multi_media">
    <div className="heading">
        <h1 className="vid">Videos Gallary</h1>
        <h3 className="ttl">
          Some Videos About to Specific topic HelioPhysics and Solar Parker
          Probe
        </h3>
      </div>

      <div className="videos">
        <iframe
          className="iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LkaLfbuB_6E?si=8KaNElULuuBLz5zy"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <iframe
          className="iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RT9laVHZZQo?si=hgermcTuPpJfNG8T"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <iframe
          className="iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/W5RxRc5xIwQ?si=xUC4K0fB3vCiSR1m"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <iframe
          className="iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pOZhPz92Dic?si=RvAJzK23sEC2gOTu"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <div className="heading">
        <h1 className="vid"> Image Gallary </h1>
        <h3 className="ttl">
          Some Image Content About to Specific topic HelioPhysics and Solar
          Parker Probe
        </h3>
      </div>
      <div className="image-container">
        <img src={se1} alt="Solar Maximum" className="img media-img" />
        <img src={se2} alt="Solar Maximum" className="img media-img" />
        <img src={se3} alt="Solar Maximum" className="img media-img" />
        <img src={se4} alt="Solar Maximum" className="img media-img" />
        <img src={sm2} alt="Solar Maximum" className="img media-img" />
        <img src={sm3} alt="Solar Maximum" className="img media-img" />
        <img src={sm4} alt="Solar Maximum" className="img media-img" />
        <img src={sm5} alt="Solar Maximum" className="img media-img" />
      </div>
    </div>
      
    </>
  );
};

export default MultiMedia;
