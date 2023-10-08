import React from 'react'
import "./Home.scss"
import { Link, NavLink } from 'react-router-dom'
import Member from '../MemberPage/Member'
import homeimge from '../../assets/home page 2.png'
// import video from "../../assets/video.mp4"

const Home = () => {
    return (<>

        <div className="home-box">
            <div className="intro">
                <div className="intro-box">
               <img src={homeimge} alt=""/>
                </div>
            </div>
            <div className="overview">
                <h2>Over View</h2>
                <p>ViewSpace is a free, web-based collection of digital interactives and videos highlighting the latest developments in astronomy and Earth science.</p>
                <div className="video-box">
                <iframe  className="video"width="1000" height="500" src="https://www.youtube.com/embed/jR6wA0qv5NA?si=Sdz8BRVVEASWr5Nx" title="YouTube video player" allowFullScreen  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
            </div>
        </div>


{/* {-----------Member------------ */}

        <Member/>
    </>
    )
}

export default Home