import React from "react";
import { FaTrophy, FaMedal, FaCertificate, FaAward } from "react-icons/fa";

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: "Outstanding Contribution Award",
            organization: "Tech Innovations Inc.",
            year: "2023",
            description:
                "Recognized for exceptional leadership in migrating the company's core platform to a microservices architecture, resulting in 35% improved system reliability.",
            icon: <FaTrophy className="achievement__icon trophy" />,
        },
        {
            id: 2,
            title: "AWS Certified Solutions Architect",
            organization: "Amazon Web Services",
            year: "2022",
            description:
                "Achieved professional-level certification demonstrating expertise in designing distributed systems on AWS.",
            icon: <FaCertificate className="achievement__icon certificate" />,
        },
        {
            id: 3,
            title: "Hackathon Winner",
            organization: "TechCrunch Disrupt",
            year: "2021",
            description:
                "Led a team of 4 developers to victory by building an innovative AI-powered accessibility tool for visually impaired users.",
            icon: <FaMedal className="achievement__icon medal" />,
        },
        {
            id: 4,
            title: "Open Source Contributor",
            organization: "React Community",
            year: "2020-Present",
            description:
                "Active contributor to several popular open-source React libraries with over 20 accepted pull requests.",
            icon: <FaAward className="achievement__icon award" />,
        },
    ];

    return (
        <section id="achievements" className="section achievements">
            <div className="container">
                <div className="section__title">
                    <h2>Achievements</h2>
                </div>

                <div className="achievements__grid">
                    {achievements.map((achievement) => (
                        <div className="achievement-card" key={achievement.id}>
                            <div className="achievement-card__icon">
                                {achievement.icon}
                            </div>
                            <div className="achievement-card__content">
                                <h3 className="achievement-card__title">
                                    {achievement.title}
                                </h3>
                                <div className="achievement-card__meta">
                                    {achievement.organization} |{" "}
                                    {achievement.year}
                                </div>
                                <p className="achievement-card__description">
                                    {achievement.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
