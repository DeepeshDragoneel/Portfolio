import React, { useState, useEffect } from "react";
// import Navbar from "./components-cyberpunk/Navbar/navbar";
// import Hero from "./components-cyberpunk/Hero/hero";
// import About from "./components-cyberpunk/About/about";
// import Experience from "./components-cyberpunk/Experience/experience";
// import Education from "./components-cyberpunk/Education/education";
// import Projects from "./components-cyberpunk/Projects/projects";
// import Achievements from "./components-cyberpunk/Achievements/achievements";
// import Skills from "./components-cyberpunk/Skills/skills";
// import Contact from "./components-cyberpunk/Contact/contact";
// import Footer from "./components-cyberpunk/Footer/footer";
// import ScrollToTop from "./components-cyberpunk/ScrollToTop/scrollToTop";

// Enhanced cyber section divider
const SectionDivider = ({ sectionName }) => (
    <div className="section-divider">
        <span className="section-divider__text">{sectionName}</span>
    </div>
);

function App() {
    const [loading, setLoading] = useState(true);
    const [isCyberpunk, setIsCyberpunk] = useState(
        localStorage.getItem("isCyberpunk") === "true"
    );
    const [components, setComponents] = useState({});

    useEffect(() => {
        // Simulate loading
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        if (isCyberpunk) {
            import("./scss/main-cyberpunk.scss");
        } else {
            import("./scss/main.scss");
        }

        // Dynamically import components based on theme
        const componentsPath = isCyberpunk
            ? "./components-cyberpunk"
            : "./components";

        // Dynamic imports for all components
        const importComponents = async () => {
            const [
                NavbarModule,
                HeroModule,
                AboutModule,
                ExperienceModule,
                EducationModule,
                ProjectsModule,
                AchievementsModule,
                SkillsModule,
                ContactModule,
                FooterModule,
                ScrollToTopModule,
            ] = await Promise.all([
                import(`${componentsPath}/Navbar/navbar`),
                import(`${componentsPath}/Hero/hero`),
                import(`${componentsPath}/About/about`),
                import(`${componentsPath}/Experience/experience`),
                import(`${componentsPath}/Education/education`),
                import(`${componentsPath}/Projects/projects`),
                import(`${componentsPath}/Achievements/achievements`),
                import(`${componentsPath}/Skills/skills`),
                import(`${componentsPath}/Contact/contact`),
                import(`${componentsPath}/Footer/footer`),
                import(`${componentsPath}/ScrollToTop/scrollToTop`),
            ]);

            setComponents({
                Navbar: NavbarModule.default,
                Hero: HeroModule.default,
                About: AboutModule.default,
                Experience: ExperienceModule.default,
                Education: EducationModule.default,
                Projects: ProjectsModule.default,
                Achievements: AchievementsModule.default,
                Skills: SkillsModule.default,
                Contact: ContactModule.default,
                Footer: FooterModule.default,
                ScrollToTop: ScrollToTopModule.default,
            });
        };

        importComponents();
    }, [isCyberpunk]);

    if (loading) {
        return isCyberpunk ? (
            <div className="loading">
                <div className="loading__spinner"></div>
                <p className="loading__text">Initializing System</p>
            </div>
        ) : (
            <div className="loading">
                <div className="loading__spinner"></div>
                <p className="loading__text">Loading...</p>
            </div>
        );
    }

    // Toggle theme function
    const toggleTheme = () => {
        console.log("Toggling theme");
        console.log(isCyberpunk);
        window.location.reload();
        localStorage.setItem("isCyberpunk", !isCyberpunk);
    };

    // If components aren't loaded yet, show a loading screen
    if (Object.keys(components).length === 0) {
        return (
            <div className="loading">
                <div className="loading__spinner"></div>
                <p className="loading__text">Loading Theme...</p>
            </div>
        );
    }

    const {
        Navbar,
        Hero,
        About,
        Experience,
        Education,
        Projects,
        Achievements,
        Skills,
        Contact,
        Footer,
        ScrollToTop,
    } = components;

    return (
        <div className={`app ${isCyberpunk ? "cyberpunk-theme" : ""}`}>
            <button
                className={`theme-toggle theme-toggle--topright ${
                    isCyberpunk
                        ? "theme-toggle--cyber"
                        : "theme-toggle--classic"
                }`}
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                <span className="theme-toggle__icon">
                    {isCyberpunk ? (
                        <code>&lt;/&gt;</code>
                    ) : (
                        <code>&#123;&#125;</code>
                    )}
                </span>
                <span className="theme-toggle__text">
                    {isCyberpunk ? (
                        <>
                            mode: <code>classic</code>
                        </>
                    ) : (
                        <>
                            mode: <code>cyber</code>
                        </>
                    )}
                </span>
            </button>
            <Navbar />
            <Hero />

            {isCyberpunk ? (
                <>
                    <div className="cyberpunk-section cyberpunk-section--about bg-pattern-dots">
                        <About />
                    </div>
                    <SectionDivider sectionName="01" />
                    <div className="cyberpunk-section cyberpunk-section--experience bg-pattern-circuit">
                        <Experience />
                    </div>
                    <SectionDivider sectionName="02" />
                    <div className="cyberpunk-section cyberpunk-section--education bg-pattern-grid">
                        <Education />
                    </div>
                    <SectionDivider sectionName="03" />
                    <div className="cyberpunk-section cyberpunk-section--projects bg-pattern-hexagon">
                        <Projects />
                    </div>
                    <SectionDivider sectionName="04" />
                    <div className="cyberpunk-section cyberpunk-section--achievements bg-pattern-waves">
                        <Achievements />
                    </div>
                    <SectionDivider sectionName="05" />
                    <div className="cyberpunk-section cyberpunk-section--skills bg-pattern-dots">
                        <Skills />
                    </div>
                    <SectionDivider sectionName="06" />
                    <div className="cyberpunk-section cyberpunk-section--contact bg-pattern-circuit">
                        <Contact />
                    </div>
                </>
            ) : (
                <>
                    <About />
                    <SectionDivider />
                    <Experience />
                    <SectionDivider />
                    <Education />
                    <SectionDivider />
                    <Projects />
                    <SectionDivider />
                    <Achievements />
                    <SectionDivider />
                    <Skills />
                    <SectionDivider />
                    <Contact />
                </>
            )}

            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App;
