import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.scss";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

    const menuItems = [
        { id: "hero", label: "Home" },
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "education", label: "Education" },
        { id: "projects", label: "Projects" },
        { id: "achievements", label: "Achievements" },
        { id: "skills", label: "Skills" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
            <div className="container navbar__container">
                <div className="navbar__logo">
                    <Link to="hero" smooth={true} duration={500} offset={-70}>
                        <span>Deepesh Jakkala</span>
                    </Link>
                </div>

                <div className="navbar__menu-toggle" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

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
