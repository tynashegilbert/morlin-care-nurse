import React from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  TrendingUp, 
  ArrowRight, 
  Gift, 
  CheckCircle2, 
  MessageCircle, 
  Phone,
  HeartPulse,
  Crosshair,
  ShieldAlert,
  Monitor,
  Sparkles,
  Camera
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredCourses = [
    {
      title: 'Nurse Aide Course',
      regFee: '$5 Reg.',
      price: '$105 (with uniform) / $85 (without)',
      icon: <HeartPulse size={28} />,
      desc: 'Includes Caregiving, Advanced First Aid, Nursing, Palliative Care & Epidemiological Diseases.',
      popular: true
    },
    {
      title: 'Basic First Aid & Child Minding',
      price: '$105 (with uniform) / $85 (without)',
      icon: <Crosshair size={28} />,
      desc: 'Learn first aid fundamentals and essential child care to confidently handle emergencies.'
    },
    {
      title: 'Advanced First Aid Course',
      price: '$105 (with uniform) / $85 (without)',
      icon: <ShieldAlert size={28} />,
      desc: 'Take your skills to the next level and master complex emergency responses.'
    },
    {
      title: 'Computer Literacy Course',
      price: '$85 Complete',
      icon: <Monitor size={28} />,
      desc: 'Modules in Nurse Aid Documentation, Care Plan Research & Planning.'
    }
  ];

  const pillars = [
    {
      icon: <GraduationCap size={28} />,
      title: 'Professional Training',
      text: 'Learn from experienced and qualified instructors.'
    },
    {
      icon: <BookOpen size={28} />,
      title: 'Practical Skills',
      text: 'Hands-on training for real-world healthcare impact.'
    },
    {
      icon: <Award size={28} />,
      title: 'Certification Recognition',
      text: 'Receive a recognized certificate upon completion.'
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Career Growth',
      text: 'Boost your career opportunities in healthcare.'
    }
  ];

  const previewGallery = [
    {
      src: '/assets/team_group.jpg',
      tag: 'Competitions',
      caption: 'Independent Colleges Association'
    },
    {
      src: '/assets/team_table.jpg',
      tag: 'Field Operations',
      caption: 'Clinical Preparation & Assessments'
    },
    {
      src: '/assets/banner_closeup.jpg',
      tag: 'Official Banner',
      caption: 'Our Core Care Services'
    }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-curve"></div>
        
        <div className="hero-content">
          <div className="hero-text-content">
            <span style={{ 
              backgroundColor: 'rgba(255,255,255,0.3)', 
              padding: '6px 16px', 
              borderRadius: '20px', 
              fontSize: '0.85rem', 
              fontWeight: '700',
              color: 'var(--accent-primary)',
              display: 'inline-block',
              marginBottom: '16px'
            }}>
              ✨ "Your health is our priority"
            </span>

            <h1 className="hero-title">
              UNLOCK YOUR <br/>
              <span style={{ color: 'var(--text-inverse)' }}>POTENTIAL</span>
            </h1>
            
            <p className="hero-subtitle">
              Are you ready to take your career to the next level? Look no further! Morlnn Carenurses offers a wide range of professional courses designed to equip you with the skills and knowledge you need to succeed.
            </p>
            
            <div className="hero-actions">
              <Link to="/courses" className="btn-primary btn-large">
                Explore Courses <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="btn-outline btn-large" 
                style={{ backgroundColor: 'var(--glass-bg)', color: 'var(--text-inverse)', borderColor: 'transparent' }}
              >
                Register Now
              </Link>
            </div>
          </div>
          
          <div className="hero-image-container" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div className="glass-panel" style={{ padding: '12px', borderRadius: '24px', overflow: 'hidden', maxWidth: '440px', width: '100%', boxShadow: 'var(--shadow-lg)', border: '2px solid var(--glass-border)' }}>
              <img src="/assets/team_table.jpg" alt="Morlnn Carenurses Team" style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block', objectFit: 'cover' }} />
              <div style={{ padding: '16px 8px 4px', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '4px' }}>Morlnn Carenurses</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Enrollment Currently In Progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Incentive Section */}
      <div className="page-padding" style={{ paddingBottom: 0 }}>
        <div className="referral-banner">
          <div className="referral-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffd700', fontWeight: '700', marginBottom: '6px' }}>
              <Gift size={22} /> STUDENT REFERRAL PROGRAM
            </div>
            <h3>Earn $5 Reward + Free Cap!</h3>
            <p>If you refer a student, we will reward you with <strong>$5 cash plus a free cap</strong> courtesy of Morlnn Carenurses.</p>
          </div>
          <Link to="/contact" className="referral-reward-badge">
            <Sparkles size={20} /> Refer & Earn Now
          </Link>
        </div>
      </div>

      {/* Course Highlights */}
      <section className="features-section" style={{ backgroundColor: 'transparent', padding: '60px 5%' }}>
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <h2 className="section-title" style={{ marginBottom: '12px' }}>Professional Courses Offered</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto' }}>
            Choose from our specialized healthcare programs designed for practical expertise and career advancement.
          </p>
        </div>

        <div className="courses-grid">
          {featuredCourses.map((course, index) => (
            <div key={index} className={`course-card ${course.popular ? 'featured' : ''}`}>
              {course.popular && <div className="featured-badge">Featured Course</div>}
              <div>
                <div className="course-icon-wrapper">
                  {course.icon}
                </div>
                <h3 className="course-title">{course.title}</h3>
                {course.regFee && (
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: 'rgba(4,107,70,0.1)',
                    color: 'var(--accent-primary)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    marginBottom: '10px'
                  }}>
                    Registration: {course.regFee}
                  </div>
                )}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '16px' }}>{course.desc}</p>
                <div style={{ background: 'rgba(255,255,255,0.6)', padding: '12px', borderRadius: '10px', fontWeight: '700', color: 'var(--accent-primary)', fontSize: '0.95rem' }}>
                  {course.price}
                </div>
              </div>
              <div style={{ marginTop: '20px' }}>
                <Link to="/courses" className="btn-primary" style={{ width: '100%' }}>
                  View Details & Register
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section style={{ padding: '60px 5%', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <h2 className="section-title">Join Us Today & Build A Better Tomorrow!</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '-40px auto 0' }}>
            Why Morlnn Carenurses is the top choice for aspiring healthcare professionals.
          </p>
        </div>
        
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar-card">
              <div className="pillar-icon">
                {pillar.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{pillar.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Gallery Showcase Section */}
      <section style={{ padding: '80px 5%' }}>
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <span style={{ color: 'var(--accent-primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <Camera size={18} /> Field Deployments
          </span>
          <h2 className="section-title" style={{ marginTop: '8px', marginBottom: '12px' }}>Our Team In Action</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Morlnn Carenurses students and staff participating in practical exercises and community healthcare events.
          </p>
        </div>

        <div className="gallery-grid">
          {previewGallery.map((item, idx) => (
            <div key={idx} className="gallery-item" style={{ height: '280px' }}>
              <img src={item.src} alt={item.caption} />
              <div className="gallery-overlay" style={{ opacity: 1, transform: 'translateY(0)', background: 'linear-gradient(to top, rgba(4, 107, 70, 0.85), transparent)' }}>
                <span className="gallery-tag">{item.tag}</span>
                <span className="gallery-caption" style={{ fontSize: '1rem' }}>{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/about" className="btn-outline">
            Learn More About Our Team
          </Link>
        </div>
      </section>

      {/* Direct Contact Bar */}
      <section className="cta-section">
        <div className="cta-content glass-panel">
          <h2>Enrollment Is Currently In Progress</h2>
          <p style={{ marginBottom: '24px' }}>Contact our representatives right now to reserve your place in the upcoming intake!</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://wa.me/263773194074?text=Hello%20Morlnn%20Carenurses,%20I%20want%20to%20register" 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-btn"
              style={{ padding: '14px 28px', fontSize: '1rem', borderRadius: '30px' }}
            >
              <MessageCircle size={20} /> Register via WhatsApp (0773 194 074)
            </a>
            <Link to="/contact" className="btn-primary btn-large" style={{ backgroundColor: 'var(--text-inverse)', color: 'var(--accent-primary)' }}>
              <Phone size={20} /> Call Representatives
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
