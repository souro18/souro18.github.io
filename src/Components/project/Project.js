import React from 'react';
import projectData from './../../json/project.json';
import './project.scss';

const Project = () => {
    return (
        <section className="container">
        <div className="wrapper flex-col">
            <h2 className="color-y section-title">My Projects</h2>
            <div className="project-wrapper d-flex">
                {
                    projectData.map(project => {
                        return (
                            <div className="project" key={project.name}>
                                <i className={`fa-lg ${project.icon}`} aria-hidden="true"></i>
                                <h2>{project.name}</h2>
                                <span>{project.description}</span>
                                <div className="action-wrapper">
                                    <a href={project.github} target="_blank" tabIndex="-1" rel="noopener noreferrer">
                                        <button>
                                            <span>Code</span>
                                            <i className="fa fa-lg fa-code" aria-hidden="true"></i>
                                        </button>
                                    </a>
                                    <a href={project.demo_url} target="_blank" tabIndex="-1" rel="noopener noreferrer">
                                        <button>
                                            <span>Live demo</span>
                                            <i className="fa fa-lg fa-external-link" aria-hidden="true"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </section>
    )
}

export default Project;