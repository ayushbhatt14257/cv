import React from 'react'
import Mobile from '../../assests/mobile.png'
import Mail from '../../assests/mail.png'
import Website from '../../assests/website.png'
import Location from '../../assests/location.png'
import Linkedin from '../../assests/linkedin.png'
import Cv from '../../assests/cv.png'
import Nationality from '../../assests/nationality.png'
import Birthdate from '../../assests/birthdate.png'
import Bcircle from '../../assests/Black circle.png'
import Gcircle from '../../assests/Gray Circle.png'
import profile from '../../assests/profile.jpg'
// import shape1 from '../../assests/shape1.png'
import './page1.css'

const page1 = () => {
    return (
        <>
            <section>
                <div className="main_container">

                    <div className="container page1_container">
                        <div className="page1_left">
                            <div className="img">
                                <img src={profile} alt="" />
                            </div>
                            <div className="contact">
                                <h1>Contact</h1>
                                <div className="contact_detail">
                                    <img src={Mobile} alt="" />
                                    <p>+91-855-570-4521</p>
                                </div>
                                <div className="contact_detail">
                                    <img src={Mail} alt="" />
                                    <p>devonlane@gmail.com</p>
                                </div>
                                <div className="contact_detail">
                                    <img src={Website} alt="" />
                                    <p>www.devonlane.com</p>
                                </div>
                                <div className="contact_detail">
                                    <img src={Location} alt="" />
                                    <p>52 Reservoir Singapore</p>
                                </div>
                                <div className="contact_detail">
                                    <img src={Linkedin} alt="" />
                                    <p>www.example1.com</p>
                                </div>
                                <div className="contact_detail">
                                    <img src={Cv} alt="" />
                                    <p>www.example2.com</p>
                                </div>
                                <div className="contact_detail">
                                    <img src={Nationality} alt="" />
                                    <p>Indian</p>
                                </div>
                                <div className="contact_detail">
                                    <img src={Birthdate} alt="" />
                                    <p>Jan 15, 1996</p>
                                </div>
                            </div>

                            <div className="skills">
                                <h1>Skills</h1>
                                <div className="skills_list">
                                    <h2>Skill 1</h2>
                                    <div className="skills_circle">
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Gcircle} alt="" />
                                        <img src={Gcircle} alt="" />
                                        <img src={Gcircle} alt="" />
                                    </div>
                                </div>
                                <div className="skills_list">
                                    <h2>Skill 2</h2>
                                    <div className="skills_circle">
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Gcircle} alt="" />
                                    </div>
                                </div>
                                <div className="skills_list">
                                    <h2>Skill 3</h2>
                                    <div className="skills_circle">
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Gcircle} alt="" />
                                        <img src={Gcircle} alt="" />
                                    </div>
                                </div>
                                <div className="skills_list">
                                    <h2>Skill 4</h2>
                                    <div className="skills_circle">
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Gcircle} alt="" />
                                        <img src={Gcircle} alt="" />
                                        <img src={Gcircle} alt="" />
                                    </div>
                                </div>
                                <div className="skills_list">
                                    <h2>Skill 5</h2>
                                    <div className="skills_circle">
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Gcircle} alt="" />
                                    </div>
                                </div>
                                <div className="skills_list">
                                    <h2>Skill 6</h2>
                                    <div className="skills_circle">
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Bcircle} alt="" />
                                        <img src={Gcircle} alt="" />
                                        <img src={Gcircle} alt="" />
                                        <img src={Gcircle} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="page1_right">
                            <div className="right_heading">
                                <h1>DEVON LANE</h1>
                                <h3>graphic designer</h3>
                            </div>
                            <div className="profile">
                                <h1>Profile</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.Lorem ipsudolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                            </div>
                            <div className="education">
                                <h1>Education</h1>
                                <div className="education_info">
                                    <p>Jun 2019 - Jun 2020</p>
                                    <h2>Masters in Graphic Design</h2>
                                    <p>University of Chicago | City | Country</p>
                                    <ul>
                                        <li> Lorem ipsum sitdolor sit ipsum amet, consectetur adipiscing elit.</li>
                                    </ul>
                                </div>

                                <div className="education_info">
                                    <p>Jun 2019 - Jun 2020</p>
                                    <h2>Masters in Graphic Design</h2>
                                    <p>University of Chicago | City | Country</p>
                                    <ul>
                                        <li> Lorem ipsum sitdolor sit ipsum amet, consectetur adipiscing elit.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="achivements">
                                <h1>Achivements</h1>
                                <div className="achivements_info">
                                    <ul>
                                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquea commodo consequat veniam, quis.</li>
                                        <li> Ut enim ad minim veniam, quis nostrud.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page1