import React from "react";

const Education = () => {
    const educations = [
        {
            id: 1,
            degree: "Master of Science in Computer Science",
            institution: "Stanford University",
            location: "Stanford, CA",
            period: "2015 - 2017",
            description:
                'Specialized in Artificial Intelligence and Machine Learning. Completed thesis on "Deep Learning Approaches for Natural Language Processing" with a GPA of 3.9/4.0.',
            courses: [
                "Advanced Algorithms",
                "Machine Learning",
                "Natural Language Processing",
                "Distributed Systems",
                "Database Management Systems",
            ],
        },
        {
            id: 2,
            degree: "Bachelor of Technology in Computer Science",
            institution: "Indian Institute of Technology",
            location: "Mumbai, India",
            period: "2011 - 2015",
            description:
                "Graduated with a First Class Honors. Active member of the Programming Club and participated in national-level hackathons.",
            courses: [
                "Data Structures and Algorithms",
                "Object-Oriented Programming",
                "Computer Networks",
                "Operating Systems",
                "Web Development",
            ],
        },
    ];

    return (
        <section id="education" className="section education">
            <div className="container">
                <div className="section__title">
                    <h2>Education</h2>
                </div>

                <div className="timeline">
                    {educations.map((edu) => (
                        <div className="timeline__item" key={edu.id}>
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
