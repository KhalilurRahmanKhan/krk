import React from 'react';
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Timeline from "./components/Timeline/Timeline";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useState } from 'react';

const App = () => {
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

export default App;
