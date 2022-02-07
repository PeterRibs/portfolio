import React from "react";
import Navegation from "./Navegation/Navegation";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

function App(){
    return (
        <div>
            <Navegation />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default App;