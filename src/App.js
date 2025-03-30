import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./scss/main.scss";

// Simple section divider component
const SectionDivider = () => <div className="section-divider"></div>;

// Scroll to top button component
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`scroll-to-top ${isVisible ? "visible" : ""}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <FaArrowUp />
        </button>
    );
};

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
                <p>Loading...</p>
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
