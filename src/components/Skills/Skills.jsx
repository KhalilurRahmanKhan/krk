import React from 'react';
import { SkillBar } from 'react-skills';
import "./Skills.css";

const Skills = () => {
    return (
        <div className="full" id="skills">
            <h3>Skills</h3>
        <div className="skills">
            <SkillBar name="HTML" level={90} color="#5F6368" /><br />
            <SkillBar name="CSS" level={80} color="#1E1E1E" /><br />
            <SkillBar name="JavaScript" level={60} color="#5F6368" /><br />
            <SkillBar name="jQuery" level={70} color="#1E1E1E" /><br />
            <SkillBar name="ReactJS" level={50} color="#5F6368" /><br />
            <SkillBar name="PHP" level={60} color="#1E1E1E" /><br />
            <SkillBar name="Laravel" level={60} color="#5F6368" />
        </div>
        </div>
    );
};

export default Skills;