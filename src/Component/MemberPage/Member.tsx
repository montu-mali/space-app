import React from 'react'
import './Member.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import teamData from './MemberApi'
import montu from "../../assets/montu.jpg"
import dhrumil from "../../assets/dhrumil.jpg"
import ravindra from "../../assets/ravindra.jpg"
import avtar from "../../assets/avtar.jpg"


const Member = () => {

    const weatherLogo = (name: any) => {
        switch (name) {
            case "montu":
                return <img src={montu} alt="yuyu" />
                break;
            case "dhrumil":
                return <img src={dhrumil} alt="image" />
                break;
            case "ravindra":
                return <img src={ravindra} alt="image" />
                break;
            // case "gaurang":
            //     return <img src={ } alt="image" />
            //     break;
            // case "suresh":
            //     return <img src={ } alt="image" />
            //     break;
            // case "varnam":
            //     return <img src={ } alt="image" />
            //     break;
            default:
                return <img src={avtar} alt="image" />
                break;
        }
    }

    return (
        <>
            <div className="team_box">
                <div className="team">
                    <div className="centent_box">
                        <div className="button">Team</div>
                        <h1>Our Creative Team</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.but the majority have suffered alteration in some form.</p>
                    </div>
                    <div className="team_member">
                        <div className="members">
                            {
                                teamData.map((cur) => {
                                    return (
                                        <div className="member">
                                            <div className="image">
                                                {weatherLogo(cur.image)}
                                            </div>
                                            <div className="name">{cur.name}</div>
                                            <div className="skill">{cur.skill}</div>
                                            <p>{cur.about}</p>
                                            <div className="media_box">
                                                <ul className="icon">
                                                    <li><a className='linkedin same_icon' href={cur.LinkedInLink} target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a></li>
                                                    <li><a className='git same_icon' href={cur.git_ytLink} target="_blank" rel="noopener noreferrer"><GitHubIcon /></a></li>
                                                    <li><a className='email same_icon' href={`mailto:${cur.email}`} rel="noopener noreferrer"><AttachEmailIcon /></a></li>
                                                    <li><a className='insta same_icon' href={cur.instaLink} target="_blank" rel="noopener noreferrer"><InstagramIcon /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Member
