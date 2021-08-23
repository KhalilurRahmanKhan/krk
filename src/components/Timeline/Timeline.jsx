import React from 'react';
import "./Timeline.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import resume from "./resume.pdf";



const Timeline = () => {
   
    return (
        <div className="timeline" id="resume">
            <h3>Resume</h3>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fill-opacity="1" d="M0,32L40,58.7C80,85,160,139,240,176C320,213,400,235,480,208C560,181,640,107,720,64C800,21,880,11,960,26.7C1040,43,1120,85,1200,101.3C1280,117,1360,107,1400,101.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> */}
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#5F6368', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #5F6368' }}
                    date="2020(October)-2021(January)"
                    iconStyle={{ background: '#5F6368', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Web Developer Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Halcyon</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#1E1E1E', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #1E1E1E' }}
                    date="2017 - 2020(Fall)"
                    iconStyle={{ background: '#1E1E1E', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Computer Science & Engineering </h3>
                    <h4 className="vertical-timeline-element-subtitle">International University of Business Agriculture and Technology</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                     className="vertical-timeline-element--work"
                    contentStyle={{ background: '#5F6368', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #5F6368' }}
                    date="2014-2016"
                    iconStyle={{ background: '#5F6368', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Higher Secondary school Certificate</h3>
                    <h4 className="vertical-timeline-element-subtitle">Abdul Kadir Molla City College</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                   className="vertical-timeline-element--work"
                    contentStyle={{ background: '#1E1E1E', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #1E1E1E' }}
                    date="Passing year 2014"
                    iconStyle={{ background: '#1E1E1E', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Secondary School Certificate</h3>
                    <h4 className="vertical-timeline-element-subtitle">Sir K.G. Gupta High School</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
              
                
               
            </VerticalTimeline>

            <a href={resume} class="myButton" download="Khalilur Rahman Khan" >Download Resume</a>
            
        </div>
        
    );
};

export default Timeline;