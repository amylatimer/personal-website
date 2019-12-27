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
                        {/* <p className="project__info project__text">Short Description of the project</p> */}
                        {/* <p className="project__tech project__text">React, SCSS, Node, Express, Axios, React Router, Dark Sky API</p> */}
                        <Collapsible trigger="Description">
                            <p>This is a short Project Description.</p>
                        </Collapsible>
                        <Collapsible trigger="Technologies Used">
                            <p>React, SCSS, Node, Express, Axios, React Router, Dark Sky API</p>
                        </Collapsible>

                    </div>
                </div>

            </section>

        );
    }
}

export default TicksSuck;