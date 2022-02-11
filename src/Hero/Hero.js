import React from "react";
import "../Styles/Hero.scss";
import "../Styles/App.scss";

function Hero () {
    return (
        <section id="hero">
            <div className="container">
                <h1 className="hero-title">
                Hi, my name is <span className="text-color-main">Pedro Ribeiro</span>
                <br />
                Software Developer
                </h1>
            </div>
        </section>
    )
}

export default Hero;
