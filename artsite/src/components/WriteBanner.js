
import React from 'react';
import '../css/index.css';


const WriteBanner= () => {
    

  return (
    
    <div className="write-banner">
      <div className="write-grid">
        <div className="write-item">
          <img src="/images/writeup1.jpg" alt="Write 1" />
          <div className="write-title">Art 1</div>
        </div>
        <div className="write-item">
          <img src="/images/writeup2.jpg" alt="Write 2" />
          <div className="write-title">Art 2</div>
        </div>
        <div className="write-item">
          <img src="/images/writeup3.jpg" alt="Write 3" />
          <div className="write-title">Art 3</div>
        </div>
      </div>
      {/* <div className="banner-footer">
      <button className="explore-button" onClick={navigateToWriteups}>Read More →</button>
        
      </div> */}
    </div>
    
  );
};

export default WriteBanner;
