import React, { useState } from "react";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import emailjsConfig from "../../config/emailjs";
import "./contact.scss";

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

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Get EmailJS configuration from config file
        const { serviceId, templateId, publicKey } = emailjsConfig;

        // Prepare template parameters
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        // Send email using EmailJS
        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully:", response);
                setFormStatus({
                    submitted: true,
                    error: false,
                    message:
                        "Thank you! Your message has been sent successfully.",
                });

                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
                setFormStatus({
                    submitted: true,
                    error: true,
                    message:
                        "Oops! There was an error sending your message. Please try again later.",
                });
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title">
                        <span>&lt;</span> Contact Me <span>/&gt;</span>
                    </h2>
                    <p className="section__subtitle">
                        Get in touch with me for collaborations or opportunities
                    </p>
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
                                <span>deepeshjakkala@gmail.com</span>
                            </div>
                            <div className="contact__detail-item">
                                <FaPhone className="contact__icon" />
                                <span>+91-9985452459</span>
                            </div>
                            <div className="contact__detail-item">
                                <FaMapMarkerAlt className="contact__icon" />
                                <span>Banglore, India</span>
                            </div>
                        </div>

                        <div className="contact__socials">
                            <a
                                href="https://github.com/DeepeshDragoneel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__social"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jakkala-siva-venkata-deepesh-5a367b160/"
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
                            <button
                                type="submit"
                                className="btn"
                                disabled={isLoading}
                            >
                                {isLoading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
