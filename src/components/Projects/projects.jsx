import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./projects.scss";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description:
                "A full-stack e-commerce application with product catalog, shopping cart, user authentication, and payment processing.",
            image: "ecommerce.jpg", // You'll need to add actual images in the assets folder
            tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
            github: "https://github.com/yourusername/ecommerce",
            demo: "https://ecommerce-demo.example.com",
        },
        {
            id: 2,
            title: "Task Management System",
            description:
                "A collaborative task management system with real-time updates, task assignments, and progress tracking.",
            image: "task-manager.jpg",
            tags: ["React", "Redux", "Firebase", "Material UI"],
            github: "https://github.com/yourusername/task-manager",
            demo: "https://task-manager-demo.example.com",
        },
        {
            id: 3,
            title: "Real-time Chat Application",
            description:
                "A real-time chat application supporting private messaging, group chats, and file sharing.",
            image: "chat-app.jpg",
            tags: ["React", "Socket.io", "Express", "MongoDB"],
            github: "https://github.com/yourusername/chat-app",
            demo: "https://chat-app-demo.example.com",
        },
        {
            id: 4,
            title: "Weather Forecast App",
            description:
                "A responsive weather application displaying current conditions and 7-day forecasts for any location.",
            image: "weather-app.jpg",
            tags: ["React", "OpenWeather API", "Chart.js", "SCSS"],
            github: "https://github.com/yourusername/weather-app",
            demo: "https://weather-app-demo.example.com",
        },
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <div className="section__title">
                    <h2>Projects</h2>
                </div>

                <div className="projects__grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-card__image-container">
                                {/* Replace with actual images later */}
                                <div className="project-card__image-placeholder"></div>
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
                                >
                                    <FaGithub /> Code
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn--small"
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
