import React from 'react';
import "./Topbar.css";
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';


const Topbar = ({menu,setMenu}) => {
    return (
        <div className="topbar">
            <div className="left">
                <a href="#home">KRK</a>
                <div className="info">
                <MailOutlineIcon className="logo" /> <p className="information">khanjahid373@gmail.com</p>
                </div>
                <div className="info">
                <PhoneIcon className="logo"/> <p className="information">+8801755874587</p>
                </div>
               
            </div>
            <div className="right" onClick={() => setMenu(!menu) }>
                   <MenuRoundedIcon/>
     
            </div>
        </div>
    );
};

export default Topbar;