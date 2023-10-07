import React from 'react'
import "./ParkerProbe.scss";
import parkerprobe from "../../assets/parkerprobe.png";
import helioimage from "../../assets/helioimage.webp";

const ParkerProbe = () => {
  return (
    <>
    <div className="parker_box">
        <div className="parkerP">
          <div className="image_box">
            <img src={parkerprobe} alt="" />
          </div>
          <div className="text_box">
            <h1 className="header">Overview</h1>
            <div className="text_content">
              <p>
                The Science Mission Directorate Heliophysics Division studies
                the nature of the Sun, and how it influences the very nature of
                space — and, in turn, the atmospheres of planets and the
                technology that exists there. Space is not, as is often
                believed, completely empty; instead, we live in the extended
                atmosphere of an active star. Our Sun sends out a steady
                outpouring of particles and energy -- the solar wind – as well
                as a constantly writhing magnetic system. This extensive,
                dynamic solar atmosphere surrounds the Sun, Earth, the planets,
                and extends far out into the solar system.
              </p>
              <p>
                Studying this system not only helps us understand fundamental
                information about how the universe works, but also helps protect
                our technology and astronauts in space. NASA seeks knowledge of
                near-Earth space, because -- when extreme -- space weather can
                interfere with our communications, satellites and power grids.
                The study of the Sun and space can also teach us more about how
                stars contribute to the habitability of planets throughout the
                universe.
              </p>
              <p>
                Mapping out this interconnected system requires a holistic study
                of the Sun’s influence on space, Earth and other planets. NASA
                has a fleet of spacecraft strategically placed throughout our
                heliosphere -- from Parker Solar Probe at the Sun observing the
                very start of the solar wind, to satellites around Earth, to the
                farthest human-made object, Voyager, which is sending back
                observations on interstellar space. Each mission is positioned
                at a critical, well-thought out vantage point to observe and
                understand the flow of energy and particles throughout the solar
                system -- all helping us untangle the effects of the star we
                live with.{" "}
              </p>

              <img src={helioimage} alt="" />
            </div>
          </div>
        </div>
      </div></>
  )
}

export default ParkerProbe