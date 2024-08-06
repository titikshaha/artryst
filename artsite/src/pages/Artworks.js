import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/index.css'

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
  }, []);

  return (
    <div>
      <h1>Artworks</h1>
      <ul>
        {artworks.map(artwork => (
          <li key={artwork._id}>
            <h2>{artwork.title}</h2>
            <p>{artwork.description}</p>
            <img src={artwork.imageUrl} alt={artwork.title} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Artworks;
