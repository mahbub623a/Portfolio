import React from 'react';
import { skillsData } from '../../data/sampleData';
import styles from './Skills.module.css';

const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Skills & Technologies</h1>
                    <p className={styles.subtitle}>Tools and technologies I work with</p>
                </div>

                <div className={styles.skillsContent}>
                    <div className={styles.allSkillsSection}>
                        {skillsData.map((category, index) => (
                            <div key={index} className={styles.categoryGroup}>
                                <h2 className={styles.categoryTitle}>{category.category}</h2>
                                <div className={styles.skillsGrid}>
                                    {category.skills.map((skill, idx) => (
                                        <div key={idx} className={styles.skillIcon}>
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                title={skill.name}
                                            />
                                            <span className={styles.skillName}>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.additionalInfo}>
                    <div className={styles.infoCard}>
                        <h3><i className="fas fa-graduation-cap" style={{ color: '#2563eb' }}></i> Always Learning</h3>
                        <p>I'm constantly expanding my skill set and staying updated with the latest technologies and best practices in software development.</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3><i className="fas fa-users" style={{ color: '#2563eb' }}></i> Team Player</h3>
                        <p>Experienced in collaborating with cross-functional teams using Agile methodologies and modern development workflows.</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3><i className="fas fa-lightbulb" style={{ color: '#fbbf24' }}></i> Problem Solver</h3>
                        <p>Strong analytical skills with a passion for solving complex problems and creating efficient, scalable solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
