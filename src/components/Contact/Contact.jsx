import React from 'react';
import "./Contact.css"
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {

    const [msg,setMsg] = useState("");

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_soeluyp', 'template_o10neec', e.target, 'user_hUriYfpRBIE4YNyyv6WTM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();

          setMsg("Msg has been sent!!!");

          setTimeout(() => {
            setMsg("");
        }, 3000);
      }

    return (
        
      //   <form className="contact-form" onSubmit={sendEmail}>
      //   <input type="hidden" name="contact_number" />
      //   <label>Name</label>
      //   <input type="text" name="user_name" /><br />
      //   <label>Email</label>
      //   <input type="email" name="user_email" />
      //   <label>Message</label>
      //   <input type="text" name="message" />  
      //   <input type="submit" value="Send" />
      //   {msg}
      // </form>  
      
<div className="container" id="contact">
  <h3>Contact Me</h3>
  <form onSubmit={sendEmail}>
    <label for="user_name">Name</label>
    <input type="text" id="user_name" name="user_name" placeholder="Your name" required/>

    <label for="user_email">Email</label>
    <input type="email" id="user_email" name="user_email" placeholder="Your email" required/>

    <label for="message">Message</label>
    <textarea id="message" name="message" placeholder="Write your message" required></textarea>

    <input type="submit" value="Submit"/><br /><br />
    {msg}
  </form>
  </div>
        
      
        
    
    );
};

export default Contact;