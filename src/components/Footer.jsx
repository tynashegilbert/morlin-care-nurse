import React from 'react';
import { Heart, MapPin, Phone, Mail, Gift, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <div className="logo-container">
            <div className="logo-circle" style={{ width: '36px', height: '36px' }}>
              <Heart size={20} color="var(--accent-primary)" strokeWidth={3} />
            </div>
            <div>
              <span className="logo-text" style={{ fontSize: '1.3rem', color: 'var(--text-inverse)' }}>Morlnn Carenurses</span>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', fontStyle: 'italic' }}>"Your health is our priority"</p>
            </div>
          </div>
          <p className="footer-desc">
            Equipping healthcare professionals with world-class training and delivering compassionate, skilled care right at home.
          </p>
          <div style={{ marginTop: '16px', background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '10px', fontSize: '0.85rem' }}>
            <span style={{ color: '#ffd700', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Gift size={16} /> Referral Bonus:
            </span>
            <p style={{ margin: '4px 0 0', color: 'rgba(255,255,255,0.9)' }}>
              Refer a student and receive <strong>$5 cash + Free Cap</strong>!
            </p>
          </div>
        </div>
        
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses & Training</Link></li>
            <li><Link to="/services">Healthcare Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact & Register</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Courses Offered</h3>
          <ul className="footer-links">
            <li><Link to="/courses">Nurse Aide Course ($5 Reg.)</Link></li>
            <li><Link to="/courses">Basic First Aid & Child Minding</Link></li>
            <li><Link to="/courses">Advanced First Aid Course</Link></li>
            <li><Link to="/courses">Computer Literacy Course ($85)</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3 className="footer-title">Enrollment & Contact</h3>
          <ul className="footer-contact">
            <li><MessageCircle size={18} /> Whatsapp/Calls: 0773 194 074</li>
            <li><Phone size={18} /> Mrs M Kambande: 0779 106 284</li>
            <li><Phone size={18} /> Mr T Masunga: 0713 484 027</li>
            <li><Phone size={18} /> Mr T Matimba: 0772 602 171</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Morlnn Carenurses. "Your health is our priority". All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
