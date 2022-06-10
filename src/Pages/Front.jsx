import React, { useState } from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Intro from '../components/Intro/Intro';
import Portfolio from '../components/Portfolio/Portfolio';
import Services from '../components/Services/Services';
import Sidebar from '../components/Sidebar/Sidebar';
import Skills from '../components/Skills/Skills';
import Testimonials from '../components/Testimonials/Testimonials';
import Timeline from '../components/Timeline/Timeline';
import Topbar from '../components/Topbar/Topbar';

const Front = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div>
    <Topbar menu={menu} setMenu={setMenu}/>
     <Sidebar menu={menu} setMenu={setMenu}/>
     <Intro/>
     <About/>
     <Skills/>
     <Timeline/>
     <Portfolio/>
     <Services/>
     <Testimonials/>
     <Contact/>
     <Footer/>
        </div>
    );
};

export default Front;