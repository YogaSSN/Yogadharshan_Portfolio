import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, tech, github, delay }) => (
  <motion.div 
    className="glass-card"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <div style={{ color: 'var(--accent)', fontSize: '2.5rem' }}>📁</div>
      <div>
        {github && <a href={github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)', fontSize: '1.5rem', transition: 'color 0.3s' }} className="icon-link"><FaGithub /></a>}
      </div>
    </div>
    
    <h3 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#ccd6f6' }}>{title}</h3>
    
    <div style={{ color: 'var(--text-secondary)', lineHeight: '1.6', flexGrow: 1, fontSize: '1rem' }}>
      <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
        {description.map((desc, i) => <li key={i} style={{ marginBottom: '8px' }}>{desc}</li>)}
      </ul>
    </div>

    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '25px', color: 'var(--accent)', fontSize: '0.9rem', fontFamily: 'Outfit' }}>
      {tech.map((t, i) => <li key={i}>{t}</li>)}
    </ul>
    <style>{`
      .icon-link:hover { color: var(--accent) !important; }
    `}</style>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-heading"><span>02.</span> Some Things I've Built</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
        <ProjectCard 
          title="Student Faculty Event Management System"
          description={[
            "Full Stack Application",
            "Engineered an event management platform with RESTful APIs.",
            "Responsive React frontend for event creation and student registration.",
            "Architected a normalized SQL schema ensuring scalability."
          ]}
          tech={["Spring Boot", "React.js", "SQL", "REST APIs"]}
          github="https://github.com/YogaSSN/Student_Event_Reg"
          delay={0.1}
        />
        
        <ProjectCard 
          title="Attendance Management System"
          description={[
            "Java console application implementing full CRUD operations.",
            "Persistent File Handling, eliminating need for external databases.",
            "Robust exception handling and input validation across class hierarchies."
          ]}
          tech={["Java", "OOP", "File Handling", "CRUD"]}
          github="https://github.com/YogaSSN/Attendance-Managament-System-"
          delay={0.2}
        />
        
        <ProjectCard 
          title="Code Platform"
          description={[
            "Online coding platform for solving programming problems.",
            "Modern responsive UI focused on coding practice.",
            "Developed with performance and problem solving in mind."
          ]}
          tech={["React.js", "Node.js", "Express", "MongoDB"]}
          github="https://github.com/YogaSSN/code-platform"
          delay={0.3}
        />
      </div>
    </section>
  );
};

export default Projects;
