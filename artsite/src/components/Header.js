import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const activeSection = location.pathname.substring(1);

  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src="/images/T2.png" alt="Logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/" className={activeSection === '' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/artworks" className={activeSection === 'artworks' ? 'active' : ''}>Artworks</Link></li>
            <li><Link to="/writeups" className={activeSection === 'writeups' ? 'active' : ''}>Write-Ups</Link></li>
            <li><Link to="/about" className={activeSection === 'about' ? 'active' : ''}>About Me</Link></li>
            <li><Link to="/submissions" className={activeSection === 'submissions' ? 'active' : ''}>Submissions</Link></li>
            
          </ul>
        </nav>
        <div class="search-bar">
        <input type="text" placeholder="Search"/>
        <button type="submit">Search</button>
      </div>
      </div>
    </header>
  );
}

export default Header;
