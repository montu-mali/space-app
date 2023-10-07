import React from 'react';
import solarE from "../../assets/multimedia/solarE.jpg";
import './MeltiMedia.scss'


const MultiMedia = () => {
  return (
    <>
    <h2 className="vid">
      Videos Gallary :
    </h2>
    <h3 className="ttl">
      Some Videos About to Specific topic HelioPhysics and Solar Parker Probe
    </h3>

    <div className="videos">
    <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/LkaLfbuB_6E?si=8KaNElULuuBLz5zy" title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/RT9laVHZZQo?si=hgermcTuPpJfNG8T" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
    <div className="videos">
    <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/W5RxRc5xIwQ?si=xUC4K0fB3vCiSR1m" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/pOZhPz92Dic?si=RvAJzK23sEC2gOTu" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>

    <h2 className="vid">Image Gallary:</h2>
    <h3 className="ttl">
      Some Image Content About to Specific topic HelioPhysics and Solar Parker Probe
    </h3>
    </>
 
  );
};

export default MultiMedia;
