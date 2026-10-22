import React, { useState } from 'react';
import { 
  HeartPulse, 
  Crosshair, 
  ShieldAlert, 
  Monitor, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  TrendingUp, 
  Gift, 
  PhoneCall, 
  MessageSquare,
  ArrowRight,
  Sparkles,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const coursesList = [
    {
      id: 'nurse-aide',
      title: 'Nurse Aide Course',
      icon: <HeartPulse size={32} />,
      featured: true,
      registrationFee: '$5',
      withUniform: '$105',
      withoutUniform: '$85',
      description: 'Comprehensive hands-on nursing and caregiving qualification to equip you with clinical skills and patient care techniques.',
      modules: [
        'Caregiving',
        'Advanced First Aid',
        'Basic Nursing Practices',
        'Palliative Care',
        'Epidemiological Diseases Management'
      ]
    },
    {
      id: 'basic-first-aid',
      title: 'Basic First Aid & Child Minding',
      icon: <Crosshair size={32} />,
      featured: false,
      registrationFee: 'Included',
      withUniform: '$105',
      withoutUniform: '$85',
      description: 'Learn fundamental first aid procedures and professional child care practices to confidently handle medical emergencies.',
      modules: [
        'Pediatric & Infant First Aid',
        'Basic Emergency Response',
        'Child Minding & Growth Support',
        'Home Safety & Hygiene'
      ]
    },
    {
      id: 'advanced-first-aid',
      title: 'Advanced First Aid Course',
      icon: <ShieldAlert size={32} />,
      featured: false,
      registrationFee: 'Included',
      withUniform: '$105',
      withoutUniform: '$85',
      description: 'Elevate your critical care capabilities to assess, manage, and respond efficiently to complex emergency scenarios.',
      modules: [
        'Complex Emergency Triage',
        'Advanced Life Support Skills',
        'Trauma & Fracture Response',
        'Crisis Intervention'
      ]
    },
    {
      id: 'computer-literacy',
      title: 'Computer Literacy Course',
      icon: <Monitor size={32} />,
      featured: false,
      registrationFee: 'Included',
      fullPrice: '$85',
      description: 'Essential digital skill sets for modern healthcare workers, digital recordkeeping, and care planning documentation.',
      modules: [
        'Documentation in Nurse Aid',
        'Research of Care Plans',
        'Care Plan Planning & Execution',
        'Healthcare Data Entry'
      ]
    }
  ];

  const pillars = [
    {
      icon: <BookOpen size={28} />,
      title: 'Professional Training',
      desc: 'Learn directly from experienced and qualified healthcare instructors.'
    },
    {
      icon: <Crosshair size={28} />,
      title: 'Practical Skills',
      desc: 'Hands-on training tailored for immediate real-world medical impact.'
    },
    {
      icon: <Award size={28} />,
      title: 'Certification Recognition',
      desc: 'Receive an official recognized certificate upon course completion.'
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Career Growth',
      desc: 'Unlock new job opportunities in clinics, home care, and hospitals.'
    }
  ];

  return (
    <div className="page-container page-padding">
      {/* Header */}
      <div className="section-header text-center" style={{ marginBottom: '40px' }}>
        <span style={{ 
          color: 'var(--accent-primary)', 
          fontWeight: '700', 
          textTransform: 'uppercase', 
          letterSpacing: '1px', 
          fontSize: '0.9rem' 
        }}>
          Morlnn Carenurses Training Institute
        </span>
        <h1 className="page-title" style={{ marginTop: '8px' }}>Unlock Your Potential</h1>
        <p className="page-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
          Our institution offers a wide range of professional courses designed to equip you with the essential skills and knowledge needed to succeed in healthcare.
        </p>
      </div>

      {/* Referral Reward Banner */}
      <div className="referral-banner">
        <div className="referral-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffd700', fontWeight: '700', marginBottom: '4px' }}>
            <Gift size={22} /> SPECIAL REFERRAL REWARD PROGRAM
          </div>
          <h3>Refer a Student & Earn Rewards!</h3>
          <p>If you refer a student, we will reward you with <strong>$5 cash plus a free cap</strong> courtesy of Morlnn Carenurses.</p>
        </div>
        <div className="referral-reward-badge">
          <Sparkles size={22} /> $5 + Free Cap Reward
        </div>
      </div>

      {/* Courses Grid */}
      <div className="courses-grid">
        {coursesList.map((course) => (
          <div key={course.id} className={`course-card ${course.featured ? 'featured' : ''}`}>
            {course.featured && <div className="featured-badge">Most Popular</div>}
            
            <div>
              <div className="course-icon-wrapper">
                {course.icon}
              </div>
              <h3 className="course-title">{course.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{course.description}</p>
              
              <div className="course-pricing-box">
                {course.registrationFee && course.registrationFee !== 'Included' && (
                  <div className="price-item">
                    <span className="price-label">Registration Fee:</span>
                    <span className="price-val highlight">{course.registrationFee}</span>
                  </div>
                )}
                {course.fullPrice ? (
                  <div className="price-item">
                    <span className="price-label">Course Fee:</span>
                    <span className="price-val highlight">{course.fullPrice}</span>
                  </div>
                ) : (
                  <>
                    <div className="price-item">
                      <span className="price-label">With Uniforms:</span>
                      <span className="price-val highlight">{course.withUniform}</span>
                    </div>
                    <div className="price-item">
                      <span className="price-label">Without Uniform:</span>
                      <span className="price-val">{course.withoutUniform}</span>
                    </div>
                  </>
                )}
              </div>

              <div className="course-modules-list">
                <h4>Modules Included:</h4>
                <ul>
                  {course.modules.map((mod, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <button 
                onClick={() => setSelectedCourse(course)}
                className="btn-primary" 
                style={{ width: '100%' }}
              >
                Enroll Now <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pillars Section */}
      <div style={{ marginTop: '80px' }}>
        <div className="text-center">
          <h2 className="section-title">Why Study With Us?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '-40px auto 40px' }}>
            We provide holistic clinical instruction and hands-on guidance to prepare you for immediate healthcare employment.
          </p>
        </div>
        <div className="pillars-grid">
          {pillars.map((pillar, i) => (
            <div key={i} className="pillar-card">
              <div className="pillar-icon">
                {pillar.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{pillar.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Modal */}
      {selectedCourse && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div className="glass-panel" style={{
            backgroundColor: 'var(--bg-secondary)',
            maxWidth: '500px',
            width: '100%',
            padding: '32px',
            position: 'relative'
          }}>
            <button 
              onClick={() => setSelectedCourse(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-primary)'
              }}
            >
              <X size={24} />
            </button>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--accent-primary)' }}>
              Register for {selectedCourse.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.95rem' }}>
              Enrollment is currently in progress! Contact our official representatives directly or visit our contact page.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <a 
                href={`https://wa.me/263773194074?text=Hello%20Morlnn%20Carenurses,%20I%20want%20to%20register%20for%20the%20${encodeURIComponent(selectedCourse.title)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-btn"
                style={{ padding: '12px', fontSize: '1rem', borderRadius: '30px' }}
              >
                <MessageSquare size={20} /> Register via WhatsApp (0773 194 074)
              </a>
              <a 
                href="tel:0773194074" 
                className="btn-primary" 
                style={{ backgroundColor: 'var(--accent-primary)' }}
              >
                <PhoneCall size={20} /> Call Direct (0773 194 074)
              </a>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link 
                to="/contact" 
                onClick={() => setSelectedCourse(null)}
                style={{ color: 'var(--accent-primary)', fontWeight: '600', textDecoration: 'underline' }}
              >
                Or fill out detailed inquiry form on Contact Page
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
