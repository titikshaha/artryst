import React from 'react';
import '../css/index2.css';
import AboutBanner from '../components/AboutBanner';
import PhotoBanner from '../components/PhotoBanner';
import AboutBanner2 from '../components/AboutBanner2';

function About() {
  return (
    <div className="about-me-gradient">
      <div className="section one">
        <AboutBanner />
      </div>
      
      <div className="section">
        <PhotoBanner />
      </div>

      <div className="section two">
        <AboutBanner2 />
      </div>

    </div>
  );
}

export default About;
