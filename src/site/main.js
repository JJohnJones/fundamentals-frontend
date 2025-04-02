import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';

const Main = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [ref1, inView1] = useInView({ threshold: 1, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 1, triggerOnce: true });
    const [ref3, inView3] = useInView({ threshold: 1, triggerOnce: true });
    const [ref4, inView4] = useInView({ threshold: 1, triggerOnce: true });

    return (
        <div className="container">
            <div className="nav-container">
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
                            <a href="#" id="features" className="nav-link">Features</a>
                            <a href="#" id="support" className="nav-link">Support</a>
                            <a href="#" id="resources" className="nav-link">Resources</a>
                            <a href="#" id="pricing" className="nav-link">Pricing</a>
                        </div>
                    </div>
                </nav>
            </div>
            
            <div className="content-container">
                <section className="first-hero-container">
                    <div ref={ref1} className={`first-hero-content ${inView1 ? 'floatUp visible' : ''}`}>
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
                    <div ref={ref2} className={`why-us-card left ${inView2 ? 'floatUp visible' : ''}`}>
                        <h3>Engaging, Interactive Lessons</h3>
                        <p>Students learn financial skills through immersive gameplay.</p>
                        <p>Content here</p>
                    </div>
                    <div ref={ref3} className={`why-us-card right ${inView3 ? 'floatUp visible' : ''}`}>
                        <h3>Built-in Progress Tracking</h3>
                        <p>Monitor student performance with real-time analytics.</p>
                        <p>Content here</p>
                    </div>
                    <div ref={ref4} className={`why-us-card left ${inView4 ? 'floatUp visible' : ''}`}>
                        <h3>Designed for Educators and Students</h3>
                        <p>Easy-to-use tools tailored for classroom learning.</p>
                        <p>Content here</p>
                    </div>
                </section>
                <section className="faq">
                    <h2>Frequently Asked Questions</h2>
                    <p>How can I integrate this platform into my curriculum?</p>
                </section>
                <section className="about">
                    <div className="about-us">
                        <h2>About Us</h2>
                        <p>At FUNDamentals, we believe that financial literacy is the foundation for lifelong success. 
                        Our gamified educational platform transforms traditional financial education into an interactive 
                        and engaging experience, equipping both teachers and students with the tools they need to navigate 
                        real-world financial decisions. By integrating experiential simulations with a modular learning approach, 
                        we bridge the gap between knowledge and application, making financial literacy accessible and impactful. 
                        Designed with educators in mind, FUNDamentals is easy to implement, seamlessly integrates into classrooms, 
                        and enhances learning outcomes. With a mission to empower the next generation with financial confidence, 
                        we are redefining how financial education is taught—one interactive lesson at a time.
                        </p>
                    </div>
                    <div className="our-story">
                        <h2>Our Story</h2>
                        <p>FUNDamentals was born out of a shared passion for financial literacy and a recognition of the 
                        challenges faced by both students and teachers. Our founding team met through Ohio State’s 
                        LaunchPad, where we bonded over our personal struggles with financial education and the lack 
                        of engaging learning resources. Motivated by these shared experiences, we set out to create 
                        a solution that would make financial literacy both accessible and effective. Our journey gained 
                        momentum when we won the Best of Student Startups (BOSS) competition through the Keenan Center 
                        for Entrepreneurship, validating our vision. Now part of Boost Camp PBA, we are scaling our 
                        impact, refining our platform, and working closely with educators to ensure that every student 
                        has the knowledge and confidence to manage their financial future.
                        </p>
                    </div>
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
            </div>
            
            <div className="footer-container">
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
            
        </div>
    );
};

export default Main;
// test