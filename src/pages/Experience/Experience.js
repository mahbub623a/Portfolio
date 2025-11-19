import React from 'react';
import { experienceData } from '../../data/sampleData';
import styles from './Experience.module.css';

const Experience = () => {
    return (
        <div className={styles.experience}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Work Experience</h1>
                    <p className={styles.subtitle}>My professional journey</p>
                </div>

                <div className={styles.timeline}>
                    {experienceData.map((exp, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelineMarker}></div>
                            <div className={styles.timelineContent}>
                                <div className={styles.period}>{exp.period}</div>
                                <h3>{exp.position}</h3>
                                <h4>{exp.company}</h4>
                                <p className={styles.location}>{exp.location}</p>
                                <p className={styles.description}>{exp.description}</p>
                                {exp.responsibilities && (
                                    <ul className={styles.responsibilities}>
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
                                )}
                                {exp.technologies && (
                                    <div className={styles.technologies}>
                                        {exp.technologies.map((tech, idx) => (
                                            <span key={idx} className={styles.tech}>{tech}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
