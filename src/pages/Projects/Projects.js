import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projectsData } from '../../data/sampleData';
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>My Projects</h1>
                    <p className={styles.subtitle}>A collection of my recent work</p>
                </div>

                <div className={styles.projectsGrid}>
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
