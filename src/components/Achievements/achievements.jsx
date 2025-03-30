import React from "react";
import { FaTrophy, FaMedal, FaCertificate, FaAward } from "react-icons/fa";
import "./achievements.scss";

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: "Winner of Smart India Hackathon",
            organization: "Government of India",
            year: "2022",
            description:
                "Won the Smart India Hackathon 2022 Software Edition, a national-level hackathon, for developing an innovative software solution to address a real-world problem.",
            icon: <FaTrophy className="achievement-card__icon trophy" />,
        },
        {
            id: 2,
            title: "AWS Certified Cloud Practitioner",
            organization: "Amazon Web Services",
            year: "2024",
            description:
                "Obtained the AWS Certified Cloud Practitioner certification, validating foundational knowledge of AWS cloud services and best practices",
            icon: (
                <FaCertificate className="achievement-card__icon certificate" />
            ),
        },
        {
            id: 3,
            title: "Highest rating of 1450 Specialist at Codeforces, and 2018-5 Star at Codechef",
            organization: "Codeforces and Codechef",
            year: "Current",
            description:
                "Achieved a top rating of 1450 (Specialist) on Codeforces and a 5-Star rating on Codechef, demonstrating strong problem-solving and algorithmic skills in competitive programming",
            icon: <FaAward className="achievement-card__icon award" />,
        },
        {
            id: 4,
            title: "Ranked 821 (Country-wise ranking) in Google HashCode 2022",
            organization: "Google",
            year: "2022",
            description:
                "Participated in Google HashCode 2022, a global coding competition, where I ranked 821 (Country-wise ranking) among over 100,000 participants",
            icon: <FaMedal className="achievement-card__icon medal" />,
        },
    ];

    return (
        <section id="achievements" className="section achievements">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title">
                        <span>&lt;</span> Achievements <span>/&gt;</span>
                    </h2>
                    <p className="section__subtitle">
                        Recognition and accomplishments in my career
                    </p>
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
