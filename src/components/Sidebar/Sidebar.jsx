import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = ({menu ,setMenu}) => {
   
    return (
        <div className={"sidebar " + (menu && 'active')}>
            <ul>
               <li onClick={() => setMenu(!menu)}><a href="http://krkjahid.herokuapp.com/#home" > Home </a></li>
               <li onClick={() => setMenu(!menu)}><Link to="http://krkjahid.herokuapp.com/blog" > Blog </Link></li>
                <li onClick={() => setMenu(!menu)}><a href="http://krkjahid.herokuapp.com/#about" > About </a></li>
                <li onClick={() => setMenu(!menu)}><a href="http://krkjahid.herokuapp.com/#skills"> Skills </a></li>
                <li onClick={() => setMenu(!menu)}><a href="http://krkjahid.herokuapp.com/#resume"> Resume </a></li>
                <li onClick={() => setMenu(!menu)}><a href="http://krkjahid.herokuapp.com/#portfolio"> Portfolio </a></li>
                <li onClick={() => setMenu(!menu)}><a href="http://krkjahid.herokuapp.com/#services"> Services </a></li>
                <li onClick={() => setMenu(!menu)}><a href="http://krkjahid.herokuapp.com/#testimonials"> Testimonials </a></li>
                <li onClick={() => setMenu(!menu)}><a href="http://krkjahid.herokuapp.com/#contact"> Contact </a></li>
            </ul>
        </div>
    );
};

export default Sidebar;