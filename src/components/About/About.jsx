import React from 'react';
import "./About.css";
import Myself from "../../assets/myself.png";

const About = () => {
    return (
        <div className="about" id="about">
            <h3>About Me</h3>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L0,288L180,288L180,128L360,128L360,96L540,96L540,160L720,160L720,32L900,32L900,192L1080,192L1080,32L1260,32L1260,224L1440,224L1440,0L1260,0L1260,0L1080,0L1080,0L900,0L900,0L720,0L720,0L540,0L540,0L360,0L360,0L180,0L180,0L0,0L0,0Z"></path></svg> */}

            
            <div className="pic">
                <img src={Myself} alt="" />
            </div>
            <div className="details">
                <h3>Khalilur Rahman Khan</h3>
                <p> I’ve been working as a Web Developer for a long period , and during that time I’ve revamped web security applications, designed and developed a user-friendly website. I worked at Halcyon as a Web Developer Inter also.This professional experience has helped me improve my skills , allowed me to gain mastery over necessary development tools, and provided me with extensive knowledge of how to design a user friendly, secure website.I believe my skill set will benefit you and your company, so I am looking forward to working with you.</p>
                
            </div>
        </div>
    );
};

export default About;