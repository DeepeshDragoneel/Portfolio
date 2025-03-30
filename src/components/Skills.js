import React from "react";

const Skills = () => {
    const skillCategories = [
        {
            id: 1,
            category: "Programming Languages",
            skills: [
                "JavaScript",
                "TypeScript",
                "Python",
                "Java",
                "C++",
                "PHP",
                "HTML5",
                "CSS3/SCSS",
            ],
        },
        {
            id: 2,
            category: "Front-end",
            skills: [
                "React",
                "Redux",
                "Vue.js",
                "Angular",
                "Next.js",
                "Material UI",
                "TailwindCSS",
                "Bootstrap",
            ],
        },
        {
            id: 3,
            category: "Back-end",
            skills: [
                "Node.js",
                "Express",
                "Django",
                "Spring Boot",
                "Laravel",
                "GraphQL",
                "RESTful APIs",
            ],
        },
        {
            id: 4,
            category: "Database",
            skills: [
                "MongoDB",
                "PostgreSQL",
                "MySQL",
                "Firebase",
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
                "Terraform",
            ],
        },
        {
            id: 6,
            category: "Other",
            skills: [
                "Git",
                "Agile/Scrum",
                "Jest",
                "Mocha",
                "WebSockets",
                "microservices",
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
