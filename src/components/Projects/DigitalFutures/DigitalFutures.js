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
                            <p>Digital Futures was built as part of a one-day hackathon at BrainStation.
                                We were challenged to collaborate with fellow students from both their UX Design
                                and Data Science programs to build a webpage that visualized insights from a set of
                                data and was designed to communication information to a target demographic.
                            </p>
                            <p> Overall,
                                we had less than seven hours to design and create an informational and interactive
                                webpage and presented it to our peers at the end of the day.
                            </p>
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