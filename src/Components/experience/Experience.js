import React from 'react';
import experienceData from './../../json/experience.json';
import './experience.scss';

const Experience = (props) => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="flex-section experience">
                    { experienceData.works.map(experience => {
                        return (
                            <div className="work-wrapper">
                                <i class="fa fa-dot-circle-o fa-lg" aria-hidden="true"></i>
                                <div className="work">
                                    <h3>{experience.company_name}</h3>
                                    <span>{experience.duration}</span>
                                    <span>{experience.description}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex-section info">
                    <h2>My Work Experience</h2>
                    <span>sdhwuegf ygf srjfg jsgr sd</span>
                    <button className="btn">
                    <i class="fa fa-download fa-lg" aria-hidden="true"></i>
                    <span>My CV</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Experience;