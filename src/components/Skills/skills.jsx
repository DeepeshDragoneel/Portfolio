import React from "react";
import "./skills.scss";

const Skills = () => {
    const skillCategories = [
        {
            id: 1,
            category: "Programming Languages",
            skills: [
                "JavaScript",
                "TypeScript",
                "C/C++",
                "Python",
                "Java",
            ],
        },
        {
            id: 2,
            category: "Front-end",
            skills: [
                "HTML5",
                "CSS3/SCSS",
                "React",
                "Redux",
                "Jquery",
                "Material UI",
                "Flutter",
            ],
        },
        {
            id: 3,
            category: "Back-end",
            skills: [
                "Node.js",
                "Express.js",
                "Spring Boot",
                "GraphQL",
                "RESTful APIs",
            ],
        },
        {
            id: 4,
            category: "Databases",
            skills: [
                "MongoDB",
                "PostgreSQL",
                "MySQL",
                "Redis",
                "Elasticsearch",
            ],
        },
        {
            id: 5,
            category: "DevOps & Cloud",
            skills: [
                "AWS",
                "Docker",
                "Kubernetes",
                "CI/CD",
                "GitHub Actions",
                "Jenkins",
                "Digital Ocean",
            ],
        },
        {
            id: 6,
            category: "Other",
            skills: [
                "Git",
                "Agile/Scrum",
                "Jest",
                "WebSockets",
                "Microservices",
                "System Design",
            ],
        },
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <div className="section__title">
                    <h2>Technical Skills</h2>
                </div>

                <div className="skills-container">
                    {skillCategories.map((category) => (
                        <div className="skill-category" key={category.id}>
                            <h3 className="skill-category__title">
                                {category.category}
                            </h3>
                            <div className="skills">
                                {category.skills.map((skill, index) => (
                                    <span className="skills__item" key={index}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
