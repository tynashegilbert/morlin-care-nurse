import React from 'react';
import { 
  Home as HomeIcon, 
  Briefcase, 
  Heart, 
  Activity, 
  Accessibility, 
  Pill, 
  Stethoscope,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const bannerServices = [
    {
      icon: <HomeIcon size={32} />,
      title: 'Home Based Care',
      description: 'Comprehensive, personalized clinical care and assistance with activities of daily living provided in the safety and comfort of your home.'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Hospital Errands',
      description: 'Reliable healthcare coordination, prescription pickups, appointment support, and direct assistance for patients and their families.'
    },
    {
      icon: <Stethoscope size={32} />,
      title: 'Dressing & Wound Care',
      description: 'Professional dressing changes, surgical wound care, bandaging, and post-operative monitoring by certified caregivers and nurse aides.'
    },
    {
      icon: <Activity size={32} />,
      title: 'Passive Exercises',
      description: 'Specialized range-of-motion therapy and stretching exercises administered for patients with limited voluntary mobility.'
    },
    {
      icon: <Accessibility size={32} />,
      title: 'Active Assisted Exercises',
      description: 'Guided and supported physical rehabilitation exercises to rebuild patient strength, balance, and independence.'
    },
    {
      icon: <Pill size={32} />,
      title: 'Medication Management',
      description: 'Ensuring medications are administered on schedule, checking dosage instructions, and coordinating with pharmacies.'
    }
  ];

  return (
    <div className="page-container page-padding">
      <div className="section-header text-center" style={{ marginBottom: '50px' }}>
        <span style={{ color: 'var(--accent-primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
          Morlnn Private Limited — Healthcare Services
        </span>
        <h1 className="page-title" style={{ marginTop: '8px' }}>Our Healthcare Services</h1>
        <p className="page-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
          At Morlnn Carenurses, your health is our priority. We offer professional, compassionate in-home nursing and specialized care services tailored to your needs.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center', marginBottom: '60px' }}>
        <div className="about-hero-image-container" style={{ minHeight: '380px' }}>
          <img src="/assets/banner_closeup.jpg" alt="Morlnn Services Banner Close-Up" />
        </div>
        
        <div className="glass-panel" style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-primary)', fontWeight: '700', marginBottom: '16px' }}>
            <ShieldCheck size={24} /> Professional & Certified Care
          </div>
          <h2 style={{ marginBottom: '16px', color: 'var(--accent-primary)' }}>Your Health Is Our Priority</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Our staff consists of fully trained, compassionate, and certified nurse aides who are ready to support your recovery, daily living, and wellness goals.
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            We work closely with families and healthcare providers to ensure the highest standards of safety, hygiene, and clinical excellence.
          </p>
          <Link to="/contact" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
            Schedule Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>Our Core Services</h2>
      <div className="services-grid">
        {bannerServices.map((service, index) => (
          <div key={index} className="service-card glass-panel">
            <div className="service-icon" style={{ color: 'var(--accent-primary)', marginBottom: '16px' }}>
              {service.icon}
            </div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.4rem' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
