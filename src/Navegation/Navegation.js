import React from "react";
import "../Styles/Navegation.scss";

function Navegation() {
    return (
    <nav className="color-bg">
        <ul className="main-nav">
            <li className="nav-list"><a className="nav-item" href="#">Home</a></li>
            <li className="nav-list"><a className="nav-item" href="#projects">Projects</a></li>
            <li className="nav-list"><a className="nav-item" href="#courses">Courses</a></li>
            <li className="nav-list"><a className="nav-item" href="#contact">Contact</a></li>
        </ul>
    </nav>
    )
}

export default Navegation;