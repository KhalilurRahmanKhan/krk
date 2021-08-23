import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import TimelineIcon from '@material-ui/icons/Timeline';
import WorkIcon from '@material-ui/icons/Work';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import ContactsIcon from '@material-ui/icons/Contacts';

const Sidebar = ({menu ,setMenu}) => {
   
    return (
        <div className={"sidebar " + (menu && 'active')}>
            <ul>
               <li onClick={() => setMenu(!menu)}><a href="#home" > <HomeIcon/> </a></li>
                <li onClick={() => setMenu(!menu)}><a href="#about" > <PersonIcon/> </a></li>
                <li onClick={() => setMenu(!menu)}><a href="#skills"> <CastForEducationIcon/> </a></li>
                <li onClick={() => setMenu(!menu)}><a href="#resume"> <TimelineIcon/> </a></li>
                <li onClick={() => setMenu(!menu)}><a href="#portfolio"> <WorkIcon/> </a></li>
                <li onClick={() => setMenu(!menu)}><a href="#services"> <RoomServiceIcon/> </a></li>
                <li onClick={() => setMenu(!menu)}><a href="#testimonials"> <SpeakerNotesIcon/> </a></li>
                <li onClick={() => setMenu(!menu)}><a href="#contact"> <ContactsIcon/> </a></li>
            </ul>
        </div>
    );
};

export default Sidebar;