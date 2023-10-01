import React from 'react'
import "./Home.scss"

const Home = () => {
    return (<>

        <div className="home-box">
            <div className="intro">
                <div className="intro-box">
                    <div className="content">
                        <h1>ViewSpace</h1>
                        <p>EXPLORE THE UNIVERSE WITH INTERACTIVES AND VIDEOS</p>
                    </div>
                </div>
            </div>
            <div className="overview">
                <h2>Over View</h2>
                <p>ViewSpace is a free, web-based collection of digital interactives and videos highlighting the latest developments in astronomy and Earth science.</p>
                <div className="video-box">
                    <video src=""  controls></video>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home