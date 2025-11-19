import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'achievements', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: 'home' },
        { name: 'About', path: 'about' },
        { name: 'Skills', path: 'skills' },
        { name: 'Projects', path: 'projects' },
        { name: 'Education', path: 'education' },
        { name: 'Experience', path: 'experience' },
        { name: 'Achievements', path: 'achievements' },
        { name: 'Contact', path: 'contact' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 70; // Offset for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <a
                    href="#home"
                    className={styles.logo}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('home');
                    }}
                >
                    Portfolio
                </a>

                <div className={styles.hamburger} onClick={toggleMobileMenu}>
                    <span className={isMobileMenuOpen ? styles.active : ''}></span>
                    <span className={isMobileMenuOpen ? styles.active : ''}></span>
                    <span className={isMobileMenuOpen ? styles.active : ''}></span>
                </div>

                <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <a
                                href={`#${link.path}`}
                                className={activeSection === link.path ? styles.active : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.path);
                                }}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;