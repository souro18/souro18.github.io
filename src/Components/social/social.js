import React from 'react';
import './social.scss';

import socialData from './../../json/social.json'

const Social = () => {
    return (
        <section className="container">
        <div className="wrapper flex-col">
            <h2 className="color-y section-title">Let's Connect</h2>
            <div className="social-wrapper d-flex">
                {
                    socialData.map(social => {
                        return (
                            <a className="social" key={social.name} href={social.link} target="_blank">
                                <span>{social.name}</span>
                                <i className={`fa fa-lg ${social.icon}`} aria-hidden="true"></i>
                            </a>
                        )
                    })
                }
            </div>
        </div>
        </section>
    );
};

export default Social;