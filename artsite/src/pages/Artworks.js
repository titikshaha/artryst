import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/index2.css'
import Portraits from '../components/artworks/Portraits';
import Sketches from '../components/artworks/Sketches';
import Everything from '../components/artworks/Everything';
import Scenic from '../components/artworks/Scenic';
function Artworks() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios.get('/api/artworks')
      .then(response => {
        setArtworks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the artworks!', error);
      });

    window.scrollTo(0, 0);
  }, []); // It's safe to leave setArtworks out

  return (
    <div className="Arts">
        <div className="section portrait">
          <Portraits />
        </div>
        
        <div className="section sketches">
          <Sketches />
        </div>

        <div className = "section everything">
          <Everything />
        </div>
  
        <div className = "section scenic">
          <Scenic />
        </div>
  
      </div>
    );
  }
  


export default Artworks;
