// ImageBanner.js
import React from 'react';
import '../css/index.css';

const ArtBanner= () => {
  
  return (
    
    <div className="image-banner">
     
      <div className="image-grid">
        <div className="image-item">
          <img src="/images/artwork2.jpg" alt="Art 1" />
          <div className="image-title">Lily</div>
        </div>
        <div className="image-item">
          <img src="/images/artwork3.jpg" alt="Art 2" />
          <div className="image-title">Live Up</div>
        </div>
        <div className="image-item">
          <img src="/images/artwork4.jpg" alt="Art 3" />
          <div className="image-title">Eye of Everything</div>
        </div>
      </div>
      {/* <div className="banner-footer">
      <button className="explore-button" onClick={navigateToArtworks}>Explore More →</button>
        
      </div> */}
    </div>
    
  );
};

export default ArtBanner;
