import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>About Me</h1>
                    <p className={styles.subtitle}>Get to know me better</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.textSection}>
                        <h2>Hello! I'm Mahbubur Rahman</h2>
                        <p>
                            I'm a passionate Computer Science student at United International University, currently in my 4th year.
                            I'm a competitive programmer and Full-stack web developer with experience working on over 10+ projects.
                            I specialize in creating elegant, efficient, and user-friendly applications using modern technologies.
                        </p>
                        <p>
                            My interests span across competitive programming, full-stack web development, software testing,
                            and machine learning. I'm constantly learning and growing, working on projects ranging from
                            small applications to large-scale enterprise solutions.
                        </p>
                        <p>
                            When I'm not coding, you can find me gaming, traveling to new places, or capturing moments
                            through photography. I'm always eager to take on new challenges and contribute to innovative projects.
                        </p>

                        <div className={styles.infoGrid}>
                            <div className={styles.infoItem}>
                                <strong>Location:</strong>
                                <span>Dhaka, Bangladesh</span>
                            </div>
                            <div className={styles.infoItem}>
                                <strong>Email:</strong>
                                <span>mrahman623a@gmail.com</span>
                            </div>
                            <div className={styles.infoItem}>
                                <strong>Phone:</strong>
                                <span>01744177620</span>
                            </div>
                            <div className={styles.infoItem}>
                                <strong>CGPA:</strong>
                                <span>0.0/4.0</span>
                            </div>
                        </div>

                        <div className={styles.interests}>
                            <h3>Interests & Hobbies</h3>
                            <p className={styles.interestText}>
                                Competitive Programming, Full-Stack Development, Software Testing, Machine Learning,
                                Gaming, Travel, Photography
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
