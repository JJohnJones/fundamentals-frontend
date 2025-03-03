import React, { useState } from "react";

const Main = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container">
            <nav className={`nav ${menuOpen ? "expanded" : ""}`}>
                <div className="nav-left">
                    <a href="#" className="nav-link nav-left-logo">FUNDamentals</a>
                    <div className="nav-links">
                        <a href="#" className="nav-link nav-left-link">Demos</a>
                        <a href="#" className="nav-link nav-left-link">Blog</a>
                        <a href="#" className="nav-link nav-left-link">Support</a>
                        <a href="#" className="nav-link nav-left-link">Pricing</a>
                    </div>
                </div>
                <div className="nav-right">
                    <a href="#" className="nav-link nav-right-link">Teacher Login</a>
                    <a href="#" className="nav-link nav-right-link sign-up">Sign up</a>
                    <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                        <button className="sign-up">Sign Up</button>
                        <button className="log-in">Teacher Login</button>
                        <a href="#" className="nav-link">Demos</a>
                        <a href="#" className="nav-link">Blog</a>
                        <a href="#" className="nav-link">Support</a>
                        <a href="#" className="nav-link">Pricing</a>
                    </div>
                </div>
            </nav>
            <section className="first-hero-container">
                <div className="first-hero-content">
                    <h1>Finance Made Fun</h1>
                    <p>Gamify financial education with interactive, browser-based lessons designed for classrooms.</p>
                    <div className="hero-buttons">
                        <button className="view-demo">View Demo</button>
                        <button className="sign-up">Sign Up</button>
                    </div>
                </div>
            </section>
            <section className="second-hero">
                <h2>How It Works</h2>
                <p>Teachers can create accounts, assign gamified financial challenges, and track student progress in real-time.</p>
            </section>
            <section className="why-us">
                <h2>Why Choose FUNDamentals?</h2>
                <ul>
                    <li>Engaging, interactive lessons</li>
                    <li>Built-in progress tracking</li>
                    <li>Designed for educators and students</li>
                </ul>
            </section>
            <section className="faq">
                <h2>Frequently Asked Questions</h2>
                <p>How can I integrate this platform into my curriculum?</p>
            </section>
            <section className="about">
                <h2>About Us</h2>
                <p>We believe in making financial literacy fun and accessible for students everywhere.</p>
            </section>
            <section className="contact">
                <h2>Contact Us</h2>
                <p>Need support or have questions? Reach out to our team.</p>
            </section>
            <section className="surveys">
                <h2>Teacher Feedback</h2>
                <p>Help us improve by sharing your classroom experiences.</p>
            </section>
            <section className="blog">
                <h2>Latest Insights</h2>
                <p>Read about innovative teaching strategies and financial education trends.</p>
            </section>
            <footer className="footer">
                <div className="links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">For Schools</a></li>
                    </ul>
                </div>
                <div className="socials">
                    <h3>Follow Us</h3>
                    <p>Join our community of educators.</p>
                </div>
            </footer>
        </div>
    );
};

export default Main;
