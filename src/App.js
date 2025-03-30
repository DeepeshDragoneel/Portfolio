import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";
import Education from "./components/Education/education";
import Projects from "./components/Projects/projects";
import Achievements from "./components/Achievements/achievements";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import ScrollToTop from "./components/ScrollToTop/scrollToTop";
import "./scss/main.scss";

// Simple section divider component
const SectionDivider = () => <div className="section-divider"></div>;

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <div className="loading__spinner"></div>
                <p className="loading__text">Loading...</p>
            </div>
        );
    }

    return (
        <div className="app">
            <Navbar />
            <Hero />
            <About />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Education />
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <Achievements />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Contact />
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App;
