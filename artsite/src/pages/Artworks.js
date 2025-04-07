import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/index2.css';
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
  }, []);

  return (
    <div className="Arts">
      <div className="section portrait">
        <Portraits artworks={artworks} />
      </div>

      <div className="section sketches">
        <Sketches artworks={artworks} />
      </div>

      <div className="section everything">
        <Everything artworks={artworks} />
      </div>

      <div className="section scenic">
        <Scenic artworks={artworks} />
      </div>
    </div>
  );
}

export default Artworks;
