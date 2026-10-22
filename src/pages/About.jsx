import React from 'react';
import { GraduationCap, Award, BookOpen, TrendingUp, Heart, ArrowRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const pillars = [
    {
      icon: <GraduationCap size={32} />,
      title: 'Professional Training',
      desc: 'Learn from experienced and qualified instructors committed to your academic and clinical mastery.'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Practical Skills',
      desc: 'Hands-on practical training designed for real-world medical impact in hospitals and home care.'
    },
    {
      icon: <Award size={32} />,
      title: 'Certification Recognition',
      desc: 'Earn a recognized certificate upon course completion to validate your expertise.'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Career Growth',
      desc: 'Boost your career opportunities and open doors to diverse healthcare sectors.'
    }
  ];

  const galleryItems = [
    {
      src: '/assets/team_group.jpg',
      tag: 'Team Spirit',
      caption: 'Morlnn Carenurses Staff Group',
      sub: 'Provincial competitions with Independent Colleges Association'
    },
    {
      src: '/assets/team_table.jpg',
      tag: 'In Action',
      caption: 'Community Health Desk Setup',
      sub: 'Live clinical preparation and health assessment setups'
    },
    {
      src: '/assets/banner_closeup.jpg',
      tag: 'Presence',
      caption: 'Official Morlnn Roll-up Banner',
      sub: 'Highlighting our core services and priority health values'
    }
  ];

  return (
    <div className="page-container page-padding">
      <div className="section-header text-center" style={{ marginBottom: '50px' }}>
        <span style={{ color: 'var(--accent-primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
          Morlnn Carenurses Institution
        </span>
        <h1 className="page-title" style={{ marginTop: '8px' }}>About Morlnn Carenurses</h1>
        <p className="page-subtitle" style={{ maxWidth: '700px', margin: '0 auto', fontStyle: 'italic', color: 'var(--accent-primary)', fontWeight: '600' }}>
          "Your health is our priority"
        </p>
      </div>
      
      <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'stretch' }}>
        <div className="glass-panel text-content" style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ marginBottom: '16px', color: 'var(--accent-primary)' }}>Who We Are</h2>
          <p style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>
            At <strong>Morlnn Carenurses</strong> (registered as Morlnn Private Limited), we are dedicated to building a brighter tomorrow by equipping aspiring care professionals with top-tier education and delivering compassionate, skilled home healthcare services.
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            Our institution offers a wide range of courses—from Nurse Aide, Basic & Advanced First Aid to Computer Literacy in healthcare documentation—designed to empower students with confidence, practical competence, and recognized certification.
          </p>
        </div>
        
        <div className="about-hero-image-container">
          <img src="/assets/team_group.jpg" alt="Morlnn Carenurses Team standing in front of ICD banner" />
        </div>
      </div>

      <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'stretch', marginTop: '40px' }}>
        <div className="about-hero-image-container">
          <img src="/assets/team_table.jpg" alt="Morlnn team with first aid kits and banner" />
        </div>

        <div className="glass-panel text-content" style={{ padding: '40px', backgroundColor: 'rgba(4, 107, 70, 0.08)', borderLeft: '6px solid var(--accent-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ marginBottom: '16px', color: 'var(--accent-primary)' }}>Our Motto</h2>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
            "Join us today & build a better tomorrow!"
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
            Whether you are taking your first step into nursing care or advancing your first aid and computer documentation skills, we guide you every step of the way with fully hands-on practices.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link to="/courses" className="btn-primary">
              Explore Courses <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-outline">
              Register Today
            </Link>
          </div>
        </div>
      </div>
      
      {/* 4 Pillars */}
      <div className="values-section" style={{ marginTop: '80px' }}>
        <h2 className="section-title text-center">Institutional Pillars</h2>
        <div className="pillars-grid" style={{ marginTop: '30px' }}>
          {pillars.map((pillar, idx) => (
            <div key={idx} className="pillar-card">
              <div className="pillar-icon">
                {pillar.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{pillar.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <div className="text-center">
          <span style={{ color: 'var(--accent-primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <Camera size={16} /> Gallery In Action
          </span>
          <h2 className="section-title" style={{ marginTop: '8px', marginBottom: '10px' }}>Morlnn Carenurses in the Field</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 30px' }}>
            Take a look at our student groups, event participation, and official training deployments.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.src} alt={item.caption} />
              <div className="gallery-overlay">
                <span className="gallery-tag">{item.tag}</span>
                <span className="gallery-caption">{item.caption}</span>
                <span className="gallery-subcaption">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
