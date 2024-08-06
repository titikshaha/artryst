import React, { useEffect, useRef, useState } from 'react';
import {  Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Artworks from './pages/Artworks';
import Writeups from './pages/Writeups';
import About from './pages/About';
import Submissions from './pages/Submissions';
import SplashScreen from './components/SpashScreen';
import './css/index.css';
import Footer from './components/Footer';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const splashScreenRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (splashScreenRef.current) {
        splashScreenRef.current.classList.add('fade-out');

        setTimeout(() => {
          setIsLoading(false);
        }, 1000); // Wait for the fade-out transition to complete
      }
    }, 1000); // Show splash screen for 0.6 seconds
  }, []);

  if (isLoading) {
    return <SplashScreen ref={splashScreenRef} />;
  }
  
  return (
   
    <div>
      <Header />
      <div className='container'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/artworks" element={< Artworks />} />
        <Route path="/writeups" element={<Writeups/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/submissions" element={<Submissions/>} />
      </Routes>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
