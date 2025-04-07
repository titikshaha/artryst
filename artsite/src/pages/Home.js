import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import ArtBanner from '../components/ArtBanner';
import TextBanner from '../components/TextBanner';
import WriteBanner from '../components/WriteBanner';
import BannerLast from '../components/BannerLast';

function Home() {
  const navigate = useNavigate();
  const overlapTwoRef = useRef(null);

  const navigateToArtworks = () => {
    navigate('/artworks');
  };

  const navigateToWriteups = () => {
    navigate('/writeups');
  };

  useEffect(() => {
    const element = overlapTwoRef.current; // capture the current ref value
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div>
      <div className="home-container">
        <Banner />
        <img src="\images\artwork1-removebg-preview.png" alt="Overlap" className="overlap-image" />
        <button className="explore-button" onClick={navigateToArtworks}>Explore More →</button>
        
        <ArtBanner />
        <TextBanner />
        
        {/* Image with intersection observer */}
        <img 
          src="\images\overlayp.png" 
          alt="Overlap 2" 
          className="overlap-two" 
          ref={overlapTwoRef} 
        />
        <button className="explore-two" onClick={navigateToWriteups}>Read More →</button>
        
        <WriteBanner />
        <BannerLast />
      </div>
    </div>
  );
}

export default Home;
