import React from 'react';
import './TicksSuck.scss';

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
                        <h1 className="project__title">Ticks Suck</h1>
                        <h2 className="project__type">Website</h2>
                        <p className="project__info">Short Description of the project</p>
                        <p className="project__tech">React, SCSS, Node, Express, Axios, React Router, Dark Sky API</p>

                    </div>
                </div>

            </section>

        );
    }
}

export default TicksSuck;