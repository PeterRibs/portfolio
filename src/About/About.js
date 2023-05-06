import React from "react";
import "../Styles/About.scss";
import "../Styles/_buttons.scss";
import html from '../Figs/html.png';
import python from '../Figs/python.png';
import css from '../Figs/css.png';
import javascript from '../Figs/javascript.png';
import r from '../Figs/r.png';
import react from '../Figs/react.png';
import api from '../Figs/api.png';
import nodejs from '../Figs/nodejs.png';
import postgresql from '../Figs/Postgresql.png';
import postman from '../Figs/postman.png';
import github from '../Figs/github.png';
import dbeaver from '../Figs/dbeaver.png';
import git from '../Figs/git.png';
import docker from '../Figs/docker.png';
import sqlite from '../Figs/sqlite.png';
import jupyter from '../Figs/jupyter.png';
import colab from '../Figs/colab.png';
import qgis from '../Figs/qgis.png';
import gee from '../Figs/gee.png';

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
                            <img alt="Python" title="Python" src={python} className='imgAbout'></img>
                            <img alt="Jupyter Notebook" title="Jupyter Notebook"  src={jupyter} className='imgAbout'></img>
                            <img alt="R" title="R" src={r} className='imgAbout'></img>
                            <img alt="SQLite" title="SQLite"src={sqlite} className='imgAbout'></img>
                            <img alt="PostgreSQL" title="PostgreSQL" src={postgresql} className='imgAbout'></img>
                            <img alt="DBeaver" title="DBeaver"src={dbeaver} className='imgAbout'></img>
                            <img alt="Google Colab" title="Google Colab" src={colab} className='imgAbout'></img>
                            <img alt="Git" title="Git" src={git} className='imgAbout'></img>
                            <img alt="GitHub" title="GitHub"  src={github} className='imgAbout'></img>
                            <img alt="Docker" title="Docker"  src={docker} className='imgAbout'></img>
                            <img alt="HTML5" title="HTML5"  src={html} className='imgAbout'></img>
                            <img alt="CSS3" title="CSS3"  src={css} className='imgAbout'></img>
                            <img alt="Javascript" title="Javascript"  src={javascript} className='imgAbout'></img>
                            <img alt="ReactJS" title="ReactJS"  src={react} className='imgAbout'></img>
                            <img alt="NodeJS" title="NodeJS"  src={nodejs} className='imgAbout'></img>
                            <img alt="Web APIs" title="Web APIs"  src={api} className='imgAbout'></img>
                            <img alt="Postman" title="Postman"  src={postman} className='imgAbout'></img>
                            <img alt="GEE" title="Google Earth Engine"  src={gee} className='imgAbout'></img>
                            <img alt="QGIS" title="QGIS" src={qgis} className='imgAbout'></img>
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
                            Graduated in Biology from the University of Brasília (UnB), and a Master's and Doctorate from the Federal University of Paraná (UFPR). Throughout my academic pursuits, I have gained experience in teamwork, project management, and effective communication with individuals from diverse backgrounds. I have also acquired expertise in programming languages, including R, Python, and Julia, and have undertaken independent study in HTML, CSS, and JavaScript to further augment my programming proficiency. My professional experience includes the analysis of spatial data related to rural properties and the production of maps. Currently, I am working as a Data Scientist, where I am responsible for tasks such as data manipulation, data visualization, data analysis, and the implementation of Machine Learning models.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
