import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Gift, User, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    referralName: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const staffContacts = [
    {
      role: 'Whatsapp / Direct Calls',
      name: 'Morlnn Carenurses Helpline',
      phone: '0773 194 074',
      whatsapp: '263773194074'
    },
    {
      role: 'Admissions Officer',
      name: 'Mrs M Kambande',
      phone: '0779 106 284',
      whatsapp: '263779106284'
    },
    {
      role: 'Academic Director',
      name: 'Mr T Masunga',
      phone: '0713 484 027',
      whatsapp: '263713484027'
    },
    {
      role: 'Student Coordinator',
      name: 'Mr T Matimba',
      phone: '0772 602 171',
      whatsapp: '263772602171'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', program: '', referralName: '', message: '' });
    }, 4000);
  };

  return (
    <div className="page-container page-padding">
      <div className="section-header text-center" style={{ marginBottom: '40px' }}>
        <span style={{ color: 'var(--accent-primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
          Morlnn Carenurses Contact & Registration
        </span>
        <h1 className="page-title" style={{ marginTop: '8px' }}>Enrollment Is Currently In Progress</h1>
        <p className="page-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>
          Reach out to our administrators directly via phone or WhatsApp, or fill out our online course registration form below.
        </p>
      </div>

      {/* Staff Contacts Grid */}
      <div style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent-primary)', textAlign: 'center' }}>
          Official Institution Representatives
        </h2>
        <div className="staff-contacts-grid">
          {staffContacts.map((staff, idx) => (
            <div key={idx} className="staff-card">
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '600' }}>
                {staff.role}
              </span>
              <div className="staff-name">{staff.name}</div>
              <div className="staff-phone">
                <Phone size={16} color="var(--accent-primary)" /> {staff.phone}
              </div>
              <a 
                href={`https://wa.me/${staff.whatsapp}?text=Hello%20${encodeURIComponent(staff.name)},%20I%20am%20interested%20in%20enrolling%20with%20Morlnn%20Carenurses`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <MessageCircle size={16} /> WhatsApp Direct
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Referral Highlight */}
      <div className="referral-banner" style={{ marginTop: 0, marginBottom: '50px' }}>
        <div className="referral-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffd700', fontWeight: '700', marginBottom: '4px' }}>
            <Gift size={22} /> REFERRAL REWARD
          </div>
          <h3>Got a student to refer?</h3>
          <p>If you refer a student we will reward you with <strong>$5 cash plus a free cap</strong> courtesy of Morlnn Carenurses.</p>
        </div>
      </div>

      {/* Main Form Section */}
      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-card glass-panel">
            <h2 style={{ marginBottom: '24px' }}>Institution Info</h2>
            
            <div className="contact-item">
              <div className="contact-icon">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3>Main Helpline / WhatsApp</h3>
                <p>0773 194 074</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div>
                <h3>Email Inquiry</h3>
                <p>info@morlnncarenurses.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3>Course Status</h3>
                <p>Enrollment Currently Open</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Clock size={24} />
              </div>
              <div>
                <h3>Office Hours</h3>
                <p>Mon - Sat: 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container glass-panel">
          <h2 style={{ marginBottom: '24px' }}>Register / Enquire Online</h2>
          
          {isSubmitted ? (
            <div className="success-message" style={{ padding: '24px', backgroundColor: 'var(--accent-primary)', color: 'white', borderRadius: '12px', textAlign: 'center' }}>
              <h3 style={{ color: 'white', marginBottom: '8px' }}>Registration Received!</h3>
              <p>Thank you for reaching out to Morlnn Carenurses. One of our representatives will contact you shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="form-control"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="form-control"
                    placeholder="name@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required
                    className="form-control"
                    placeholder="e.g. 0773 194 074"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="program">Select Course / Service Needed *</label>
                <select 
                  id="program" 
                  name="program" 
                  value={formData.program} 
                  onChange={handleChange} 
                  required
                  className="form-control"
                >
                  <option value="">Choose a course or service...</option>
                  <option value="nurse-aide">Nurse Aide Course ($5 Reg.)</option>
                  <option value="basic-first-aid">Basic First Aid & Child Minding Course</option>
                  <option value="advanced-first-aid">Advanced First Aid Course</option>
                  <option value="computer-literacy">Computer Literacy Course ($85)</option>
                  <option value="home-care">In-Home Nursing & Care Services</option>
                  <option value="referral">Student Referral Program Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="referralName">Referred By (Optional for $5 + Cap Bonus)</label>
                <input 
                  type="text" 
                  id="referralName" 
                  name="referralName" 
                  value={formData.referralName} 
                  onChange={handleChange} 
                  className="form-control"
                  placeholder="Name of the person who referred you"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message / Questions</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="form-control"
                  rows="4"
                  placeholder="Ask any question about uniform fees, registration date, or start dates..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                Submit Registration <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
