import React from "react";
import "./education.scss";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Education = () => {
    const { ref, isVisible } = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
    });

    const educations = [
        {
            id: 1,
            degree: "Bachelor of Technology in Computer Science and Engineering",
            institution: "CMR COLLEGE OF ENGINEERING AND TECHNOLOGY",
            location: "Hyderabad, India",
            period: "2019 - 2023",
            description:
                "Specialized in Computer Science and Engineering with a GPA of 9.1/10. President of CMR Coding Club and participated in national-level hackathons and coding competitions.",
            courses: [
                "Data Structures and Algorithms",
                "Database Management Systems",
                "Object-Oriented Programming",
                "Software Engineering",
                "Web Technologies",
                "Machine Learning",
                "Distributed Systems",
            ],
        },
        {
            id: 2,
            degree: "Intermediate (MPC)",
            institution: "FIITJEE JUNIOR COLLEGE",
            location: "Hyderabad, India",
            period: "2017 - 2019",
            description:
                "Focused on Mathematics, Physics, and Chemistry, Developed strong analytical and problem-solving skills.",
            courses: ["Physics", "Chemistry", "Mathematics"],
        },
    ];

    return (
        <section id="education" className="section education">
            <div className="container">
                <div className="section__title">
                    <h2>Education</h2>
                </div>

                <div
                    ref={ref}
                    className={`timeline ${isVisible ? "animate" : ""}`}
                >
                    {educations.map((edu, index) => (
                        <div
                            className="timeline__item"
                            key={edu.id}
                            style={{ "--item-index": index + 1 }}
                        >
                            <div className="timeline__date">{edu.period}</div>
                            <h3 className="timeline__title">{edu.degree}</h3>
                            <h4 className="timeline__subtitle">
                                {edu.institution} | {edu.location}
                            </h4>
                            <div className="timeline__content">
                                <p>{edu.description}</p>
                                <div className="education__courses">
                                    <h5>Key Courses:</h5>
                                    <ul>
                                        {edu.courses.map((course, index) => (
                                            <li key={index}>{course}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
