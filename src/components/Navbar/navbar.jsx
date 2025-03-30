import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaCode, FaTerminal } from "react-icons/fa";
import "./navbar.scss";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if the screen is mobile size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkMobile();

        // Add resize listener
        window.addEventListener("resize", checkMobile);

        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Close menu when clicking outside on mobile
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuOpen && !e.target.closest(".navbar__container")) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menuOpen]);

    const menuItems = [
        { id: "hero", label: "Home", icon: <FaCode /> },
        { id: "about", label: "About", icon: <FaTerminal /> },
        { id: "experience", label: "Experience", icon: <FaTerminal /> },
        { id: "education", label: "Education", icon: <FaTerminal /> },
        { id: "projects", label: "Projects", icon: <FaTerminal /> },
        { id: "achievements", label: "Achievements", icon: <FaTerminal /> },
        { id: "skills", label: "Skills", icon: <FaTerminal /> },
        { id: "contact", label: "Contact", icon: <FaTerminal /> },
    ];

    return (
        <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
            <div className="container navbar__container">
                <div className="navbar__logo">
                    <Link to="hero" smooth={true} duration={500} offset={-70}>
                        <span>DEEPESH.DEV</span>
                    </Link>
                </div>

                {isMobile && (
                    <div className="navbar__menu-toggle" onClick={toggleMenu}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                )}

                <ul
                    className={`navbar__menu ${
                        menuOpen ? "navbar__menu--open" : ""
                    }`}
                >
                    {menuItems.map((item) => (
                        <li key={item.id} className="navbar__item">
                            <Link
                                to={item.id}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="navbar__link"
                                activeClass="navbar__link--active"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.icon && (
                                    <span className="navbar__icon">
                                        {item.icon}
                                    </span>
                                )}
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
