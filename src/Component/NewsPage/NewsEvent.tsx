import React from 'react'
import "./NewsEvent.scss"
import eclips from "../../assets/imgs/eclips-img.jpg";

const NewsEvent = () => {
  return (
    <>
      <div className='flex_cards'>
        <div className="card">
          <img className="card-img-top" src={eclips} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">The Eclips</h5>
            <p className="card-text">
              On Saturday, October 7th, from 11:00 a.m. to 2:00 p.m., the LaSalle Public Library will be hosting NASA Solar System Ambassadors, James Joel Knapper and Scott Pellican, at Catlin Park in Ottawa, Illinois, for a Sun Party to celebrate the upcoming Annular Eclipse on October 14th and the Total Solar Eclipse in April of 2024
            </p>
            <a href="https://solarsystem.nasa.gov/events/234/get-ready-for-the-eclipse/?category=eclipses_general" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="https://www.exploratorium.edu/sites/default/files/2023-01/annular_see_ground1%20copy.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">October 14th Annular Solar Eclipse</h5>
            <p className="card-text">
              Get ready for the upcoming annular solar eclipse on Oct. 14 and next year’s total solar eclipse! At 7 p.m. EDT on Tuesday, October 10, join this professional development webinar to learn about the Sun, Earth, Moon system and the mechanics of how and why eclipses occur.
            </p>
            <a href="https://solarsystem.nasa.gov/events/245/bringing-the-october-14th-annular-solar-eclipse-into-the-classroom-webinar/?category=eclipses_general" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="https://i.natgeofe.com/n/afed8e9e-e199-4f29-a4a2-846ea2ebe432/albuquerque-balloon-festival-new-mexico_3x2.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Albuquerque Balloon Fiesta</h5>
            <p className="card-text">
              Join NASA at the Albuquerque International Balloon Fiesta in Albuquerque, NM, for a celebration of the annular eclipse!
              NASA experts will be on-site in Albuquerque to engage with the public and share the ways NASA studies the Sun and uses that information to understand its impact on Earth.
            </p>
            <a href="https://solarsystem.nasa.gov/events/234/get-ready-for-the-eclipse/?category=eclipses_general" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="https://radseason.com/wp-content/uploads/2017/06/Best-Solar-Eclipse-Festivals-in-the-US.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Annular Eclipse Festival</h5>
            <p className="card-text">
              The Rory Meyers Children's Adventure Garden will be exploring outer space! Join us to view a deep partial eclipse (when the Moon will cover about 80% of the Sun) on Saturday, October 14, from 10am-2pm.
              Can't join us for the eclipse itself? Stop by Thursday,
            </p>
            <a href="https://solarsystem.nasa.gov/events/214/annular-eclipse-festival-community-event/?category=eclipses_general" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="https://www.telegram.com/gcdn/authoring/2015/10/19/NTEG/ghows-WT-22414e51-c99c-184a-e053-0100007f3762-f2824543.jpeg?width=660&height=449&fit=crop&format=pjpg&auto=webp" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">GEEK IS GLAM</h5>
            <p className="card-text">
              Bruce Card, a NASA Solar System Ambassador, will offer a one hour and 15-minute workshop on astrophotography.
              Jim Zebrowski and Aldrich Astronomical Society volunteers will manage a display table throughout the day starting at noon
            </p>
            <a href="https://solarsystem.nasa.gov/events/251/geek-is-glam/?category=eclipses_general" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="https://www.kerrvilletx.gov/ImageRepository/Document?documentID=39519" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Kerrville River Festival</h5>
            <p className="card-text">
              Join NASA at Kerrville RiverFest at Louise Hays Park in Kerrville, TX, for a celebration of the annular eclipse!
              NASA experts will be on-site in Kerrville to engage with the public and share the ways NASA studies the Sun and uses that information to understand its impact
            </p>
            <a href="https://solarsystem.nasa.gov/events/234/get-ready-for-the-eclipse/?category=eclipses_general" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>



    

    </>
  );
};

export default NewsEvent;