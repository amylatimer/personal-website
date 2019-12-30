import React from 'react';
import './TicksSuck.scss';
import Collapsible from 'react-collapsible';

import desk from '../../../assets/images/ticksSuck/ts-desk.svg';

class TicksSuck extends React.Component {
    state = {}
    render() {
        return (
            <section className="project">
                <div className="project__container">
                    <div className="project__image-container">
                        <img className="project__image--desk" src={desk} alt="" />
                        {/* <img className="project__image--tablet" src={} alt="" /> */}
                    </div>
                    <div className="project__text-container">
                        <h1 className="project__title project__text">Ticks Suck</h1>
                        <h2 className="project__type project__text">Website</h2>
                        <Collapsible trigger="Description">
                            <p>This application aims to educate users about Lyme Disease in Canada.
                                An interactive map connects users to resources such as
                                health care providers and local support groups, and a
                                dynamic risk assessment tool fetches live data based on
                                user inputs to determine how high their exposure levels are
                                to ticks in their area. </p>
                        </Collapsible>
                        <Collapsible trigger="Technologies Used">
                            <p>React, SCSS, Node, Express, Axios, React Router, Dark Sky API</p>
                        </Collapsible>
                        <a href="">
                            <button className="project__demo-button">Demo</button>
                        </a>

                    </div>
                </div>

            </section>

        );
    }
}

export default TicksSuck;