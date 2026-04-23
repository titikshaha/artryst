import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Artworks from './pages/Artworks';
import Writeups from './pages/Writeups';
import About from './pages/About';
import Submissions from './pages/Submissions';
import SplashScreen from './components/SpashScreen';
import Background from './components/Background';
import './css/index.css';
import Footer from './components/Footer';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Background />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        {/* Home gets no padding-top — hero fills behind transparent nav */}
        {/* All other pages get page-wrapper to clear the fixed header height */}
        <div className={isHome ? '' : 'page-wrapper'}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/artworks" element={<Artworks />} />
            <Route path="/writeups" element={<Writeups />} />
            <Route path="/about" element={<About />} />
            <Route path="/submissions" element={<Submissions />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const splashScreenRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (splashScreenRef.current) {
        splashScreenRef.current.classList.add('fade-out');
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    }, 1000);
  }, []);

  if (isLoading) {
    return <SplashScreen ref={splashScreenRef} />;
  }

  return <AppContent />;
}

export default App;
