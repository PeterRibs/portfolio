import React from "react";
import "../Styles/About.scss";
import "../Styles/_buttons.scss";
import html from '../Figs/html.png';
import python from '../Figs/python.png';
import css from '../Figs/css.png';
import javascript from '../Figs/javascript.png';
import r from '../Figs/r.png';
import npm from '../Figs/npm.jpg';
import julia from '../Figs/julia.png';
import react from '../Figs/react.png';
import api from '../Figs/api.png';
import nodejs from '../Figs/nodejs.png';
import postgresql from '../Figs/Postgresql.png';
import postman from '../Figs/postman.png';
import github from '../Figs/github.png';
import figma from '../Figs/figma.jpg';

function About (){
    return (
        <section id="about" className = "color-bg">
            <div className="container">
                <h2 className="section-title">About me</h2>
                <div className="about-wrapper">
                    <div className="about-wrapper__skills">
                        <p className="title-about">Skills</p>
                        <hr></hr>
                        <div className="list-skills">
                            <img alt="Python" src={python} className='imgAbout'></img>
                            <img alt="R" src={r} className='imgAbout'></img>
                            <img alt="PostgreSQL" src={postgresql} className='imgAbout'></img>
                            <img alt="HTML5" src={html} className='imgAbout'></img>
                            <img alt="CSS3" src={css} className='imgAbout'></img>
                            <img alt="Javascript" src={javascript} className='imgAbout'></img>
                            <img alt="REACT.js" src={react} className='imgAbout'></img>
                            <img alt="Web APIs" src={api} className='imgAbout'></img>
                            <img alt="NPM" src={npm} className='imgAbout'></img>
                            <img alt="GitHub" src={github} className='imgAbout'></img>
                            <img alt="Node.js" src={nodejs} className='imgAbout'></img>
                            <img alt="Postman" src={postman} className='imgAbout'></img>
                            <img alt="Julia Programming Language" src={julia} className='imgAbout'></img>
                        </div>
                        <span className="d-flex mt-3">
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn cta-btn--resume"
                            href="https://resume.io/r/Lex4bJkTF"
                            >
                            View Resume
                            </a>
                        </span>
                    </div>
                    <div className="about-wrapper__info">
                        <p className="about-wrapper__info-text">
                            Graduated in Biology from the University of Brasília (UnB), Master's and Doctorate from the Federal University of Paraná (UFPR). During the degrees I learned how to deal with people, work in a team, write and manage projects. In addition, I worked with languages like R, Python and Julia. After this, In order to improve my programming skills, I also started studying HTML, CSS and Javascript.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
