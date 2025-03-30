import React, { useState } from "react";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would handle form submission to a backend
        console.log("Form submitted:", formData);

        // Simulate successful submission
        setFormStatus({
            submitted: true,
            error: false,
            message: "Thank you! Your message has been sent successfully.",
        });

        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="section__title">
                    <h2>Contact Me</h2>
                </div>

                <div className="contact__container">
                    <div className="contact__info">
                        <h3>Get In Touch</h3>
                        <p>
                            Feel free to reach out if you want to collaborate on
                            a project, have a job opportunity, or simply want to
                            connect!
                        </p>

                        <div className="contact__details">
                            <div className="contact__detail-item">
                                <FaEnvelope className="contact__icon" />
                                <span>jakkala.deepesh@example.com</span>
                            </div>
                            <div className="contact__detail-item">
                                <FaPhone className="contact__icon" />
                                <span>+1 (123) 456-7890</span>
                            </div>
                            <div className="contact__detail-item">
                                <FaMapMarkerAlt className="contact__icon" />
                                <span>San Francisco, CA</span>
                            </div>
                        </div>

                        <div className="contact__socials">
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__social"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__social"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://twitter.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__social"
                            >
                                <FaTwitter />
                            </a>
                        </div>
                    </div>

                    <div className="contact__form-container">
                        <form className="contact__form" onSubmit={handleSubmit}>
                            {formStatus.submitted && (
                                <div
                                    className={`contact__form-status ${
                                        formStatus.error ? "error" : "success"
                                    }`}
                                >
                                    {formStatus.message}
                                </div>
                            )}
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
