import React from 'react';
import solarE from "../../assets/multimedia/solarE.jpg";
import './MeltiMedia.scss'


const MultiMedia = () => {
  return (
    <div>
      <h1>Solar Parkour Probes and Space Exploration Multimedia</h1>

      <h2>Images</h2>
      <div className="image-container flx">
        <img
          src={solarE}
          alt="Solar Probe 1"
          className="media-img"
        />
       <img
          src={solarE}
          alt="Solar Probe 1"
          className="media-img"
        />
           <img
          src={solarE}
          alt="Solar Probe 1"
          className="media-img"
        />
           <img
          src={solarE}
          alt="Solar Probe 1"
          className="media-img"
        />
        {/* Add more image elements here */}
      </div>

      <h2>Videos</h2>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VIDEO_ID_1"
          title="Solar Probe Video 1"
        
          allow="autoplay; encrypted-media"
         
          className="media-item"
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VIDEO_ID_2"
          title="Solar Probe Video 2"
          
          allow="autoplay; encrypted-media"
         
          className="media-item"
        ></iframe>
        {/* Add more video elements here */}
      </div>
    </div>
  );
};

export default MultiMedia;
