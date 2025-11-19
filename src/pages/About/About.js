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
                        <h2>Hello! I'm John Doe</h2>
                        <p>
                            I'm a passionate Full Stack Developer with over 5 years of experience in building
                            web applications and digital solutions. I specialize in creating elegant, efficient,
                            and user-friendly applications using modern technologies.
                        </p>
                        <p>
                            My journey in software development started with a curiosity about how things work
                            on the internet. Since then, I've been constantly learning and growing, working on
                            projects ranging from small business websites to large-scale enterprise applications.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing to
                            open-source projects, or sharing my knowledge through blog posts and mentoring.
                        </p>

                        <div className={styles.infoGrid}>
                            <div className={styles.infoItem}>
                                <strong>Location:</strong>
                                <span>San Francisco, CA</span>
                            </div>
                            <div className={styles.infoItem}>
                                <strong>Email:</strong>
                                <span>john.doe@example.com</span>
                            </div>
                            <div className={styles.infoItem}>
                                <strong>Phone:</strong>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className={styles.infoItem}>
                                <strong>Availability:</strong>
                                <span>Open to opportunities</span>
                            </div>
                        </div>

                        <div className={styles.interests}>
                            <h3>Interests & Hobbies</h3>
                            <p className={styles.interestText}>
                                Mobile Development, UI/UX Design, Cloud Computing, Machine Learning,
                                Reading, Gaming, Travel, Photography
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
