import React from 'react';
import ReactTypingEffect from 'react-typing-effect';


const Typingeffect = () => {
    return (
        <div>
             <ReactTypingEffect
                text={["Web designer", "Web developer", "Freelancer"]}
                eraseDelay={1000}
                typingDelay={1000}
                staticText={"I'm "}
             />
        </div>
    );
};

export default Typingeffect;