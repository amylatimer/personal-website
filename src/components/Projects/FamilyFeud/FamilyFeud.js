import React from 'react';
import './FamilyFeud.scss';
import Collapsible from 'react-collapsible';

import tablet from '../../../assets/images/familyFeud/ff-tablet.svg';

class FamilyFeud extends React.Component {
    state = {}
    render() {
        return (
            <section className="project project--ff">
                <div className="project__container">
                    <div className="project__image-container">
                        {/* <img className="project__image--desk" src={desk} alt="" /> */}
                        <img className="project__image--tablet" src={tablet} alt="" />
                    </div>
                    <div className="project__text-container">
                        <h1 className="project__title project__text">Family Feud</h1>
                        <h2 className="project__type project__text"> SPA Game</h2>
                        <Collapsible trigger="Description">
                            <p>
                                Family Feud was a pair programming project,
                                where we were given five hours to create a game that a user can play on the browser.
                            </p>
                        </Collapsible>
                        <Collapsible trigger="Technologies Used">
                            <p>React, SCSS, Node, Express, Axios, React Router</p>
                        </Collapsible>
                        {/* <a href="www.google.ca" target="blank" >
                            <button className="project__demo-button project--ff__demo-button">Demo</button>
                        </a> */}

                    </div>
                </div>

            </section>

        );
    }
}

export default FamilyFeud;