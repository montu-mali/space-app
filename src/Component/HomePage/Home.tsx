import React from 'react'
import "./Home.scss"
import { Link, NavLink } from 'react-router-dom'
import Member from '../MemberPage/Member'
// import video from "../../assets/video.mp4"

const Home = () => {
    return (<>

        <div className="home-box">
            <div className="intro">
                <div className="intro-box">
                    <div className="content">
                        <h1>ViewSpace</h1>
                        <p>EXPLORE THE UNIVERSE WITH INTERACTIVES AND VIDEOS</p>
                    </div>
                    {/* <NavLink to=''></NavLink> */}
                    <Link to="/home"></Link>
                </div>
            </div>
            <div className="overview">
                <h2>Over View</h2>
                <p>ViewSpace is a free, web-based collection of digital interactives and videos highlighting the latest developments in astronomy and Earth science.</p>
                <div className="video-box">
                    <video src="../../assets/video.mp4"  controls></video>
                </div>
            </div>
        </div>


{/* {-----------Member------------ */}

        <Member/>
    </>
    )
}

export default Home