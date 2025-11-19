import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className={styles.home}>
            <div className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.greeting}>Hi, I'm <span className={styles.name}>Mahbubur Rahman</span></h1>
                        <h2 className={styles.title}>Full Stack Developer & Competitive Programmer</h2>
                        <p className={styles.description}>
                            I create beautiful, functional, and user-friendly digital experiences.
                            Passionate about competitive programming, web development, and machine learning.
                        </p>
                        <div className={styles.cta}>
                            <a
                                href="#projects"
                                className={styles.primaryBtn}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('projects');
                                }}
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className={styles.secondaryBtn}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('contact');
                                }}
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.imagePlaceholder}>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="100" cy="100" r="80" fill="#2563eb" opacity="0.1" />
                                <circle cx="100" cy="100" r="60" fill="#2563eb" opacity="0.2" />
                                <circle cx="100" cy="100" r="40" fill="#2563eb" opacity="0.3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.highlights}>
                <div className={styles.container}>
                    <div className={styles.highlightGrid}>
                        <div className={styles.highlightCard}>
                            <div className={styles.icon}>🚀</div>
                            <h3>10+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className={styles.highlightCard}>
                            <div className={styles.icon}>⭐</div>
                            <h3>3.41</h3>
                            <p>CGPA</p>
                        </div>
                        <div className={styles.highlightCard}>
                            <div className={styles.icon}>🎓</div>
                            <h3>4th Year</h3>
                            <p>CS Student</p>
                        </div>
                        <div className={styles.highlightCard}>
                            <div className={styles.icon}>🏆</div>
                            <h3>3</h3>
                            <p>Awards Won</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
