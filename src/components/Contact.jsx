import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" style={{ minHeight: '60vh', textAlign: 'center', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <h2 style={{ fontSize: '3rem', color: 'var(--text-main)', marginBottom: '20px', fontFamily: 'Outfit' }}>Get In Touch</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '40px', lineHeight: '1.6' }}>
          I'm currently looking for new opportunities as a Software Engineering, Full Stack, or Backend/ML Intern. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a href="mailto:yogadharshan18@gmail.com" className="btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>Say Hello</a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ marginTop: '80px', display: 'flex', gap: '30px', justifyContent: 'center' }}
      >
        <a href="https://github.com/YogaSSN" target="_blank" rel="noreferrer" className="social-icon">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/yogadharshan-k" target="_blank" rel="noreferrer" className="social-icon">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:yogadharshan18@gmail.com" className="social-icon">
          <FaEnvelope size={24} />
        </a>
      </motion.div>

      <div style={{ marginTop: '40px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontFamily: 'Outfit' }}>
        <p>Built with React & Three.js by Yogadharshan K</p>
      </div>

      <style>{`
        .social-icon {
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          color: var(--accent);
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
};

export default Contact;
