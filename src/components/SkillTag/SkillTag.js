import React from 'react';
import styles from './SkillTag.module.css';

const SkillTag = ({ skill, level }) => {
    const getLevelColor = (level) => {
        switch (level) {
            case 'expert':
                return styles.expert;
            case 'advanced':
                return styles.advanced;
            case 'intermediate':
                return styles.intermediate;
            case 'beginner':
                return styles.beginner;
            default:
                return '';
        }
    };

    return (
        <div className={`${styles.skillTag} ${level ? getLevelColor(level) : ''}`}>
            <span className={styles.skillName}>{skill}</span>
            {level && <span className={styles.skillLevel}>{level}</span>}
        </div>
    );
};

export default SkillTag;
