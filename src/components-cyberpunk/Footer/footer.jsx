import React from "react";
import { Link } from "react-scroll";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaMedium,
    FaEnvelope,
    FaArrowUp,
} from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__logo">
                        <h2>Deepesh</h2>
                        <p>Software Engineer</p>
                    </div>

                    <nav className="footer__nav">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <Link
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="experience"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                >
                                    Experience
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="projects"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="footer__social">
                        <h3>Connect With Me</h3>
                        <div className="footer__social-icons">
                            <a
                                href="https://github.com/DeepeshDragoneel"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jakkala-siva-venkata-deepesh-5a367b160/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://twitter.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter />
                            </a>
                            <a href="mailto:deepeshash444@gmail.com">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>
                        &copy; {currentYear} Jakkala Siva Venkata Deepesh. All
                        rights reserved.
                    </p>
                    {/* <Link
                        to="hero"
                        className="footer__scroll-top"
                        smooth={true}
                        duration={800}
                        offset={-70}
                    >
                        <FaArrowUp />
                    </Link> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
