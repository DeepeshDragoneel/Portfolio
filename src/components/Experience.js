import React from "react";

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Senior Software Engineer",
            company: "Tech Innovations Inc.",
            location: "San Francisco, CA",
            period: "June 2021 - Present",
            description: [
                "Lead development of scalable microservices architecture using Node.js and Express",
                "Spearheaded migration from monolithic architecture to microservices, improving system reliability by 35%",
                "Mentored junior developers and conducted code reviews to ensure code quality and best practices",
                "Collaborated with product managers and UX designers to deliver features that exceeded client expectations",
            ],
        },
        {
            id: 2,
            title: "Software Engineer",
            company: "Digital Solutions LLC",
            location: "Seattle, WA",
            period: "March 2019 - May 2021",
            description: [
                "Developed and maintained RESTful APIs using Node.js and Express",
                "Implemented responsive web applications using React and Redux",
                "Collaborated with cross-functional teams to define and implement new features",
                "Optimized database queries and improved application performance by 40%",
            ],
        },
        {
            id: 3,
            title: "Junior Developer",
            company: "WebTech Innovations",
            location: "Boston, MA",
            period: "May 2017 - February 2019",
            description: [
                "Assisted in developing front-end components using React and CSS",
                "Implemented unit tests using Jest and Enzyme to ensure code reliability",
                "Participated in Agile development cycles and daily stand-up meetings",
                "Fixed bugs and implemented minor features in existing applications",
            ],
        },
    ];

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <div className="section__title">
                    <h2>Professional Experience</h2>
                </div>

                <div className="timeline">
                    {experiences.map((exp) => (
                        <div className="timeline__item" key={exp.id}>
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
