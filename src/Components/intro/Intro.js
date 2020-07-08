import React from 'react';
import './intro.scss';
import introImage from '../../img/coder-shoot.jpg';

const Intro = () => {
    return (
        <section id="intro">
            <img className="full-screen back-img" src={introImage} alt='coder image' />
                <div className="full-screen intro-wrapper">
                    <div className="intro-details">
                        <h2>Hello!</h2>
                        <h1>I'm Sourajit Paul</h1>
                        <h3>Front-End Web Developer</h3>
                    </div>
                </div>
        </section>
    );
};

export default Intro;