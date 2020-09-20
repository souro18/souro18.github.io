import React from 'react';
import selfImage from '../../asset/img/self.jpg';
import skillsData from '../../json/skills.json'

import './about.scss';
const About = () => {
    return (
        <section className="container">
            <div className="wrapper">
                <div className="flex-section flex-1">
                    <img src={selfImage} className="img-responsive" id ="self-image" alt=""/>
                </div>
                <div className="flex-section flex-2">
                    <h2 className='color-y section-title'>About Me</h2>
                    <span>Quick learner,Passionate about coding,Love to learn new technologies </span>
                    <div className="skill-wrapper">
                        {skillsData.map(skill => {
                            return (
                                <div className="skill" key={skill.name}>
                                    <div className="skill-title">
                                        <span>{skill.name}</span>
                                        <span className="color-y">{skill.level}</span>
                                    </div>
                                    <div className="progress-bar">
                                        <div className="progress" style={{ width: skill.level }} ></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;