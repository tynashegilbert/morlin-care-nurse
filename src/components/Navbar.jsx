import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, Sparkles, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses & Training', path: '/courses' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Fixed Top Announcement Bar */}
      <div className="announcement-bar">
        <span className="badge-pulse">Now Enrolling</span>
        <span>ENROLLMENT IS CURRENTLY IN PROGRESS — Contact us now to register!</span>
        <a 
          href="tel:0773194074" 
          style={{ 
            color: '#ffd700', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '4px',
            marginLeft: '8px',
            textDecoration: 'underline'
          }}
        >
          <PhoneCall size={14} /> 0773 194 074
        </a>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo-container">
            <div className="logo-circle">
              <Heart size={24} color="var(--accent-primary)" strokeWidth={3} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="logo-text" style={{ lineHeight: '1.1' }}>Morlnn Carenurses</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', opacity: '0.9', fontWeight: '500' }}>
                "Your health is our priority"
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/courses" className="btn-primary" style={{ padding: '8px 20px', marginLeft: '12px' }}>
              <Sparkles size={16} /> Enroll Now
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/courses" 
              className="btn-primary" 
              style={{ textAlign: 'center', marginTop: '8px' }}
              onClick={() => setIsOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
