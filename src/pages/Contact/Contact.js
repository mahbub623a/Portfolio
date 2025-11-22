import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../../config/emailConfig';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Format time for Dhaka
        const time = new Intl.DateTimeFormat('en-GB', {
            dateStyle: 'medium',
            timeStyle: 'short',
            timeZone: 'Asia/Dhaka'
        }).format(new Date());

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'mrahman623a@gmail.com',
            time: time, // <-- Added time field
        };

        console.log("Email sending params:", templateParams); // Debugging

        try {
            await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateId,
                templateParams,
                emailConfig.publicKey
            );

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            setShowSuccessModal(true);
        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');
            alert('Sorry, there was an error sending your message. Please try again or email me directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.contact}>
            {showSuccessModal && (
                <div className={styles.modalOverlay} onClick={() => setShowSuccessModal(false)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalIcon}>
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <h2>Message Sent Successfully!</h2>
                        <p>Thank you for reaching out! I'll get back to you as soon as possible.</p>
                        <button
                            className={styles.modalBtn}
                            onClick={() => setShowSuccessModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Get In Touch</h1>
                    <p className={styles.subtitle}>Let's work together on your next project</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.info}>
                        <h2>Contact Information</h2>
                        <p className={styles.infoText}>
                            Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
                        </p>

                        <div className={styles.contactItems}>
                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}><i className="fas fa-envelope"></i></div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:mrahman623a@gmail.com">mrahman623a@gmail.com</a>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}><i className="fas fa-phone"></i></div>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+8801744177620">01744177620</a>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}><i className="fas fa-map-marker-alt"></i></div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}><i className="fab fa-facebook"></i></div>
                                <div>
                                    <h4>Facebook</h4>
                                    <a href="https://www.facebook.com/mahbub623a" target="_blank" rel="noopener noreferrer">
                                        facebook.com/mahbub623a
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.social}>
                            <h3>Follow Me</h3>
                            <div className={styles.socialLinks}>
                                <a href="https://github.com/mahbub623a" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/mrahman441" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.facebook.com/mahbub623a" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://twitter.com/mahbub623a" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/mahbub623a" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formContainer}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="What is this about?"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
