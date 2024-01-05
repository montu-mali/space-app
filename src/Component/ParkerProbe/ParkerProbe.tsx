import React from "react";
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
              The Parker Solar Probe, officially known as the Parker Solar Probe
              mission, is a NASA spacecraft launched on August 12, 2018, with
              the primary mission of studying the outer atmosphere of the Sun,
              known as the solar corona, and the solar wind. It is named after
              Dr. Eugene Parker, an astrophysicist who made significant
              contributions to our understanding of the solar wind and proposed
              the existence of the solar wind in the 1950s. Here is detailed
              information about the Parker Solar Probe:
              <br />
              <br />
              1. Mission Objectives: The Parker Solar Probe is designed to
              answer several fundamental questions about the Sun and the solar
              wind, including: - Understanding the structure and dynamics of the
              solar corona. - Investigating the acceleration and heating
              processes of the solar wind. - Exploring the magnetic fields and
              plasma waves near the Sun. - Measuring the properties of solar
              wind particles at close proximity to the Sun.
              <br />
              <br />
              2. Closest Approach to the Sun: The Parker Solar Probe's primary
              mission objective is to get closer to the Sun than any previous
              spacecraft. It approaches the Sun in a series of progressively
              closer orbits, ultimately coming within approximately 3.83 million
              miles (about 6.16 million kilometers) from the Sun's surface.
              <br />
              <br />
              3. Heat Shield: To withstand the extreme conditions near the Sun,
              the Parker Solar Probe is equipped with a cutting-edge heat shield
              called the Thermal Protection System (TPS). The TPS is made of
              carbon-composite materials and can withstand temperatures
              exceeding 2,500 degrees Fahrenheit (about 1,377 degrees Celsius).
              <br />
              <br />
              4. Instruments: The spacecraft carries a suite of scientific
              instruments to measure various properties of the solar
              environment, including: - FIELDS: Measures electric and magnetic
              fields. - WISPR (Wide-Field Imager for Parker Solar Probe):
              Captures images of the solar corona and solar wind. - ISʘIS
              (Integrated Science Investigation of the Sun): Measures the
              properties of high-energy solar particles. - SWEAP (Solar Wind
              Electrons Alphas and Protons): Analyzes the properties of solar
              wind particles. - ISʘIS (Integrated Science Investigation of the
              Sun): Measures the properties of high-energy solar particles. -
              SWEAP (Solar Wind Electrons Alphas and Protons): Analyzes the
              properties of solar wind particles.
              <br />
              <br />
              5. Orbit: The Parker Solar Probe follows an elliptical orbit that
              takes it close to the Sun and then swings it out towards Venus.
              This trajectory allows it to gradually reduce its speed as it gets
              closer to the Sun, which is necessary to study the Sun's outer
              atmosphere effectively.
              <br />
              <br />
              6. Solar Science Firsts: The Parker Solar Probe has achieved
              several notable firsts in solar science, including providing the
              closest-ever observations of the solar corona and sending back
              data that has enhanced our understanding of solar wind
              acceleration processes.
              <br />
              <br />
              7. Mission Duration: The Parker Solar Probe is expected to operate
              for several years, making multiple close approaches to the Sun
              during its mission lifetime.
              <br />
              <br />
              8. Scientific Impact: The data collected by the Parker Solar Probe
              has already revolutionized our understanding of the Sun and its
              influence on the solar system. It has provided critical insights
              into the processes that govern space weather and has implications
              for understanding the behavior of other stars.
              <br />
              <br />
              The Parker Solar Probe is a groundbreaking mission that has pushed
              the boundaries of space exploration and significantly advanced our
              knowledge of the Sun's behavior and its impact on our solar
              system. It continues to send valuable data back to Earth,
              contributing to ongoing scientific research in heliophysics and
              space weather prediction.
              <br />
              <br />
              <img
                src="https://media.wired.com/photos/5b6c8e4477a9d822a464269e/master/w_1600%2Cc_limit/ParkerMain.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParkerProbe;
