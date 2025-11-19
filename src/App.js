import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Education from './pages/Education/Education';
import Experience from './pages/Experience/Experience';
import Achievements from './pages/Achievements/Achievements';
import Contact from './pages/Contact/Contact';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.app}>
            <Navbar />
            <main className={styles.mainContent}>
                <section id="home">
                    <Home />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="education">
                    <Education />
                </section>
                <section id="experience">
                    <Experience />
                </section>
                <section id="achievements">
                    <Achievements />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;