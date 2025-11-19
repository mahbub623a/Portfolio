import React from 'react';
import { educationData } from '../../data/sampleData';
import styles from './Education.module.css';

const Education = () => {
    return (
        <div className={styles.education}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Education</h1>
                    <p className={styles.subtitle}>My academic journey</p>
                </div>

                <div className={styles.timeline}>
                    {educationData.map((edu, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelineMarker}></div>
                            <div className={styles.timelineContent}>
                                <div className={styles.period}>{edu.period}</div>
                                <h3>{edu.degree}</h3>
                                <h4>{edu.institution}</h4>
                                <p className={styles.location}>{edu.location}</p>
                                {edu.description && <p className={styles.description}>{edu.description}</p>}
                                {edu.achievements && (
                                    <ul className={styles.achievements}>
                                        {edu.achievements.map((achievement, idx) => (
                                            <li key={idx}>{achievement}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
