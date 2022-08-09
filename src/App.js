import React from "react";
import Navegation from "./Navegation/Navegation";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Courses from "./Courses/Courses";

const App = () => {
    return (
        <div className="app">
            <Navegation />
            <Hero />
            <About />
            <Projects />
            <Courses />
            <Contact />
        </div>
    )
}

export default App;