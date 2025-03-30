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

// Enhanced cyber section divider
const SectionDivider = ({ sectionName }) => (
    <div className="section-divider">
        <span className="section-divider__text">{sectionName || "</>"}</span>
    </div>
);

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
                <p className="loading__text">Initializing System</p>
            </div>
        );
    }

    return (
        <div className="app cyberpunk-theme">
            <Navbar />
            <Hero />
            <div className="cyberpunk-section cyberpunk-section--about bg-pattern-dots">
                <About />
            </div>
            <SectionDivider sectionName="01" />
            <div className="cyberpunk-section cyberpunk-section--experience bg-pattern-circuit">
                <Experience />
            </div>
            <SectionDivider sectionName="02" />
            <div className="cyberpunk-section cyberpunk-section--education bg-pattern-grid">
                <Education />
            </div>
            <SectionDivider sectionName="03" />
            <div className="cyberpunk-section cyberpunk-section--projects bg-pattern-hexagon">
                <Projects />
            </div>
            <SectionDivider sectionName="04" />
            <div className="cyberpunk-section cyberpunk-section--achievements bg-pattern-waves">
                <Achievements />
            </div>
            <SectionDivider sectionName="05" />
            <div className="cyberpunk-section cyberpunk-section--skills bg-pattern-dots">
                <Skills />
            </div>
            <SectionDivider sectionName="06" />
            <div className="cyberpunk-section cyberpunk-section--contact bg-pattern-circuit">
                <Contact />
            </div>
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App;
