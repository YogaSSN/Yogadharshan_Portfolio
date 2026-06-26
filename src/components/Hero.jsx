import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const titles = [
    "Software Engineering Student",
    "Java Full Stack Developer",
    "Backend Developer",
    "Machine Learning & Data Analytics Enthusiast"
  ];
  
  const [currentTitle, setCurrentTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const fullText = titles[index];
    
    if (!isDeleting && currentTitle === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentTitle === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
    } else {
      timeout = setTimeout(() => {
        setCurrentTitle(fullText.substring(0, currentTitle.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [currentTitle, isDeleting, index]);

  return (
    <section id="home">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h3 style={{ color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'Outfit' }}>
          Hi, my name is
        </h3>
        
        <h1 style={{ fontSize: 'clamp(40px, 8vw, 80px)', margin: '0 0 10px 0' }}>
          Yogadharshan K.
        </h1>
        
        <h2 style={{ fontSize: 'clamp(30px, 6vw, 60px)', color: 'var(--text-secondary)', margin: '0' }}>
          I build things for the web.
        </h2>

        <div style={{ fontSize: '1.5rem', color: 'var(--accent-blue)', marginTop: '20px', height: '30px' }}>
          <span style={{ fontWeight: 600 }}>{currentTitle}</span>
          <span style={{ borderRight: '2px solid var(--accent)', paddingRight: '2px', animation: 'blink 1s step-end infinite' }}></span>
        </div>

        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1.2rem', marginTop: '30px', lineHeight: '1.6' }}>
          I'm a computer science undergraduate specializing in scalable backend systems, REST APIs, and full-stack web development. Currently focused on building exceptional digital experiences.
        </p>

        <div style={{ display: 'flex', gap: '20px', marginTop: '40px', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn-primary btn-filled">View Projects</a>
          <a href="/resume.pdf" className="btn-primary">Download Resume</a>
          <a href="#contact" className="btn-primary">Contact Me</a>
        </div>
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { border-color: transparent; }
          50% { border-color: var(--accent); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
