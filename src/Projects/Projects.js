import React from "react";
import "../Styles/Projects.scss";
import "../Styles/App.scss";
import RoboFriends from "../Figs/RoboFriends.png"
import BGG from "../Figs/BGG.png"
import calculadora from "../Figs/calculadora.png"
import todolist from "../Figs/todolist.png"
import R2D2 from "../Figs/R2D2.png"

function Project () {
    return (
        <section id="projects">
            <div id="backdrop"></div>
            <div className="container">
                <h2 className="section-title dark-blue-text">Projects</h2>
                <div className="project-wrapper"> 

                    {/* <!-- Project 1--> */}
                    <div className="row">
                        <div className="project-wrapper__text load-hidden">
                            <h3 className="project-wrapper__text-title">RoboFriends</h3>
                            <div className="project-wrapper__image load-hidden">
                                <a rel="noreferrer" href="https://peterribs.github.io/appRoboFriends/">
                                    <div className="imgProj">
                                        <img
                                            href="https://peterribs.github.io/appRoboFriends/"
                                            alt="Project_Image"
                                            className="img-fluid"
                                            src={RoboFriends}/>
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                A catalog of fictional friends with name, e-mail and a portrait. You can search by name to find your robot friend's e-mail and photo!
                            </p>
                            </div>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn cta-btn--hero"
                            href="https://peterribs.github.io/appRoboFriends/"
                            >
                            See Live
                            </a>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn text-color-project"
                            href="https://github.com/PeterRibs/appRoboFriends"
                            >
                            Source Code
                            </a>
                        </div>
                    </div>
                    {/* <!-- /END Project 1 --> */}

                    {/* <!-- Project 2--> */}
                    <div className="row">
                        <div className="project-wrapper__text load-hidden">
                            <h3 className="project-wrapper__text-title">Background Generator</h3>
                            <div className="project-wrapper__image load-hidden">
                                <a rel="noreferrer" href="https://peterribs.github.io/background-generator/" target="_blank">
                                <div className="imgProj">
                                    <img
                                    alt="Project_Image"
                                    className="img-fluid"
                                    src={BGG}
                                    />
                                </div>
                                </a>
                            </div>
                            <div>
                                <p className="mb-4">
                                    You can produce beautiful backgrounds with different colors. Change the colors until you find what you like the most, just copy the code. Simple and easy!
                                </p>
                            </div>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn cta-btn--hero"
                            href="https://peterribs.github.io/background-generator/"
                            >
                            See Live
                            </a>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn text-color-project"
                            href="https://github.com/PeterRibs/background-generator"
                            >
                            Source Code
                            </a>
                        </div>
                    </div>
                    {/* <!-- /END Project 2--> */}

                    {/* <!-- Project 3--> */}
                    <div className="row">
                        <div className="project-wrapper__text load-hidden">
                            <h3 className="project-wrapper__text-title">R2-D2</h3>
                            <div className="project-wrapper__image load-hidden">
                                <a rel="noreferrer" href="https://peterribs.github.io/r2d2.github.io/" target="_blank">
                                    <div className="imgProj">
                                        <img
                                        alt="Project_Image"
                                        className="img-fluid"
                                        src={R2D2}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                The R2-D2... YES! The great R2-D2 made using CSS, which shows the wonderful Leia when you hover over your transmitter!
                            </p>
                            </div>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn cta-btn--hero"
                            href="https://peterribs.github.io/r2d2.github.io/"
                            >
                            See Live
                            </a>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn text-color-project"
                            href="https://github.com/PeterRibs/r2d2.github.io"
                            >
                            Source Code
                            </a>
                        </div>
                    </div>
                    {/* <!-- /END Project 3 --> */}

                    {/* <!-- Project 4--> */}
                    <div className="row">
                        <div className="project-wrapper__text load-hidden">
                            <h3 className="project-wrapper__text-title">Simple Calculator</h3>
                            <div className="project-wrapper__image load-hidden">
                                <a rel="noreferrer" href="https://peterribs.github.io/simpleCalculator/" target="_blank">
                                    <div className="imgProj">
                                        <img
                                        alt="Project_Image"
                                        className="img-fluid"
                                        src={calculadora}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                            A simple Simple Calculator to help with math. You can sum, subtract, multiply and divide.
                            </p>
                            </div>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn cta-btn--hero"
                            href="https://peterribs.github.io/simpleCalculator/"
                            >
                            See Live
                            </a>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn text-color-project"
                            href="https://github.com/PeterRibs/simpleCalculator"
                            >
                            Source Code
                            </a>
                        </div>
                    </div>
                    {/* <!-- /END Project 4 --> */}

                    {/* <!-- Project 5--> */}
                    <div className="row">
                        <div className="project-wrapper__text load-hidden">
                            <h3 className="project-wrapper__text-title">ToDoList</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/ToDoList/" target="_blank">
                                <div className="imgProj">
                                    <img
                                    alt="Project_Image"
                                    className="img-fluid"
                                    src={todolist}
                                    />
                                </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                            A simple To Do List that you can add elements, check and delete then.
                            </p>
                            </div>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn cta-btn--hero"
                            href="https://peterribs.github.io/ToDoList/"
                            >
                            See Live
                            </a>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn text-color-project"
                            href="https://github.com/PeterRibs/ToDoList"
                            >
                            Source Code
                            </a>
                        </div>
                    </div>
                    {/* <!-- /END Project 5 --> */}

                </div>
            </div>
        </section>
    )
}

export default Project;

 
