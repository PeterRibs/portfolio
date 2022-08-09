import React from "react";
import "../Styles/Projects.scss";
import "../Styles/App.scss";
import AlfahelixDataScience from "./AlfahelixDataScience.png"
import AlfahelixIntroPython from "./AlfahelixIntroPython.png"
import BioinformaticaIntroPython from "./BioinformaticaIntroPython.png"
import DescomplicaEstatIntelNeg from "./DescomplicaEstatIntelNeg.png"
import DescomplicaEstatNeg from "./DescomplicaEstatNeg.png"
import DescomplicaGovernQualiDados from "./DescomplicaGovernQualiDados.png"
import DescomplicaTempo from "./DescomplicaTempo.png"
import DSABigData from "./DSABigData.png"
import DSAIA from "./DSAIA.png"
import Cod3rPython from "./Cod3rPython.png"
import DSAIntroDataScienc from "./DSAIntroDataScienc.png"
import DSAPythonAnaliseDados from './DSAPythonAnaliseDados.png';
import EIADataScience from './EIADataScience.png';
import EIAIntroSQL from './EIAIntroSQL.png';
import freecodecampScientificPython from './freecodecampScientificPython.png';
import FundBradescoIntroPowerBI from './FundBradescoIntroPowerBI.png';
import KagglePandas from './KagglePandas.png';
import KagglePython from './KagglePython.png';
import LigencyTeamRDataScience from './LigencyTeamRDataScience.png';
import LigencyTeamRAdvanced from './LigencyTeamRAdvanced.png';
import PierianDataIncPython from './PierianDataIncPython.png';
import ZTMFullStack from './ZTMFullStack.jpg';
import html from '../Figs/html.png';
import python from '../Figs/python.png';
import css from '../Figs/css.png';
import javascript from '../Figs/javascript.png';
import react from '../Figs/react.png';
import postgresql from '../Figs/Postgresql.png';
import sqlite from '../Figs/sqlite.png';
import jupyter from '../Figs/jupyter.png';
import r from '../Figs/r.png';
import colab from '../Figs/colab.png';
import postman from '../Figs/postman.png';
import npm from '../Figs/npm.jpg';
import api from '../Figs/api.png';
import nodejs from '../Figs/nodejs.png';
import github from '../Figs/github.png';
import pandas from '../Figs/pandas.png';
import numpy from '../Figs/numpy.png';
import powerbi from '../Figs/powerbi.jpg';
import mongoDB from '../Figs/mongoDB.png';
import matplotlib from '../Figs/matplotlib.png';
import scipy from '../Figs/scipy.png';
import scikitlearn from '../Figs/scikitlearn.png';
import seaborn from '../Figs/seaborn.png';
import tensorflow from '../Figs/tensorflow.png';
import excel from '../Figs/excel.png';

function Project () {
    return (
        <section id="courses">
            <div className="container">
                <h2 className="section-title dark-blue-text">Courses</h2>
                <div className="project-wrapper"> 

                {/* <!-- Project 8 - Py--> */}
                <div className="card">
                    <div className="project-wrapper__text">
                        <h3 className="project-wrapper__text-title">Estatística Aplicada à Inteligência de Negócios</h3>
                        <div className="project-wrapper__image">
                            <a rel="noreferrer" href="https://github.com/PeterRibs/pythonvideoanalysis">
                                <div className="imgProj">
                                    <img
                                        href="https://github.com/PeterRibs/pythonvideoanalysis"
                                        alt="Project_Image"
                                        className="img-fluid"
                                        src={DescomplicaEstatIntelNeg}/>
                                </div>
                            </a>
                        </div>
                        <div>
                        <p className="mb-4">
                            Institution: Descomplica
                            <hr></hr>
                            30 hours
                            <hr></hr>
                        </p>
                        </div>
                        <div>
                            <img alt="R" title="R" src={r} className='imgAbout'></img>
                            <img alt="Excel" title="Excel" src={excel} className='imgAbout'></img>
                        </div>
                    </div>
                </div>
                {/* <!-- /END Project 8 - Py--> */}

                {/* <!-- Project 7 - Py--> */}
                <div className="card">
                    <div className="project-wrapper__text">
                        <h3 className="project-wrapper__text-title">Estatística Aplicada a Negócios</h3>
                        <div className="project-wrapper__image">
                            <a rel="noreferrer" href="https://github.com/PeterRibs/blackjack_game">
                                <div className="imgProj">
                                    <img
                                        href="https://github.com/PeterRibs/blackjack_game"
                                        alt="Project_Image"
                                        className="img-fluid"
                                        src={DescomplicaEstatNeg}/>
                                </div>
                            </a>
                        </div>
                        <div>
                        <p className="mb-4">
                            Institution: Descomplica
                            <hr></hr>
                            30 hours
                            <hr></hr>
                        </p>
                        </div>
                        <div>
                            <img alt="Excel" title="Excel" src={excel} className='imgAbout'></img>
                        </div>
                    </div>
                </div>
                {/* <!-- /END Project 7 - Py --> */}

                {/* <!-- Project 13 - Py--> */}
                <div className="card">
                    <div className="project-wrapper__text">
                        <h3 className="project-wrapper__text-title">Python Fundamentos Para Análise de Dados</h3>
                        <div className="project-wrapper__image">
                            <a rel="noreferrer" href="https://github.com/PeterRibs/">
                                <div className="imgProj">
                                    <img
                                        href="https://github.com/PeterRibs/"
                                        alt="Project_Image"
                                        className="img-fluid"
                                        src={DSAPythonAnaliseDados}/>
                                </div>
                            </a>
                        </div>
                        <div>
                        <p className="mb-4">
                            Institution: Data Science Academy
                            <hr></hr>
                            60 hours
                            <hr></hr>
                        </p>
                        </div>
                        <div>
                            <img alt="Python" title="Python" src={python} className='imgAbout'></img>
                            <img alt="Jupyter Notebook" title="Jupyter Notebook"  src={jupyter} className='imgAbout'></img>
                            <img alt="SQLite" title="SQLite"src={sqlite} className='imgAbout'></img>
                            <img alt="MongoDB" title="MongoDB"src={mongoDB} className='imgAbout'></img>
                            <img alt="Pandas" title="Pandas" src={pandas} className='imgAbout'></img>
                            <img alt="NumPy" title="NumPy" src={numpy} className='imgAbout'></img>
                            <img alt="Matplotlib" title="Matplotlib"  src={matplotlib} className='imgAbout'></img>
                            <img alt="Scipy" title="Scipy"  src={scipy} className='imgAbout'></img>
                            <img alt="Scikit learn" title="Scikit learn"  src={scikitlearn} className='imgAbout'></img>
                            <img alt="Seaborn" title="Seaborn"  src={seaborn} className='imgAbout'></img>
                            <img alt="TensorFlow" title="TensorFlow"  src={tensorflow} className='imgAbout'></img>
                            <img alt="GoogleColab" title="Google Colab" src={colab} className='imgAbout'></img>
                            <img alt="HTML" title="HTML" src={html} className='imgAbout'></img>
                        </div>
                    </div>
                </div>
                {/* <!-- /END Project 13 - Py--> */}

                {/* <!-- Project 6 - Py--> */}
                <div className="card">
                    <div className="project-wrapper__text">
                        <h3 className="project-wrapper__text-title">Governança e Qualidade de Dados</h3>
                        <div className="project-wrapper__image">
                            <a rel="noreferrer" href="https://github.com/PeterRibs/tictactoe_python">
                                <div className="imgProj">
                                    <img
                                        href="https://github.com/PeterRibs/tictactoe_python"
                                        alt="Project_Image"
                                        className="img-fluid"
                                        src={DescomplicaGovernQualiDados}/>
                                </div>
                            </a>
                        </div>
                        <div>
                        <p className="mb-4">
                            Institution: Descomplica
                            <hr></hr>
                            30 hours
                            <hr></hr>   
                        </p>
                        </div>
                    </div>
                </div>
                {/* <!-- /END Project 6 - Py --> */}

                {/* <!-- Project 5 - Py--> */}
                <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Gestão do Tempo</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://github.com/PeterRibs/probability_calculator">
                                    <div className="imgProj">
                                        <img
                                            href="https://github.com/PeterRibs/probability_calculator"
                                            alt="Project_Image"
                                            className="img-fluid"
                                            src={DescomplicaTempo}/>
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                Institution: Descomplica
                                <hr></hr>
                                30 hours
                                <hr></hr>
                            </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Project 5 - Py--> */}

                    {/* <!-- Project 3 - Py--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Inteligência Artificial Fundamentos</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://github.com/PeterRibs/arithmetic_arranger">
                                    <div className="imgProj">
                                        <img
                                            href="https://github.com/PeterRibs/arithmetic_arranger"
                                            alt="Project_Image"
                                            className="img-fluid"
                                            src={DSAIA}/>
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                Institution: Data Science Academy
                                <hr></hr>
                                8 hours
                                <hr></hr>
                            </p>
                            </div>
                            {/* <div>
                                <img alt="Python" title="Python" src={python} className='imgAbout'></img>
                            </div> */}
                        </div>
                    </div>
                    {/* <!-- /END Project 3 - Py --> */}
                    
                    {/* <!-- Project 5--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Introdução à Análise de Dados - Microsoft Power BI</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/r2d2.github.io/" target="_blank">
                                    <div className="imgProj">
                                        <img
                                        alt="Project_Image"
                                        className="img-fluid"
                                        src={FundBradescoIntroPowerBI}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                Institution: Fundação Bradesco
                                <hr></hr>
                                5 hours
                                <hr></hr>
                            </p>
                            </div>
                            <div>
                                <img alt="Power BI" title="Power BI" src={powerbi} className='imgAbout'></img>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Project 5 --> */}

                    {/* <!-- Project 6--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Pandas</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/background-generator/" target="_blank">
                                <div className="imgProj">
                                    <img
                                    alt="Project_Image"
                                    className="img-fluid"
                                    src={KagglePandas}
                                    />
                                </div>
                                </a>
                            </div>
                            <div>
                                <p className="mb-4">
                                    Institution: Kaggle
                                    <hr></hr>
                                    4 hours
                                    <hr></hr>
                                </p>
                            </div>
                            <div>
                                <img alt="Python" title="Python" src={python} className='imgAbout'></img>
                                <img alt="Pandas" title="Pandas" src={pandas} className='imgAbout'></img>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Project 6--> */}

                    {/* <!-- Project 6--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Python</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/background-generator/" target="_blank">
                                <div className="imgProj">
                                    <img
                                    alt="Project_Image"
                                    className="img-fluid"
                                    src={KagglePython}
                                    />
                                </div>
                                </a>
                            </div>
                            <div>
                                <p className="mb-4">
                                    Institution: Kangle
                                    <hr></hr>
                                    5 hours
                                    <hr></hr>
                                </p>
                            </div>
                            <div>
                                <img alt="Python" title="Python" src={python} className='imgAbout'></img>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Project 6--> */}

                    {/* <!-- Project 6--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Scientific Computing with Python</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/background-generator/" target="_blank">
                                <div className="imgProj">
                                    <img
                                    alt="Project_Image"
                                    className="img-fluid"
                                    src={freecodecampScientificPython}
                                    />
                                </div>
                                </a>
                            </div>
                            <div>
                                <p className="mb-4">
                                    Institution: freeCodeCamp
                                    <hr></hr>
                                    300 hours
                                    <hr></hr>
                                </p>
                            </div>
                            <div>
                                <img alt="Python" title="Python" src={python} className='imgAbout'></img>
                                <img alt="SQLite" title="SQLite" src={sqlite} className='imgAbout'></img>
                                <img alt="Web APIs" title="Web APIs"  src={api} className='imgAbout'></img>
                            
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Project 6--> */}

                    {/* <!-- Project 4--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">R Programming: Advanced Analytics In R For Data Science</h3>
                                <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/simpleCalculator/" target="_blank">
                                    <div className="imgProj">
                                        <img
                                        alt="Project_Image"
                                        className="img-fluid"
                                        src={LigencyTeamRAdvanced}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                Institution: Ligency Team - Udemy
                                <hr></hr>
                                6 hours
                                <hr></hr>
                            </p>
                            </div>
                            <div>
                                <img alt="R" title="R" src={r} className='imgAbout'></img>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Project 4 --> */}

                    {/*<!--project 3-->*/}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">R Programming A-Z: R For Data Science</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/tictactoe/" target="_blank">
                                    <div className="imgProj">
                                        <img
                                        alt="Project_Image"
                                        className="img-fluid"
                                        src={LigencyTeamRDataScience}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                Institution: Ligency Team - Udemy
                                <hr></hr>
                                10.5 hours
                                <hr></hr>
                            </p>
                            </div>
                            <div>
                                <img alt="R" title="R" src={r} className='imgAbout'></img>
                            </div>
                        </div>
                    </div>
                    {/* <!--End project 3--> */}

                    {/*<!--project 3-->*/}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Python Completo - Do iniciante ao avançado!</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/tictactoe/" target="_blank">
                                    <div className="imgProj">
                                        <img
                                        alt="Project_Image"
                                        className="img-fluid"
                                        src={PierianDataIncPython}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                Institution: Pierian Data Inc. - Udemy
                                <hr></hr>
                                10 hours
                                <hr></hr>
                            </p>
                            </div>
                            <div>
                                <img alt="Python" title="Python" src={python} className='imgAbout'></img>
                            </div>
                        </div>
                    </div>
                    {/* <!--End project 3--> */}

                    {/*<!--project 3-->*/}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Big Data Fundamentos</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/tictactoe/" target="_blank">
                                    <div className="imgProj">
                                        <img
                                        alt="Project_Image"
                                        className="img-fluid"
                                        src={DSABigData}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                Institution: Data Science Academy
                                <hr></hr>
                                12 hours
                                <hr></hr>
                            </p>
                            </div>
                            {/* <div>
                                <img alt="Python" title="Python" src={python} className='imgAbout'></img>
                            </div> */}
                        </div>
                    </div>
                    {/* <!--End project 3--> */}

                    {/*<!--project 3-->*/}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Introdução à Ciência de Dados</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/tictactoe/" target="_blank">
                                    <div className="imgProj">
                                        <img
                                        alt="Project_Image"
                                        className="img-fluid"
                                        src={DSAIntroDataScienc}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                Institution: Data Science Academy
                                <hr></hr>
                                12 hours
                                <hr></hr>
                            </p>
                            </div>
                            {/* <div>
                                <img alt="Python" title="Python" src={python} className='imgAbout'></img>
                            </div> */}
                        </div>
                    </div>
                    {/* <!--End project 3--> */}

                    {/*<!--project 3-->*/}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Data Science para Iniciantes: Fácil e Simples!</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/tictactoe/" target="_blank">
                                    <div className="imgProj">
                                        <img
                                        alt="Project_Image"
                                        className="img-fluid"
                                        src={EIADataScience}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                Institution: Escola de Inteligência Artificial - EIA 
                                <hr></hr>
                                3 hours
                                <hr></hr>
                            </p>
                            </div>
                            {/* <div>
                                <img alt="Python" title="Python" src={python} className='imgAbout'></img>
                            </div> */}
                        </div>
                    </div>
                    {/* <!--End project 3--> */}
                    
                    {/* <!-- Project 2--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Introdução a Bancos de Dados e Linguagem SQL</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/ToDoList/" target="_blank">
                                <div className="imgProj">
                                    <img
                                    alt="Project_Image"
                                    className="img-fluid"
                                    src={EIAIntroSQL}
                                    />
                                </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                Institution: Escola de Inteligência Artificial - EIA 
                                <hr></hr>
                                5 hours
                                <hr></hr>
                            </p>
                            </div>
                            <div>
                                <img alt="PostgreSQL" title="PostgreSQL" src={postgresql} className='imgAbout'></img>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Project 2 --> */}

                    {/* <!-- Project 2--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Data Science: Visualização de Dados com Python</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/ToDoList/" target="_blank">
                                <div className="imgProj">
                                    <img
                                    alt="Project_Image"
                                    className="img-fluid"
                                    src={AlfahelixDataScience}
                                    />
                                </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                Institution: Alfahelix
                                <hr></hr>
                                2 hours
                                <hr></hr>
                            </p>
                            </div>
                            <div>
                                <img alt="Python" title="Python" src={python} className='imgAbout'></img>
                                <img alt="Matplotlib" title="Matplotlib" src={matplotlib} className='imgAbout'></img>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Project 2 --> */}

                    {/* <!-- Project 2--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Introdução ao Python</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/ToDoList/" target="_blank">
                                <div className="imgProj">
                                    <img
                                    alt="Project_Image"
                                    className="img-fluid"
                                    src={AlfahelixIntroPython}
                                    />
                                </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                Institution: Alfahelix
                                <hr></hr>
                                2 hours
                                <hr></hr>
                            </p>
                            </div>
                            <div>
                                <img alt="Python" title="Python" src={python} className='imgAbout'></img>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Project 2 --> */}

                    {/* <!-- Project 1--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Python - Curso Rápido</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/simplegame/" target="_blank">
                                <div className="imgProj">
                                    <img
                                    alt="Project_Image"
                                    className="img-fluid"
                                    src={Cod3rPython}
                                    />
                                </div>
                                </a>
                            </div>
                            <div>
                                <p className="mb-4">
                                    Institution: Cod3r
                                    <hr></hr>
                                    16 hours
                                    <hr></hr>
                                </p>
                            </div>
                            <div>
                                <img alt="Python" title="Python" src={python} className='imgAbout'></img>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Project 1 --> */}

                    {/* <!-- Project 1--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Full-stack (Front-end & Back-end)</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/simplegame/" target="_blank">
                                <div className="imgProj">
                                    <img
                                    alt="Project_Image"
                                    className="img-fluid"
                                    src={ZTMFullStack}
                                    />
                                </div>
                                </a>
                            </div>
                            <div>
                                <p className="mb-4">
                                    Institution: ZTM - Udemy
                                    <hr></hr>
                                    37.5 hours
                                    <hr></hr>
                                </p>
                            </div>
                            <div>
                                <img alt="HTML5" title="HTML5" src={html} className='imgAbout'></img>
                                <img alt="CSS3" title="CSS3" src={css} className='imgAbout'></img>
                                <img alt="Javascript" title="Javascript" src={javascript} className='imgAbout'></img>
                                <img alt="ReactJS" title="ReactJS" src={react} className='imgAbout'></img>
                                <img alt="PostgreSQL" title="PostgreSQL" src={postgresql} className='imgAbout'></img>
                                <img alt="NPM" title="NPM"  src={npm} className='imgAbout'></img>
                                <img alt="Postman" title="Postman"  src={postman} className='imgAbout'></img>
                                <img alt="Web APIs" title="Web APIs"  src={api} className='imgAbout'></img>
                                <img alt="NodeJS" title="NodeJS"  src={nodejs} className='imgAbout'></img>
                                <img alt="GitHub" title="GitHub" src={github} className='imgAbout'></img>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Project 1 --> */}

                    {/* <!-- Project 1--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Introdução à Programação com Python</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://peterribs.github.io/simplegame/" target="_blank">
                                <div className="imgProj">
                                    <img
                                    alt="Project_Image"
                                    className="img-fluid"
                                    src={BioinformaticaIntroPython}
                                    />
                                </div>
                                </a>
                            </div>
                            <div>
                                <p className="mb-4">
                                    Institution: Federal University of Paraná
                                    <hr></hr>
                                    14 hours
                                    <hr></hr>
                                </p>
                            </div>
                            <div>
                                <img alt="Python" title="Python" src={python} className='imgAbout'></img>
                                <img alt="Pandas" title="Pandas" src={pandas} className='imgAbout'></img>
                                <img alt="NumPy" title="NumPy" src={numpy} className='imgAbout'></img>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Project 1 --> */}

                </div>
            </div>
        </section>
    )
}

export default Project;

 
