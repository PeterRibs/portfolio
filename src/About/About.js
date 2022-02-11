import React from "react";
import "../Styles/About.scss";
import "../Styles/_buttons.scss";

function About (){
    return (
        <section id="about" className = "color-bg">
            <div className="container">
                <h2 className="section-title">About me</h2>
                <div className="about-wrapper">
                    <div className="about-wrapper__skills">
                        <p className="title-about">Skills</p>
                        <hr></hr>
                        <ul className="list-skills">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Web APIs</li>
                            <li>NPM</li>
                            <li>REACT</li>
                            <li>GitHub</li>
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                            <li>Postman</li>
                            <li>R</li>
                            <li>Python</li>
                            <li>Julia Programming Language</li>
                        </ul>
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
                            Graduated in Biology from the University of Brasília (UnB), Master's and Doctorate from the Federal University of Paraná (UFPR). During the degrees I learned how to deal with people, work in a team, write and manage projects. In addition, I worked with languages like R, Python and Julia. After this, I started studying HTML, CSS and Javascript to become a software developer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
