import React from 'react';
import '../css/index2.css'; 

const PhotoBanner = () => {
    
    return (
      <div>
        <div className="photo-banner">
     
     <div className="photo-grid">
       <div className="photo-item">
         <img src="/images/banner1.jpg" alt="um 1" />
        
       </div>
       <div className="photo-item">
         <img src="/images/banner2.jpg" alt="ege 2" />
        
       </div>
       <div className="photo-item">
         <img src="/images/banner3.jpg" alt="pegro 3" />
       
       </div>
       <div className="photo-item">
         <img src="/images/banner4.png" alt="eg 4" />
       
       </div>
       <div className="photo-item">
         <img src="/images/banner5.jpg" alt="eg 5" />
       
       </div>
       <div className="photo-item">
         <img src="/images/banner6.jpg" alt="phowrto 6" />
       
       </div>
     </div>
      </div>
  </div>
      
    );
  };

export default PhotoBanner;
