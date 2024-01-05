import React from "react";
import "./SolarE.scss";
import se from "../../assets/imgs/se7.png";
import se3 from "../../assets/imgs/se8.jpg";

const SolarE = () => {
  return (
    <>
      <div className="parker_box">
        <div className="parkerP">
          <div className="image_box">
            <img src={se} alt="" className="img" />
          </div>
          <div className="text_box">
            <h1 className="header">Overview</h1>
            <div className="text_content">
              <p>
                A solar eclipse is a captivating celestial event that occurs
                when the moon passes between the Earth and the Sun, momentarily
                obscuring the Sun's light. This phenomenon is a result of the
                precise alignment of these three celestial bodies, creating a
                breathtaking display in the daytime sky.
              </p>
              <p>
                <b>Phases of a Solar Eclipse:</b>
                <br />
                <br />
                1. Partial Eclipse: At the onset of a solar eclipse, the moon
                slowly begins to move in front of the Sun. This gradual blocking
                of sunlight creates a partial eclipse, where a portion of the
                Sun remains visible as a crescent.
                <br />
                <br />
                2. Total Eclipse: As the moon continues its journey across the
                solar disk, a point is reached when the Sun is completely
                obscured by the moon. This phase is known as a total solar
                eclipse, and it is one of the most remarkable natural
                spectacles. During a total eclipse, the sky darkens to twilight,
                stars become visible, and the Sun's outer atmosphere, the solar
                corona, is revealed as a delicate halo of light surrounding the
                blackened disk of the moon. The total eclipse lasts for only a
                few minutes, but it leaves a lasting impression on those
                fortunate enough to witness it.
                <br />
                <br />
                3. Annular Eclipse: In some cases, the moon is positioned
                farther from Earth in its elliptical orbit, making it appear
                slightly smaller in the sky. When the moon covers the Sun but
                doesn't completely block it, a ring-like effect, known as the
                "ring of fire," is seen around the edges of the moon. This type
                of eclipse is referred to as an annular eclipse.
              </p>
              <p>
                <b>The Mechanics Behind a Solar Eclipse:</b>
                <br />
                <br />
                - The Sun, located approximately 93 million miles from Earth,
                provides the primary source of light and heat for our planet.
                <br />
                <br />
                - The Moon orbits Earth at an average distance of about 238,900
                miles. Its orbital path occasionally intersects with the
                imaginary line connecting the Earth and the Sun, called the
                "ecliptic plane."
                <br />
                <br />
                - A solar eclipse happens when the moon aligns itself perfectly
                with the Sun and Earth, creating a straight-line configuration
                known as "syzygy."
                <br />
              </p>

              <p>
                <b>Safety Precautions:</b>
                <br />
                <br />
                It's crucial to emphasize that observing a solar eclipse
                directly with the naked eye can be extremely dangerous, as the
                intense solar radiation can cause severe eye damage or
                blindness. Safe viewing methods, such as solar viewing glasses
                or solar filters for telescopes and cameras, must be used to
                protect your eyes when witnessing this celestial event.
                <br />
              </p>
              <p>
                <b>Cultural Significance:</b>
                <br />
                <br />
                Throughout history, solar eclipses have held great cultural
                significance and have been interpreted in various ways by
                different societies. Many ancient cultures regarded solar
                eclipses as omens or celestial events of great importance, often
                linked to mythological narratives. In modern times, solar
                eclipses continue to captivate and inspire people worldwide.
                They serve as reminders of the vastness and wonder of our
                universe, bringing people together to marvel at the beauty of
                the cosmos.
                <br />
              </p>
              <p>
                <b>Path of Totality:</b>
                <br />
                <br />
                The path of totality for a total solar eclipse is a relatively
                narrow band that stretches across the Earth's surface. The width
                of this path can vary from one eclipse to another. Observers
                located within the path of totality experience the full
                spectacle of the total eclipse, including the temporary darkness
                and the dramatic appearance of the solar corona. Planning and
                traveling to the path of totality is a common practice among
                eclipse enthusiasts, known as "eclipse chasers."
                <br />
              </p>

              <p>
                <b>Upcoming Eclipses:</b>
                <br />
                <br />
                Solar eclipses occur at various locations around the world at
                different times. You can find information about upcoming
                eclipses, including dates and locations, through astronomical
                organizations, websites, and apps dedicated to eclipse tracking.
                Solar eclipses remain a captivating and awe-inspiring
                phenomenon, offering a unique opportunity to connect with the
                wonders of our universe and the precision of celestial
                mechanics. They continue to inspire both amateur and
                professional astronomers, as well as the general public, as they
                marvel at the beauty and grandeur of our solar system.
              </p>

              <img src={se3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolarE;
