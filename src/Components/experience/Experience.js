import React from 'react';
import experienceData from './../../json/experience.json';
import './experience.scss';

const Experience = () => {
    return (
        <section className="container">
            <div className="wrapper">
                <div className="flex-section experience flex-1">
                    { experienceData.works.map(experience => {
                        return (
                            <div className="work-wrapper" key={experience.company_name}>
                                <span className="duration">{experience.duration}</span>
                                <div className="d-flex timeline">
                                <i className="fa fa-dot-circle-o fa-lg" aria-hidden="true"></i>
                                <div className="vertical-line"></div>
                                    </div>
                                <div className="work">
                                    <h3 className="color-y">{experience.company_name}</h3>
                                    <em>{experience.designation}</em>
                                    <span>{experience.description}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex-section info flex-1">
                    <h2 className="color-y">My Work Experience</h2>
                    <span>sdhwuegf ygf srjfg jsgr sd</span>
                    <button className="btn">
                    <i className="fa fa-download fa-lg" aria-hidden="true"></i>
                    <span>Download My CV</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Experience;