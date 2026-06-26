import React from 'react'
import Background3D from './components/Background3D'
import Hero from './components/Hero'
import ExperienceTimeline from './components/ExperienceTimeline'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app-container">
      <Background3D />
      
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '20px 10%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(10, 25, 47, 0.85)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        borderBottom: '1px solid var(--glass-border)'
      }}>
        <div style={{ color: 'var(--text-main)', fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Outfit' }}>
          Yogadharshan<span style={{ color: 'var(--accent)' }}>.</span>
        </div>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Resume</a>
        </div>
      </nav>

      <div className="content-container">
        <Hero />
        <ExperienceTimeline />
        <Projects />
        <Skills />
        <Contact />
      </div>

      <style>{`
        .nav-link {
          color: var(--text-secondary);
          font-family: 'Outfit';
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: var(--accent);
        }
        @media (max-width: 768px) {
          nav div:nth-child(2) {
            display: none; /* simple mobile nav hide for now */
          }
        }
      `}</style>
    </div>
  )
}

export default App
