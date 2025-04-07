
import React from 'react';
import '../css/index.css';
import { useNavigate} from 'react-router-dom';


const WriteBanner= () => {
    const navigate = useNavigate();
      
  const navigateToWriteups = () => {
    navigate('/writeups');
  };


  return (
    
    <div className="write-banner">
      <div className="write-grid">
      <div className="write-item">
          <img src="/images/writeups/writeup3.jpg" alt="Write 3" />
          <button className="write-title" onClick={navigateToWriteups}> Washed Away</button>

        </div>
        <div className="write-item">
          <img src="/images/writeups/writeup4.jpg" alt="Write 4" />
         
          <button className="write-title" onClick={navigateToWriteups}>Glitter on the Floor</button>

        </div>
        <div className="write-item">
          <img src="/images/writeups/writeup5.jpg" alt="Write 5" />
          <button className="write-title" onClick={navigateToWriteups}>Following Him</button>

        </div>
        
      </div>
      {/* <div className="banner-footer">
      <button className="explore-button" onClick={navigateToWriteups}>Read More →</button>
        
      </div> */}
    </div>
    
  );
};

export default WriteBanner;
