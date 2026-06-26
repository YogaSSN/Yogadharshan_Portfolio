import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Wrench, Brain, Laptop, Terminal } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills, delay }) => (
  <motion.div 
    className="glass-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
  >
    <div style={{ color: 'var(--accent)', marginBottom: '15px' }}>
      <Icon size={40} />
    </div>
    <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>{title}</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
      {skills.map((skill, i) => (
        <span key={i} style={{ 
          background: 'rgba(100,255,218,0.1)', 
          color: 'var(--accent)', 
          padding: '5px 12px', 
          borderRadius: '20px', 
          fontSize: '0.85rem' 
        }}>
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-heading"><span>03.</span> Core Competencies</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        <SkillCategory 
          title="Languages" 
          icon={Terminal} 
          skills={["Java", "Python", "C"]} 
          delay={0.1} 
        />
        <SkillCategory 
          title="Frontend" 
          icon={Layout} 
          skills={["HTML", "CSS", "JavaScript", "React.js"]} 
          delay={0.2} 
        />
        <SkillCategory 
          title="Backend" 
          icon={Code2} 
          skills={["Spring Boot", "REST APIs"]} 
          delay={0.3} 
        />
        <SkillCategory 
          title="Databases" 
          icon={Database} 
          skills={["SQL", "MongoDB"]} 
          delay={0.4} 
        />
        <SkillCategory 
          title="Machine Learning" 
          icon={Brain} 
          skills={["Machine Learning", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"]} 
          delay={0.5} 
        />
        <SkillCategory 
          title="Tools" 
          icon={Wrench} 
          skills={["Git", "GitHub", "Docker", "VS Code", "Postman", "Microsoft Excel"]} 
          delay={0.6} 
        />
        <SkillCategory 
          title="Core Concepts" 
          icon={Laptop} 
          skills={["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems", "Problem Solving"]} 
          delay={0.7} 
        />
      </div>
    </section>
  );
};

export default Skills;
