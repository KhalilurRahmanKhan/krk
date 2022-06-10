import React from 'react';
import "../Intro/Intro.css"
import Typingeffect from "../Typingeffect/Typingeffect";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import resume from "./Khalilur Rahman Khan.pdf";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Intro = () => {
   
    return (
       
        <div className="intro" id="home">
            <div className="mid">
            <h1>Khalilur Rahman Khan</h1>
            <h3><Typingeffect/></h3><br />
            
            <a href="https://www.facebook.com/KRKJahid"><FacebookIcon/></a>
            <a href="https://www.linkedin.com/in/khalilur-rahman-khan-034a81201/"><LinkedInIcon/></a>
            <a href="https://github.com/KhalilurRahmanKhan"><GitHubIcon/></a><br />

            {/* <a href="#contact" class="myButton1">Contact me</a> */}
            <a href={resume} class="myButton" download="Khalilur Rahman Khan" >Download Resume</a>
            <br />
            <a href="#about"><KeyboardArrowDownIcon/></a>

           

               
               
            </div>   
        </div>
       
    );
};

export default Intro;