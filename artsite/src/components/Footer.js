// Footer.js
import React from 'react';
import '../css/index.css';

const Footer = () => {
  return (
    <footer>
  <div className="footer-content">
    <div className="footer-logo">
      <img src="images/T2trans.png" alt="Logo" rel="noopener noreferrer"/> 
    </div>
    <div className="footer-social">
      <a href="https://www.instagram.com/i.titili/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
        <img src="images/insta.png" alt="Instagram" />
      </a>
      <a href="https://x.com/titiksha_yadav5" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
        <img src="images/X.png" alt="Twitter" />
      </a>
    </div>
    <div className="footer-bottom">
    <p> 2024 artryst. All rights reserved.</p>
  </div>
    
  </div>
  
</footer>
  );
};

export default Footer;
