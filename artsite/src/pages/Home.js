import React from 'react';
import '../css/index.css'
import Banner from '../components/Banner';
import ArtBanner from '../components/ArtBanner';
import TextBanner from '../components/TextBanner';
import WriteBanner from '../components/WriteBanner';
import { useNavigate } from 'react-router-dom';
import BannerLast from '../components/BannerLast';


function Home() {
  const navigate = useNavigate();

  const navigateToArtworks = () => {
    navigate('/artworks');
  };

  const navigateToWriteups = () => {
    navigate('/writeups');
  };
  return (
    <div>
      <div className="home-container">
      <Banner />

      <img src="\images\artwork1-removebg-preview.png" alt="Overlap " className="overlap-image" />
      <button className="explore-button" onClick={navigateToArtworks}>Explore More →</button>
    
      <ArtBanner />
      <TextBanner />
      <img src="\images\overlayp.png" alt="Overlap 2" className="overlap-two" />
      <button className="explore-two" onClick={navigateToWriteups}>Read More →</button>
    
      <WriteBanner />
      <BannerLast />
     
      
  </div>
  </div>
);
}

export default Home;
