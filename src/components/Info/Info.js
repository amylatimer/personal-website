import React from 'react';
import './Info.scss';

import linkedinIcon from '../../assets/icons/linkedin.svg';
import githubIcon from '../../assets/icons/github.svg';
import userIcon from '../../assets/icons/user.svg';


//import doc from '../../assets/files/amy_latimer_website_resume.pdf'

class Info extends React.Component {
    state = {}
    render() {
        return (
            <section className="info-section">
                <div className="info-section__container">
                    <div className="info-section__text-container">
                        <h1 className="info-section__title">
                            Developer.
                            Thinker.
                            Maker.

                        </h1>
                        <p className="info-section__text">A <span className="bold">full-stack Web Developer </span>
                            from Toronto,
                            driven by a desire to enhance our
                            experience with the internet and how we
                            communicate.
                        </p>
                        <div className="info-section__icon-wrapper">
                            <a href="https://linkedin.com/in/amy-latimer" target="blank">
                                <span title="LinkedIn">
                                    <img className="info-section__icon" src={linkedinIcon} alt="linkedin logo" />
                                </span>

                            </a>
                            <a href="https://github.com/amylatimer" target="blank">
                                <span title="GitHub">
                                    <img className="info-section__icon" src={githubIcon} alt="github logo" />
                                </span>
                            </a>
                            <a href="https://drive.google.com/file/d/16IwnhrJzF9-woNcTwXepVxWIu52ZHtVv/view?usp=sharing" target="blank">
                                <span title="Resume">
                                    <img className="info-section__icon" src={userIcon} alt="outline of person" />
                                </span>
                            </a>

                        </div>
                        <a href="mailto:hello@amylatimer.com">
                            <button className="info-section__button">Say Hello!</button>
                        </a>

                    </div>
                </div>
            </section>
        );
    }
}

export default Info;