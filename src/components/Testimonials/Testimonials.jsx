import React from 'react';
import "./Testimonials.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {
 
    return (
        <div className="testimonials" id="testimonials">
            <h3>Testimonials</h3>
            <Carousel autoPlay infiniteLoop interval={3000}>
                <div>
                    <div className="testimonial">
                        <img src="images/sundar.jpg" alt="" />
                        <h3>Sundar Pichai</h3>
                        <p>"It is Important to Follow Your Dreams and Heart. Do Something that Excites You"</p>
                    </div>
                    
                </div>
                <div>
                    <div className="testimonial">
                    <img src="images/elon.jpg" alt="" />
                    <h3>Elon Musk</h3>
                        <p>"When something is important enough, you do it even if the odds are not in your favor"</p>
                    </div>
                    
                </div>
                <div>
                    <div className="testimonial">
                    <img src="images/mark.jpg" alt="" />
                    <h3>Mark Zuckerberg </h3>
                        <p>"I think a simple rule of business is, if you do the things that are easier first, then you can actually make a lot of progress"</p>
                    </div>
                    
                </div>
               
              
            </Carousel>
            
        </div>
    );
};

export default Testimonials;