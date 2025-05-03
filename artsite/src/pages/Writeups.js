import React, { useState, useEffect } from "react";
import WriteupCard from "../components/WriteupCard";
import WriteupDetail from "../components/WriteupDetail";
import '../css/index2.css';


const Writeups = () => {
  const [selectedWriteup, setSelectedWriteup] = useState(null);

  const writeups = [
    
    {
      id: 3,
      title: "Washed Away",
      coverArt: "/images/writeups/writeup3.jpg",
      document: "/documents/washedaway.docx",
    },
    {
      id: 9,
      title: "Sunsets",
      coverArt: "/images/writeups/writeup8.jpg",
      document: "/documents/sunsets.docx",
    },
    {
      id: 7,
      title: "My Castles",
      coverArt: "/images/writeups/writeup7.jpg",
      document: "/documents/castles.docx",
    },
    {
      id: 8,
      title: "sickness",
      coverArt: "/images/writeups/writeup9.jpg",
      document: "/documents/sick.docx",
    },
   
    {
      id: 4,
      title: "Glitter on The Floor",
      coverArt: "/images/writeups/writeup4.jpg",
      document: "/documents/glitter.docx",
    },
    {
      id: 5,
      title: "Following Him",
      coverArt: "/images/writeups/writeup5.jpg",
      document: "/documents/followhim.docx",
    },
    {
      id: 1,
      title: "The Healing",
      coverArt: "/images/writeups/writeup1.jpg",
      document: "/documents/thehealing.docx",
    },
    {
      id: 2,
      title: "Boy with the Box",
      coverArt: "/images/writeups/wrtieup2.jpg",
      document: "/documents/boywithbox.docx",
    },
    {
      id: 6,
      title: "Love",
      coverArt: "/images/writeups/writeup6.jpeg",
      document: "/documents/Love.docx",
    },
  ];

  const handleSelectWriteup = (writeup) => {
    setSelectedWriteup(writeup);
  };

  const handleCloseDetail = () => {
    setSelectedWriteup(null);
  };

  useEffect(() => {
    
    window.scrollTo(0, 0);

  }, []);

  return (
    <div className="writeups-page">
      {selectedWriteup ? (
        <WriteupDetail writeup={selectedWriteup} onClose={handleCloseDetail} />
      ) : (
        <div className="writeup-list">
          {writeups.map((writeup) => (
            <WriteupCard
              key={writeup.id}
              writeup={writeup}
              onSelect={handleSelectWriteup}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Writeups;
