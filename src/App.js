import React from "react";
import Navegation from "./Navegation/Navegation";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const App = () => {
    return (
        <div className="app">
            <Navegation />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default App;