// Banner.js
import React from 'react';
import '../css/index.css';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();

    const navigateToArtworks = () => {
      navigate('/artworks');
    };
  
    const navigateToWriteups = () => {
      navigate('/writeups');
    };
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>welcome to artryst</h1>
        <p>find inspiration in everyday moments and the beauty of human experience,  with the essence of what it means to be truly alive.
        </p>
        <div className="banner-buttons">
          <button className="btn primary" onClick={navigateToArtworks}>Explore Artworks</button>
          <button className="btn secondary" onClick={navigateToWriteups}>Read Write-ups</button>
        </div>
      </div>

     
    </div>
    
  );
};

export default Banner;
