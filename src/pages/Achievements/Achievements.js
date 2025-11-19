import React from 'react';
import { achievementsData } from '../../data/sampleData';
import styles from './Achievements.module.css';

const Achievements = () => {
    return (
        <div className={styles.achievements}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Achievements & Awards</h1>
                    <p className={styles.subtitle}>Recognition and milestones</p>
                </div>

                <div className={styles.achievementsGrid}>
                    {achievementsData.map((achievement, index) => (
                        <div key={index} className={styles.achievementCard}>
                            <div className={styles.icon}>{achievement.icon}</div>
                            <div className={styles.year}>{achievement.year}</div>
                            <h3>{achievement.title}</h3>
                            <p className={styles.organization}>{achievement.organization}</p>
                            <p className={styles.description}>{achievement.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
