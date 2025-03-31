import React from "react";
import "./experience.scss";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Experience = () => {
    const { ref, isVisible } = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
    });

    const experiences = [
        {
            id: 1,
            title: "Software Engineer",
            company: "Palo Alto Networks, Inc.",
            location: "Banglore, India",
            period: "August 2023 - Present",
            description: [
                "Spearheaded the integration of HashiCorp Vault with Java applications deployed on Kubernetes, significantly enhancing security protocols and streamlining secret management practices across the platform.",
                "Developed and implemented automated scripts and cron jobs to proactively identify and resolve data inconsistencies within critical product databases, resulting in an 80% reduction in PO and P1 incidents and improved data integrity.",
                "Designed, developed, and deployed a full-stack application utilizing ReactJS, Spring Boot, and MySQL to provide the L2 support team with enhanced capabilities for executing and monitoring database queries, thereby increasing operational visibility and efficiency.",
                "Optimized the performance of the business events API, achieving a 75% improvement in response time and contributing to a more responsive and improved user experience.",
                "Achieved a Top 5 ranking in an internal hackathon by creating a proof of concept (POC) for automated test case generation using Large Language Models (LLMs), which included the development of a custom VS Code plugin for seamless developer integration.",
            ],
        },
        {
            id: 2,
            title: "Software Engineer Intern",
            company: "Palo Alto Networks, Inc.",
            location: "Banglore, India",
            period: "January 2023 - June 2023",
            description: [
                "Contributed to New Product Introduction (NPI) programs by developing and implementing Java Spring Boot and MySQL solutions to facilitate the seamless onboarding of new Palo Alto Networks products.",
                "Designed and developed complex scripts in JavaScript and MySQL for efficient database migrations, automating processes for L2 teams and reducing manual effort by 90%, leading to significant operational efficiency gains.",
            ],
        },
        {
            id: 3,
            title: "Software Developer Intern",
            company: "Being Zero",
            location: "Hyderabad, India",
            period: "June 2021 - August 2021",
            description: [
                "Collaborated within a team of 5+ experienced developers to contribute to the development of more than 3 software tools using Ejs, JavaScript, Node.js, and MongoDB.",
                "Gained valuable experience in professional software development practices, including teamwork, code quality, and efficient development workflows.",
            ],
        },
    ];

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title">
                        <span>&lt;</span> Professional Experience{" "}
                        <span>/&gt;</span>
                    </h2>
                    <p className="section__subtitle">
                        My work history and roles in the industry
                    </p>
                </div>

                <div
                    ref={ref}
                    className={`timeline ${isVisible ? "animate" : ""}`}
                >
                    {experiences.map((exp, index) => (
                        <div
                            className="timeline__item"
                            key={exp.id}
                            style={{ "--item-index": index + 1 }}
                        >
                            <div className="timeline__date">{exp.period}</div>
                            <h3 className="timeline__title">{exp.title}</h3>
                            <h4 className="timeline__subtitle">
                                {exp.company} | {exp.location}
                            </h4>
                            <div className="timeline__content">
                                <ul>
                                    {exp.description.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
