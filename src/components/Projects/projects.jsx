import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./projects.scss";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "PORTFOLYO",
            description:
                "Developed a platform enabling users without web development knowledge to create and customize personal portfolio websites using React, Node.js, and MongoDB.",
            image: "portfolyo.jpeg", // You'll need to add actual images in the assets folder
            tags: [
                "React",
                "SCSS",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose",
                "Docker",
                "GitHub",
            ],
            github: "https://github.com/Portfolyo-mern/portfolyo-mern",
            // demo: "https://ecommerce-demo.example.com",
        },
        {
            id: 2,
            title: "Test Forge",
            description:
                "Designed a VS Code extension that generates unit test cases using Large Language Models (LLMs), enhancing developer productivity with customizable options for specific business logic",
            image: "testForge.png",
            tags: [
                "React",
                "SCSS",
                "TypeScript",
                "Python",
                "Express.js",
                "Java",
            ],
            // github: "https://github.com/yourusername/task-manager",
            // demo: "https://task-manager-demo.example.com",
        },
        {
            id: 3,
            title: "Geek ConnecKt",
            description:
                "Built a student social network application with features like achievement posting and chat, facilitating communication within a specific institution using React, GraphQL, and MongoDB.",
            image: "geekConnect.png",
            tags: [
                "React",
                "SCSS",
                "JavaScript",
                "GraphQL",
                "Cloudinary",
                "Redis",
                "Express.js",
                "MongoDB",
                "GitHub",
            ],
            github: "https://github.com/team-array",
            // demo: "https://chat-app-demo.example.com",
        },
        {
            id: 4,
            title: "Annotate-Js",
            description:
                "Developed Annotate-Js, a JavaScript library that allows users to annotate directly over web pages, implemented with TypeScript, Node.js, and AWS-RDS (MySQL)",
            image: "annotateJs.png",
            tags: [
                "TypeScript",
                "Node.js",
                "AWS-RDS",
                "MySQL",
                "Redis",
                "Jest",
                "React",
            ],
            github: "https://github.com/DeepeshDragoneel/Annotate-Js",
            demo: "https://deepeshdragoneel.github.io/AnnotateJsMainPage/",
        },
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title">
                        <span>&lt;</span> Projects <span>/&gt;</span>
                    </h2>
                    <p className="section__subtitle">
                        A showcase of my recent development work
                    </p>
                </div>

                <div className="projects__grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-card__image-container">
                                <img
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                        boxShadow:
                                            "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                                        display: project.image
                                            ? "block"
                                            : "none",
                                    }}
                                    src={require(`../../assets/${project.image}`)}
                                    alt={project.title}
                                    className="project-card__image"
                                />
                            </div>
                            <h3 className="project-card__title">
                                {project.title}
                            </h3>
                            <div className="project-card__tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                            <p className="project-card__description">
                                {project.description}
                            </p>
                            <div className="project-card__links">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn--outline btn--small"
                                    style={{
                                        display: project.github
                                            ? "block"
                                            : "none",
                                    }}
                                >
                                    <FaGithub /> Code
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn--small"
                                    style={{
                                        display: project.demo
                                            ? "block"
                                            : "none",
                                    }}
                                >
                                    <FaExternalLinkAlt /> Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
