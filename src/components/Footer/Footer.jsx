import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
           <div className="hidden">
           <a href="https://www.facebook.com/KRKJahid"><FacebookIcon/></a>

        <a href="https://www.linkedin.com/in/khalilur-rahman-khan-034a81201/"><LinkedInIcon/></a>

        <a href="https://github.com/KhalilurRahmanKhan"><GitHubIcon/></a>
           </div>
          
           <p>Email: Khanjahid373@gmail.com</p>
            <p>Phone: 01850814547</p>
            
            <div className="last">
            <i>Copyright@KRK</i><br />
            <i>All Rights Reserved</i>
          
            </div>
            
        </div>
    );
};

export default Footer;