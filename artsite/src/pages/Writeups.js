import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/index.css'

function Writeups() {
  const [writeups, setWriteups] = useState([]);

  useEffect(() => {
    axios.get('/api/writeups')
      .then(response => {
        setWriteups(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the writeups!', error);
      });
  }, []);

  return (
    <div>
      <h1>Writeups</h1>
      <ul>
        {writeups.map(writeup => (
          <li key={writeup._id}>
            <h2>{writeup.title}</h2>
            <p>{writeup.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Writeups;
