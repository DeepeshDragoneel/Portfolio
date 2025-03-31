import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaArrowDown,
    FaFileDownload,
    FaEnvelopeOpen,
    FaLaptopCode,
    FaTerminal,
    FaCode,
} from "react-icons/fa";
import resumePDF from "../../assets/Jakkala_Siva_Venkata_Deepesh.pdf";
import "./hero.scss";

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Matrix characters - mix of symbols and digits
        const characters =
            "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲ<>/\\[]{}#$%^&*()+=".split(
                ""
            );

        const fontSize = 14;
        const columns = Math.floor(width / fontSize);

        // Array to store the position of each character
        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * -100);
        }

        // Function to calculate the brightness for a column
        const getBrightness = (column) => {
            // Characters at the front should be brighter
            return 0.3 + Math.random() * 0.3;
        };

        // Drawing the characters
        function draw() {
            // Set background with alpha to create trail effect
            ctx.fillStyle = "rgba(10, 10, 15, 0.05)";
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i < drops.length; i++) {
                // Generate a random character
                const text =
                    characters[Math.floor(Math.random() * characters.length)];

                // Get brightness for this column
                const brightness = getBrightness(i);

                // Set color to green with random brightness
                ctx.fillStyle = `rgba(0, 255, 170, ${brightness})`;
                ctx.font = `${fontSize}px monospace`;

                // Draw the character
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Move drops down
                drops[i]++;

                // If a drop has hit the bottom, reset with random start position
                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = Math.floor(Math.random() * -100);
                }
            }
        }

        // Animation loop
        const interval = setInterval(draw, 35);

        // Handle window resize
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;

            // Recalculate columns
            const newColumns = Math.floor(width / fontSize);

            // Reset drops if needed
            if (newColumns !== drops.length) {
                drops.length = 0;
                for (let i = 0; i < newColumns; i++) {
                    drops[i] = Math.floor(Math.random() * -100);
                }
            }
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="hero__background">
                <canvas ref={canvasRef} className="matrix-canvas"></canvas>
            </div>
            <div className="container hero__container">
                <div className="hero__content">
                    <div className="hero__greeting">Hello, I'm</div>
                    <h1 className="hero__title">
                        Jakkala Siva Venkata Deepesh
                    </h1>
                    <h2 className="hero__subtitle">
                        {"</>"} Software Developer {"</>"}
                    </h2>
                    <p className="hero__description">
                        A Dynamic Full Stack Web Developer, Competitive Coder,
                        and aspiring AI Engineer, building innovative solutions
                        across diverse domains.
                    </p>
                    <div className="hero__cta">
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="btn btn--contact"
                        >
                            <FaTerminal className="btn-icon" /> {">>"}{" "}
                            Contact_Me
                        </Link>
                        <a
                            href={resumePDF}
                            download="Jakkala_Siva_Venkata_Deepesh_Resume.pdf"
                            className="btn btn--resume"
                        >
                            <FaFileDownload className="btn-icon" /> GET
                            resume.pdf
                        </a>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="btn btn--projects"
                        >
                            <FaCode className="btn-icon" /> ./view_projects
                        </Link>
                    </div>
                </div>

                <div className="hero__socials">
                    <a
                        href="https://github.com/DeepeshDragoneel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero__social-link"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jakkala-siva-venkata-deepesh-5a367b160/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero__social-link"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:deepeshash444@gmail.com"
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
