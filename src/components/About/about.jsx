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
                            with a strong foundation in Full-stack development
                            for crafting efficient and scalable web
                            applications. My experience spans the full
                            development lifecycle, from designing and
                            implementing user interfaces with{" "}
                            <strong>React</strong> to building robust backends
                            using <strong>Java Spring Boot</strong> and{" "}
                            <strong>Node.js</strong>.
                        </p>
                        <p>
                            Beyond development, I am an avid problem-solver,
                            demonstrated by my achievements in competitive
                            coding{" "}
                            <strong>
                                (Codeforces Specialist, Codechef 5-Star)
                            </strong>{" "}
                            and my success in hackathons, where I've developed
                            innovative solutions using cutting-edge
                            technologies, including LLMs.
                        </p>
                        <p>
                            At{" "}
                            <strong>
                                Palo Alto Networks, Inc.
                            </strong>
                            , I have a proven track record of contributing to
                            critical projects, with a focus on optimizing
                            performance and improving operational efficiency. I
                            am eager to leverage my skills and passion to tackle
                            new challenges and build impactful solutions.
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
                                <span>deepeshash444@gmail.com</span>
                            </div>
                            <div className="about__info-item">
                                <FaPhone className="about__info-icon" />
                                <span>+91-9985452459</span>
                            </div>
                            <div className="about__info-item">
                                <FaMapMarkerAlt className="about__info-icon" />
                                <span>Banglore, India</span>
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
