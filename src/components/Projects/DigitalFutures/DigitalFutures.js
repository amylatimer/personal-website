import React from 'react';
import './DigitalFutures.scss';
import Collapsible from 'react-collapsible';

import desk from '../../../assets/images/digitalFutures/df-desk.svg';

class DigitalFutures extends React.Component {
    state = {}
    render() {
        return (
            <section className="project project--df">
                <div className="project__container">
                    <div className="project__image-container">
                        <img className="project__image--desk" src={desk} alt="" />
                        {/* <img className="project__image--tablet" src={} alt="" /> */}
                    </div>
                    <div className="project__text-container">
                        <h1 className="project__title project__text">Digital Futures</h1>
                        <h2 className="project__type project__text">Static Website</h2>
                        <Collapsible trigger="Description">
                            <p>Short Description about the hackathon day </p>
                        </Collapsible>
                        <Collapsible trigger="Technologies Used">
                            <p>React, SCSS</p>
                        </Collapsible>
                        <a href="https://bstn-3d-fall-2019-team-1.netlify.com/" target="blank" >
                            <button className="project__demo-button project--df__demo-button">Demo</button>
                        </a>

                    </div>
                </div>

            </section>

        );
    }
}

export default DigitalFutures;