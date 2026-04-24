import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const activeSection = location.pathname.substring(1);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="header-content">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/images/art-trans.png" alt="Logo" />
          </Link>
        </div>
        
        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav>
          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <li><Link to="/" className={activeSection === '' ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
            <li><Link to="/artworks" className={activeSection === 'artworks' ? 'active' : ''} onClick={closeMenu}>Artworks</Link></li>
            <li><Link to="/writeups" className={activeSection === 'writeups' ? 'active' : ''} onClick={closeMenu}>Write-Ups</Link></li>
            <li><Link to="/about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMenu}>About Me</Link></li>
            <li><Link to="/submissions" className={activeSection === 'submissions' ? 'active' : ''} onClick={closeMenu}>Submissions</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
