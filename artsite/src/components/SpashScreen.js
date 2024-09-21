// SplashScreen.js
import React from 'react';
import '../css/index.css'; // Make sure to create and import the CSS file

const SplashScreen = React.forwardRef((props, ref) => {
  return (
    <div id="splash-screen" className="splash-screen" ref={ref}>
      <div class="splash-content">
      <div class="text-container">
        <h1>every stroke tells a story</h1>
      </div>
      <div class="logo-container">
        <img src="images/T2.png" alt="logo"/>
      </div>
       
    </div> 
    </div>
  );
});

export default SplashScreen;
