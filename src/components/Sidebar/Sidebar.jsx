import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = ({menu ,setMenu}) => {
   
    return (
        <div className={"sidebar " + (menu && 'active')}>
            <ul>
               <li onClick={() => setMenu(!menu)}><a href="#home" > Home </a></li>
               <li onClick={() => setMenu(!menu)}><Link to="blog" > Blog </Link></li>
                <li onClick={() => setMenu(!menu)}><a href="#about" > About </a></li>
                <li onClick={() => setMenu(!menu)}><a href="#skills"> Skills </a></li>
                <li onClick={() => setMenu(!menu)}><a href="#resume"> Resume </a></li>
                <li onClick={() => setMenu(!menu)}><a href="#portfolio"> Portfolio </a></li>
                <li onClick={() => setMenu(!menu)}><a href="#services"> Services </a></li>
                <li onClick={() => setMenu(!menu)}><a href="#testimonials"> Testimonials </a></li>
                <li onClick={() => setMenu(!menu)}><a href="#contact"> Contact </a></li>
            </ul>
        </div>
    );
};

export default Sidebar;