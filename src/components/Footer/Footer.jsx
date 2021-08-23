import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
           
            <a href="https://www.facebook.com/KRKJahid"><FacebookIcon/></a>

            <a href="https://www.linkedin.com/in/khalilur-rahman-khan-034a81201/"><LinkedInIcon/></a>

            <a href="https://github.com/KhalilurRahmanKhan"><GitHubIcon/></a>

            <p>Copyright@KRK</p>
            <i>All Rights Reserved</i>
          
        </div>
    );
};

export default Footer;