import React from 'react';
import '../css/index.css';

const SplashScreen = React.forwardRef((props, ref) => {
  return (
    <div id="splash-screen" className="splash-screen" ref={ref}>

      <div className="splash-bg-art">
        <svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="800" y2="500" stroke="#C9B8A0" strokeWidth="0.4" opacity="0.5"/>
          <line x1="800" y1="0" x2="0" y2="500" stroke="#C9B8A0" strokeWidth="0.4" opacity="0.5"/>
          <circle cx="60" cy="60" r="40" fill="none" stroke="#D4C5A9" strokeWidth="0.5" opacity="0.6"/>
          <circle cx="740" cy="440" r="55" fill="none" stroke="#D4C5A9" strokeWidth="0.5" opacity="0.6"/>
          <circle cx="740" cy="60" r="25" fill="none" stroke="#C9B8A0" strokeWidth="0.4" opacity="0.4"/>
          <circle cx="60" cy="440" r="30" fill="none" stroke="#C9B8A0" strokeWidth="0.4" opacity="0.4"/>
          <line x1="0" y1="250" x2="180" y2="250" stroke="#C9B8A0" strokeWidth="0.4" opacity="0.35"/>
          <line x1="620" y1="250" x2="800" y2="250" stroke="#C9B8A0" strokeWidth="0.4" opacity="0.35"/>
        </svg>
      </div>

      <div className="splash-content">

        <div className="text-container">
          <div className="text-rule-top" />
        
          <h1>every stroke<br />tells a story</h1>
          <div className="text-rule-bottom" />
        </div>

        <div className="splash-divider" />

        <div className="logo-container">
          <div className="logo-ring logo-ring--outer" />
          <div className="logo-ring logo-ring--inner" />
          <img src="images/T.png" alt="logo" />
        </div>

      </div>

      <div className="splash-dots">
        <span className="dot dot--muted" />
        <span className="dot dot--accent" />
        <span className="dot dot--muted" />
      </div>

    </div>
  );
});

export default SplashScreen;