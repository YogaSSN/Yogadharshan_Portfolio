import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa';

const TimelineItem = ({ year, title, subtitle, details, icon: Icon, delay }) => (
  <motion.div 
    className="timeline-item"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
    style={{
      position: 'relative',
      paddingLeft: '40px',
      marginBottom: '40px',
      borderLeft: '2px solid var(--glass-border)'
    }}
  >
    <div style={{
      position: 'absolute',
      left: '-21px',
      top: '0',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'var(--bg-light)',
      border: '2px solid var(--accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--accent)',
      fontSize: '1.2rem'
    }}>
      <Icon />
    </div>
    <div className="glass-card" style={{ marginLeft: '20px' }}>
      <span style={{ color: 'var(--accent)', fontFamily: 'Outfit', fontWeight: 600 }}>{year}</span>
      <h3 style={{ fontSize: '1.5rem', margin: '10px 0 5px 0' }}>{title}</h3>
      <h4 style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '15px' }}>{subtitle}</h4>
      <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: '1.6', listStyleType: 'disc' }}>
        {details.map((detail, i) => <li key={i}>{detail}</li>)}
      </ul>
    </div>
  </motion.div>
);

const ExperienceTimeline = () => {
  return (
    <section id="experience">
      <h2 className="section-heading"><span>01.</span> Experience & Education</h2>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px 0' }}>
        <TimelineItem 
          year="Present" 
          title="Software Developer Intern" 
          subtitle="Scroll Kurai"
          icon={FaBriefcase}
          delay={0.1}
          details={[
            "Collaborated with developers and team members on real-world software development tasks.",
            "Contributed to application development by implementing features, fixing bugs, and improving existing functionality.",
            "Participated in code reviews, debugging, and testing to improve application quality.",
            "Worked with modern development tools, Git, and collaborative development workflows.",
            "Gained practical experience in software engineering, teamwork, and agile development practices."
          ]}
        />

        <TimelineItem 
          year="Jun 2025 - Jul 2025" 
          title="Data Handling Intern" 
          subtitle="Omega Company"
          icon={FaBriefcase}
          delay={0.15}
          details={[
            "Automated data workflows using advanced Excel (formulas, pivot tables, data validation), reducing manual processing time significantly.",
            "Processed and validated large business datasets, ensuring 100% data accuracy and consistency across operational reports."
          ]}
        />


        <TimelineItem 
          year="2024 - Present" 
          title="B.E. Computer Science & Engineering" 
          subtitle="Sri Sivasubramaniya Nadar College of Engineering"
          icon={FaGraduationCap}
          delay={0.2}
          details={["CGPA: 8.18 / 10"]}
        />

        <TimelineItem 
          year="2024" 
          title="Class XII" 
          subtitle="Sri Sundareshwara Vidhya Sala Matric Hr. Sec. School"
          icon={FaGraduationCap}
          delay={0.3}
          details={["Score: 584/600 (97.3%)"]}
        />
        
        <TimelineItem 
          year="Achievements" 
          title="Hackathons & Competitions" 
          subtitle="Various Platforms"
          icon={FaTrophy}
          delay={0.4}
          details={[
            "Solved 150+ DSA problems on LeetCode covering arrays, trees, graphs, and dynamic programming.",
            "Selected and competed in Smart India Hackathon (SIH) - led backend development.",
            "Secured a placement in Duo Developers Competition, demonstrating system design skills."
          ]}
        />
      </div>
    </section>
  );
};

export default ExperienceTimeline;
