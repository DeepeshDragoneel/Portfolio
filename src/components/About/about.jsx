import React from "react";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaCode,
    FaLaptopCode,
    FaServer,
} from "react-icons/fa";
import profile from "../../assets/DeepeshProfilePicture1.jpeg";
import "./about.scss";

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="section__title">
                    <h2>About Me</h2>
                </div>

                <div className="about__content">
                    <div className="about__image-container">
                        <div className="about__image">
                            <img
                                src={profile}
                                alt="Jakkala Siva Venkata Deepesh"
                            />
                        </div>
                    </div>

                    <div className="about__text">
                        <p>
                            I am a passionate <strong>Software Engineer</strong>{" "}
                            with a strong foundation in full-stack development.
                            My expertise spans across front-end technologies
                            like <strong>React</strong> and{" "}
                            <strong>Angular</strong>, as well as back-end
                            frameworks including <strong>Node.js</strong> and{" "}
                            <strong>Express</strong>.
                        </p>
                        <p>
                            With a proven track record of delivering
                            high-quality software solutions, I'm dedicated to
                            writing clean, maintainable code that solves complex
                            problems efficiently. I thrive in collaborative
                            environments and enjoy tackling challenging projects
                            that push the boundaries of what's possible with
                            modern web technologies.
                        </p>
                        <p>
                            My approach to software development combines
                            technical expertise with a user-centered mindset,
                            ensuring that the applications I build not only
                            function flawlessly but also provide exceptional
                            user experiences.
                        </p>

                        <div className="about__highlights">
                            <div className="about__highlight-item">
                                <div className="about__highlight-icon">
                                    <FaCode />
                                </div>
                                <div className="about__highlight-content">
                                    <h3>Front-end Development</h3>
                                    <p>
                                        Creating responsive and intuitive user
                                        interfaces using modern frameworks
                                    </p>
                                </div>
                            </div>
                            <div className="about__highlight-item">
                                <div className="about__highlight-icon">
                                    <FaServer />
                                </div>
                                <div className="about__highlight-content">
                                    <h3>Back-end Development</h3>
                                    <p>
                                        Building robust, scalable APIs and
                                        server-side applications
                                    </p>
                                </div>
                            </div>
                            <div className="about__highlight-item">
                                <div className="about__highlight-icon">
                                    <FaLaptopCode />
                                </div>
                                <div className="about__highlight-content">
                                    <h3>Full-stack Solutions</h3>
                                    <p>
                                        Designing and implementing end-to-end
                                        web applications
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="about__info">
                            <div className="about__info-item">
                                <FaEnvelope className="about__info-icon" />
                                <span>jakkala.deepesh@example.com</span>
                            </div>
                            <div className="about__info-item">
                                <FaPhone className="about__info-icon" />
                                <span>+1 (123) 456-7890</span>
                            </div>
                            <div className="about__info-item">
                                <FaMapMarkerAlt className="about__info-icon" />
                                <span>San Francisco, CA</span>
                            </div>
                            <div className="about__info-item">
                                <FaCalendarAlt className="about__info-icon" />
                                <span>Available for new opportunities</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
