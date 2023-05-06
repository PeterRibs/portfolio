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
import DescomplicaStorytelling from "./DescomplicaStorytelling.png"
import DescomplicaSegurancaPrivacidade from "./DescomplicaSegurancaPrivacidade.png"
import DescomplicaComputacaoNuvem from "./DescomplicaComputacaoNuvem.png"
import DescomplicaFundamentosBigData from "./DescomplicaFundamentosBigData.png"
import FGVGestaoCarbono from "./FGVGestaoCarbono.png"
import FGVMensuracaoCarbono from "./FGVMensuracaoCarbono.png"
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

                    {/* <!-- Computação em Nuvem --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Computação em Nuvem</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="#courses">
                                    <div className="imgProj">
                                        <img
                                            href="#courses"
                                            alt="Project_Image"
                                            className="img-fluid"
                                            src={DescomplicaComputacaoNuvem}/>
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
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Fundamentos de Big Data --> */}

                    {/* <!-- Fundamentos de Big Data --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Fundamentos de Big Data</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="#courses">
                                    <div className="imgProj">
                                        <img
                                            href="#courses"
                                            alt="Project_Image"
                                            className="img-fluid"
                                            src={DescomplicaFundamentosBigData}/>
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
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Fundamentos de Big Data --> */}

                    {/* <!-- Segurança e Privacidade --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Segurança e Privacidade</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="#courses">
                                    <div className="imgProj">
                                        <img
                                            href="#courses"
                                            alt="Project_Image"
                                            className="img-fluid"
                                            src={DescomplicaSegurancaPrivacidade}/>
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
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Segurança e Privacidade --> */}

                    {/* <!-- Gestão Estratégica de Carbono --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Gestão Estratégica de Carbono</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="#courses">
                                    <div className="imgProj">
                                        <img
                                            href="#courses"
                                            alt="Project_Image"
                                            className="img-fluid"
                                            src={FGVGestaoCarbono}/>
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                Institution: FGV
                                <hr></hr>
                                30 hours
                                <hr></hr>
                            </p>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Gestão Estratégica de Carbono --> */}
                        
                    {/* <!-- Mensuração de Carbono na Agricultura e Pecuária --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Mensuração de Carbono na Agricultura e Pecuária</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="#courses">
                                    <div className="imgProj">
                                        <img
                                            href="#courses"
                                            alt="Project_Image"
                                            className="img-fluid"
                                            src={FGVMensuracaoCarbono}/>
                                    </div>
                                </a>
                            </div>
                            <div>
                            <p className="mb-4">
                                Institution: Observatório de Bioeconomia da Fundação Getulio Vargas
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
                    {/* <!-- /END Mensuração de Carbono na Agricultura e Pecuária --> */}
                    
                    {/* <!-- Storytelling --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Storytelling</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="#courses">
                                    <div className="imgProj">
                                        <img
                                            href="#courses"
                                            alt="Project_Image"
                                            className="img-fluid"
                                            src={DescomplicaStorytelling}/>
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
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Estatística Aplicada à Inteligência de Negócios --> */}

                    {/* <!-- Estatística Aplicada à Inteligência de Negócios --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Estatística Aplicada à Inteligência de Negócios</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="#courses">
                                    <div className="imgProj">
                                        <img
                                            href="#courses"
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
                    {/* <!-- /END Estatística Aplicada à Inteligência de Negócios --> */}

                    {/* <!-- Estatística Aplicada a Negócios --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Estatística Aplicada a Negócios</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="#courses">
                                    <div className="imgProj">
                                        <img
                                            href="#courses"
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
                    {/* <!-- /END Estatística Aplicada a Negócios --> */}

                    {/* <!-- Python Fundamentos Para Análise de Dados --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Python Fundamentos Para Análise de Dados</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://mycourse.app/k3u2H9Ds9Fg91ufg6">
                                    <div className="imgProj">
                                        <img
                                            href="https://mycourse.app/k3u2H9Ds9Fg91ufg6"
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
                    {/* <!-- /END Python Fundamentos Para Análise de Dados --> */}

                    {/* <!-- Governança e Qualidade de Dados --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Governança e Qualidade de Dados</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="#courses">
                                    <div className="imgProj">
                                        <img
                                            href="#courses"
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
                    {/* <!-- /END Governança e Qualidade de Dados --> */}

                    {/* <!-- Gestão do Tempo --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Gestão do Tempo</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="#courses">
                                    <div className="imgProj">
                                        <img href="#courses"
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
                    {/* <!-- /END Gestão do Tempo--> */}

                    {/* <!-- Inteligência Artificial Fundamentos --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Inteligência Artificial Fundamentos</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://mycourse.app/dbLmr4bdiGYKXCeX6">
                                    <div className="imgProj">
                                        <img href="https://mycourse.app/dbLmr4bdiGYKXCeX6"
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
                    {/* <!-- /END Inteligência Artificial Fundamentos --> */}
                    
                    {/* <!-- Introdução à Análise de Dados - Microsoft Power BI --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Introdução à Análise de Dados - Microsoft Power BI</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://www.ev.org.br/validar-certificado" target="_blank">
                                    <div className="imgProj">
                                        <img href="https://www.ev.org.br/validar-certificado"
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
                    {/* <!-- /END Introdução à Análise de Dados - Microsoft Power BI --> */}

                    {/* <!-- Pandas --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Pandas</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://www.kaggle.com/learn/certification/pedroribs/pandas" target="_blank">
                                <div className="imgProj">
                                    <img href="https://www.kaggle.com/learn/certification/pedroribs/pandas"
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
                    {/* <!-- /END Pandas --> */}

                    {/* <!-- Python --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Python</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://www.kaggle.com/learn/certification/pedroribs/python" target="_blank">
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
                    {/* <!-- /END Python --> */}

                    {/* <!-- Scientific Computing with Python --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Scientific Computing with Python</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://freecodecamp.org/certification/PeterRibs/scientific-computing-with-python-v7" target="_blank">
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
                    {/* <!-- /END Scientific Computing with Python --> */}

                    {/* <!-- R Programming: Advanced Analytics In R For Data Science--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">R Programming: Advanced Analytics In R For Data Science</h3>
                                <div className="project-wrapper__image">
                                <a rel="noreferrer" href="http://ude.my/UC-1df4de30-e6e4-432a-a028-fb8b1bde6de3" target="_blank">
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
                    {/* <!-- /END R Programming: Advanced Analytics In R For Data Science --> */}

                    {/*<!--R Programming A-Z: R For Data Science-->*/}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">R Programming A-Z: R For Data Science</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="http://ude.my/UC-ca090def-344f-4f7e-8d1b-ce6e1fcde4dd" target="_blank">
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
                    {/* <!--End R Programming A-Z: R For Data Science--> */}

                    {/*<!-- Python Completo - Do iniciante ao avançado! -->*/}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Python Completo - Do iniciante ao avançado!</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="http://ude.my/UC-7a45929b-cbae-4905-ad07-cb1dfb7b19a2.pdf" target="_blank">
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
                    {/* <!--End Python Completo - Do iniciante ao avançado! --> */}

                    {/*<!-- Big Data Fundamentos -->*/}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Big Data Fundamentos</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://mycourse.app/b1SBvSfYA13Gr3wR8" target="_blank">
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
                    {/* <!--End Big Data Fundamentos --> */}

                    {/*<!-- Introdução à Ciência de Dados -->*/}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Introdução à Ciência de Dados</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://mycourse.app/N7nGYektrhsaVSSA7" target="_blank">
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
                    {/* <!--End Introdução à Ciência de Dados --> */}

                    {/*<!-- Data Science para Iniciantes: Fácil e Simples! -->*/}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Data Science para Iniciantes: Fácil e Simples!</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://www.eia.ai/certificates/cert_brBJC42m" target="_blank">
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
                    {/* <!--End Data Science para Iniciantes: Fácil e Simples! --> */}
                    
                    {/* <!-- Introdução a Bancos de Dados e Linguagem SQL --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Introdução a Bancos de Dados e Linguagem SQL</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://www.eia.ai/certificates/cert_3vlwCRgx" target="_blank">
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
                    {/* <!-- /END Introdução a Bancos de Dados e Linguagem SQL --> */}

                    {/* <!-- Data Science: Visualização de Dados com Python --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Data Science: Visualização de Dados com Python</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://alfahelix.com.br/certificados/" target="_blank">
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
                    {/* <!-- /END Data Science: Visualização de Dados com Python --> */}

                    {/* <!-- Introdução ao Python --> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Introdução ao Python</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://alfahelix.com.br/certificados/" target="_blank">
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
                    {/* <!-- /END Introdução ao Python --> */}

                    {/* <!-- Python - Curso Rápido--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Python - Curso Rápido</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="https://www.cod3r.com.br/certificates/6ifevnw8hl" target="_blank">
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
                    {/* <!-- /END Python - Curso Rápido --> */}

                    {/* <!-- Full-stack--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Full-stack (Front-end & Back-end)</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="http://ude.my/UC-796a8b78-d447-440a-a1b8-187872e09570" target="_blank">
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
                    {/* <!-- /END Full-stack --> */}

                    {/* <!-- Introdução à Programação com Python--> */}
                    <div className="card">
                        <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">Introdução à Programação com Python</h3>
                            <div className="project-wrapper__image">
                                <a rel="noreferrer" href="#courses" target="_blank">
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
                    {/* <!-- /END Introdução à Programação com Python --> */}

                </div>
            </div>
        </section>
    )
}

export default Project;

 
