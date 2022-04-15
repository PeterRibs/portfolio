import React from "react";
import "../Styles/Projects.scss";
import "../Styles/App.scss";
import RoboFriends from "../Figs/RoboFriends.png"
import BGG from "../Figs/BGG.png"
import calculadora from "../Figs/calculadora.png"
import todolist from "../Figs/todolist.png"
import python_analysis from "../Figs/python_analysis.png"
import R2D2 from "../Figs/R2D2.png"
import tictactoe from "../Figs/tictactoe.png"
import simplegame from "../Figs/simple game.png"
import tictactoe_py from "../Figs/tictactoe_py.png"
import blackjack_py from "../Figs/blackjack_py.png"
import html from '../Figs/html.png';
import python from '../Figs/python.png';
import css from '../Figs/css.png';
import javascript from '../Figs/javascript.png';
import probability from '../Figs/probability.png';
import arithmetic from '../Figs/arithmetic.png';
import budget from '../Figs/budget.png';
import react from '../Figs/react.png';


function Project () {
    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title dark-blue-text">Projects</h2>
                <div className="project-wrapper"> 

                {/* <!-- Project 1 - Py--> */}
                <div className="card">
                    <div className="project-wrapper__text">
                        <h3 className="project-wrapper__text-title">Video Analysis</h3>
                        <div>
                            <img alt="Python" src={python} className='imgAbout'></img>
                        </div>
                        <div className="project-wrapper__image">
                            <a rel="noreferrer" href="https://github.com/PeterRibs/pythonvideoanalysis">
                                <div className="imgProj">
                                    <img
                                        href="https://github.com/PeterRibs/pythonvideoanalysis"
                                        alt="Project_Image"
                                        className="img-fluid"
                                        src={python_analysis}/>
                                </div>
                            </a>
                        </div>
                        <div>
                        <p className="mb-4">
                            In the field, I recorded the dance of a specie named Swallow-tailed Manakin. With each dance, we produced a script in Python using the packages OpenCV, math, NumPy, SciPy and Matplotlib to track the individuals in the flights and to extract their position. This script scans and tracks pixels based on color, which we set as “red” as a reference for males' heads.
                        </p>
                        </div>
                        <a
                        rel="noreferrer"
                        target="_blank"
                        className="cta-btn text-color-project"
                        href="https://github.com/PeterRibs/pythonvideoanalysis"
                        >
                        Source Code
                        </a>
                    </div>
                </div>
                {/* <!-- /END Project 1 - Py--> */}

                {/* <!-- Project 2 - Py--> */}
                <div className="card">
                    <div className="project-wrapper__text">
                        <h3 className="project-wrapper__text-title">BlackJack</h3>
                        <div>
                            <img alt="Python" src={python} className='imgAbout'></img>
                        </div>
                        <div className="project-wrapper__image">
                            <a rel="noreferrer" href="https://github.com/PeterRibs/blackjack_game">
                                <div className="imgProj">
                                    <img
                                        href="https://github.com/PeterRibs/blackjack_game"
                                        alt="Project_Image"
                                        className="img-fluid"
                                        src={blackjack_py}/>
                                </div>
                            </a>
                        </div>
                        <div>
                        <p className="mb-4">
                            Welcome to BlackJack! Get as close to 21 as you can without lost your chips! Dealer hits until she reaches 17. Aces count as 1 or 11. Card output goes a letter followed by number of the face notation! Let's have fun!
                        </p>
                        </div>
                        <a
                        rel="noreferrer"
                        target="_blank"
                        className="cta-btn text-color-project"
                        href="https://github.com/PeterRibs/blackjack_game"
                        >
                        Source Code
                        </a>
                    </div>
                </div>
                {/* <!-- /END Project 2 - Py --> */}

                {/* <!-- Project 3 - Py--> */}
                <div className="card">
                    <div className="project-wrapper__text">
                        <h3 className="project-wrapper__text-title">Tic Tac Toe</h3>
                        <div>
                            <img alt="Python" src={python} className='imgAbout'></img>
                        </div>
                        <div className="project-wrapper__image">
                            <a rel="noreferrer" href="https://github.com/PeterRibs/tictactoe_python">
                                <div className="imgProj">
                                    <img
                                        href="https://github.com/PeterRibs/tictactoe_python"
                                        alt="Project_Image"
                                        className="img-fluid"
                                        src={tictactoe_py}/>
                                </div>
                            </a>
                        </div>
                        <div>
                        <p className="mb-4">
                            A simple Tic Tac Toe game! But now, in PYTHOOOON! Let's have fun again!
                        </p>
                        </div>
                        <a
                        rel="noreferrer"
                        target="_blank"
                        className="cta-btn text-color-project"
                        href="https://github.com/PeterRibs/tictactoe_python"
                        >
                        Source Code
                        </a>
                    </div>
                </div>
                {/* <!-- /END Project 3 - Py --> */}

                {/* <!-- Project 4 - Py--> */}
                <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Probability Calculator</h3>
                            <div>
                                <img alt="Python" src={python} className='imgAbout'></img>
                            </div>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://github.com/PeterRibs/probability_calculator">
                                    <div className="imgProj">
                                        <img
                                            href="https://github.com/PeterRibs/probability_calculator"
                                            alt="Project_Image"
                                            className="img-fluid"
                                            src={probability}/>
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                Project Probability Calculator - FreeCodeCamp: "Suppose there is a hat containing 5 blue balls, 4 red balls, and 2 green balls. What is the probability that a random draw of 4 balls will contain at least 1 red ball and 2 green balls? While it would be possible to calculate the probability using advanced mathematics, an easier way is to write a program to perform a large number of experiments to estimate an approximate probability."
                            </p>
                            </div>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn text-color-project"
                            href="https://github.com/PeterRibs/probability_calculator"
                            >
                            Source Code
                            </a>
                        </div>
                    </div>
                    {/* <!-- /END Project 4 - Py--> */}

                    {/* <!-- Project 5 - Py--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Budget App</h3>
                            <div>
                                <img alt="Python" src={python} className='imgAbout'></img>
                            </div>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://github.com/PeterRibs/budget_app">
                                    <div className="imgProj">
                                        <img
                                            href="https://github.com/PeterRibs/budget_app"
                                            alt="Project_Image"
                                            className="img-fluid"
                                            src={budget}/>
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                Project Budget App - FreeCodeCamp: Shall we control our spending? Or at least know how we spend our money? =D
                            </p>
                            </div>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn text-color-project"
                            href="https://github.com/PeterRibs/budget_app"
                            >
                            Source Code
                            </a>
                        </div>
                    </div>
                    {/* <!-- /END Project 5 - Py --> */}

                    {/* <!-- Project 6 - Py--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Arithmetic Arranger</h3>
                            <div>
                                <img alt="Python" src={python} className='imgAbout'></img>
                            </div>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://github.com/PeterRibs/arithmetic_arranger">
                                    <div className="imgProj">
                                        <img
                                            href="https://github.com/PeterRibs/arithmetic_arranger"
                                            alt="Project_Image"
                                            className="img-fluid"
                                            src={arithmetic}/>
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                Project Arithmetic Arranger - FreeCodeCamp: Students in primary school often arrange arithmetic problems vertically to make them easier to solve.
                            </p>
                            </div>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn text-color-project"
                            href="https://github.com/PeterRibs/arithmetic_arranger"
                            >
                            Source Code
                            </a>
                        </div>
                    </div>
                    {/* <!-- /END Project 6 - Py --> */}

                    {/* <!-- Project 1--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">RoboFriends</h3>
                            <div>
                                <img alt="REACT.js" src={react} className='imgAbout'></img>
                                <img alt="HTML5" src={html} className='imgAbout'></img>
                                <img alt="CSS3" src={css} className='imgAbout'></img>
                                <img alt="Javascript" src={javascript} className='imgAbout'></img>
                            </div>
                            <div className="project-wrapper__image">
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
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Background Generator</h3>
                            <div>
                                <img alt="HTML5" src={html} className='imgAbout'></img>
                                <img alt="CSS3" src={css} className='imgAbout'></img>
                                <img alt="Javascript" src={javascript} className='imgAbout'></img>
                            </div>
                            <div className="project-wrapper__image">
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
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">R2-D2</h3>
                            <div>
                                <img alt="HTML5" src={html} className='imgAbout'></img>
                                <img alt="CSS3" src={css} className='imgAbout'></img>
                            </div>
                            <div className="project-wrapper__image">
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
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Simple Calculator</h3>
                            <div>
                                <img alt="HTML5" src={html} className='imgAbout'></img>
                                <img alt="CSS3" src={css} className='imgAbout'></img>
                                <img alt="Javascript" src={javascript} className='imgAbout'></img>
                            </div>
                            <div className="project-wrapper__image">
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

                    {/*<!--project5-->*/}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Tic Tac Toe</h3>
                            <div>
                                <img alt="HTML5" src={html} className='imgAbout'></img>
                                <img alt="CSS3" src={css} className='imgAbout'></img>
                                <img alt="Javascript" src={javascript} className='imgAbout'></img>
                            </div>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/tictactoe/" target="_blank">
                                    <div className="imgProj">
                                        <img
                                        alt="Project_Image"
                                        className="img-fluid"
                                        src={tictactoe}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                A simple Tic Tac Toe game! Let's have fun!
                            </p>
                            </div>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn cta-btn--hero"
                            href="https://peterribs.github.io/tictactoe/"
                            >
                            See Live
                            </a>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn text-color-project"
                            href="https://github.com/PeterRibs/TicTacToe/"
                            >
                            Source Code
                            </a>
                        </div>
                    </div>
                    {/* <!--End project5--> */}

                    {/* <!-- Project 6--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">ToDoList</h3>
                            <div>
                                <img alt="HTML5" src={html} className='imgAbout'></img>
                                <img alt="CSS3" src={css} className='imgAbout'></img>
                                <img alt="Javascript" src={javascript} className='imgAbout'></img>
                            </div>
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
                    {/* <!-- /END Project 6 --> */}

                    {/* <!-- Project 7--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Simple Game</h3>
                            <div>
                                <img alt="HTML5" src={html} className='imgAbout'></img>
                                <img alt="CSS3" src={css} className='imgAbout'></img>
                                <img alt="Javascript" src={javascript} className='imgAbout'></img>
                            </div>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/simplegame/" target="_blank">
                                <div className="imgProj">
                                    <img
                                    alt="Project_Image"
                                    className="img-fluid"
                                    src={simplegame}
                                    />
                                </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                            A simple game that the quest is to kill the monster before the monster kills you! 
                            </p>
                            </div>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn cta-btn--hero"
                            href="https://peterribs.github.io/simplegame/"
                            >
                            See Live
                            </a>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn text-color-project"
                            href="https://github.com/PeterRibs/simplegame"
                            >
                            Source Code
                            </a>
                        </div>
                    </div>
                    {/* <!-- /END Project 7 --> */}

                </div>
            </div>
        </section>
    )
}

export default Project;

 
