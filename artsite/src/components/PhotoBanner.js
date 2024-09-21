import React from 'react';
import '../css/index2.css'; 

const PhotoBanner = () => {
    
    return (
      <div>
        <div className="photo-banner">
     
     <div className="photo-grid">
       <div className="photo-item">
         <img src="/images/banner1.jpg" alt="photo 1" />
        
       </div>
       <div className="photo-item">
         <img src="/images/banner2.jpg" alt="photo 2" />
        
       </div>
       <div className="photo-item">
         <img src="/images/banner3.jpg" alt="photo 3" />
       
       </div>
       <div className="photo-item">
         <img src="/images/banner4.png" alt="photo 4" />
       
       </div>
       <div className="photo-item">
         <img src="/images/banner5.jpg" alt="photo 5" />
       
       </div>
       <div className="photo-item">
         <img src="/images/banner6.jpg" alt="photo 6" />
       
       </div>
     </div>
      </div>
  </div>
      
    );
  };

export default PhotoBanner;
