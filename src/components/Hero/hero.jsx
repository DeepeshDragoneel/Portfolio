import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import Particles from "react-tsparticles";
import "./hero.scss";

const Hero = () => {
    const particlesOptions = {
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                    distance: 100,
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
                triangles: {
                    enable: false,
                    opacity: 0.1,
                },
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 50,
            },
            opacity: {
                value: 0.4,
                random: true,
            },
            shape: {
                type: "circle",
            },
            size: {
                random: true,
                value: 4,
                animation: {
                    enable: true,
                    speed: 3,
                    minimumValue: 0.1,
                    sync: false,
                },
            },
        },
        detectRetina: true,
    };

    return (
        <section id="hero" className="hero">
            <div className="hero__particles">
                <Particles id="tsparticles" options={particlesOptions} />
            </div>
            <div className="container hero__container">
                <div className="hero__content">
                    <div className="hero__greeting">Hello, I'm</div>
                    <h1 className="hero__title">
                        Jakkala Siva Venkata Deepesh
                    </h1>
                    <h2 className="hero__subtitle">Software Engineer</h2>
                    <p className="hero__description">
                        Passionate software engineer specializing in building
                        responsive web applications and solving complex problems
                        with elegant solutions.
                    </p>
                    <div className="hero__cta">
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="btn"
                        >
                            Contact Me
                        </Link>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="btn btn--outline"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>

                <div className="hero__socials">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero__social-link"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero__social-link"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:your.email@example.com"
                        className="hero__social-link"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                <div className="hero__scroll">
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <FaArrowDown />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
