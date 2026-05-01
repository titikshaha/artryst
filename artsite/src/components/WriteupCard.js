import React, { useState, useEffect } from "react";
import mammoth from "mammoth";
import "../css/index2.css";

const WriteupCard = ({ writeup, onSelect }) => {
  const [docText, setDocText] = useState("");

  useEffect(() => {
    const fetchDocText = async () => {
      try {
        if (writeup.document.endsWith(".docx")) {
          const response = await fetch(writeup.document);
          const arrayBuffer = await response.arrayBuffer();
          const result = await mammoth.extractRawText({ arrayBuffer });
          setDocText(result.value);
        }
      } catch (error) {
        console.error("Error loading Word document:", error);
        setDocText("Failed to load content.");
      }
    };

    fetchDocText();
  }, [writeup.document]);

  return (
    <div className="writeup-editorial-card" onClick={() => onSelect(writeup)}>
      <div className="writeup-editorial-img">
        <img src={writeup.coverArt} alt={`${writeup.title} Cover Art`} />
      </div>
      <div className="writeup-editorial-content">
        <h2 className="writeup-editorial-title">{writeup.title}</h2>
        <div className="writeup-editorial-rule" />
        <p className="writeup-editorial-excerpt">
          {docText ? docText.slice(0, 60) + "..." : "Loading content..."}
        </p>
        <button className="writeup-editorial-btn" onClick={(e) => { e.stopPropagation(); onSelect(writeup); }}>
          Read Piece <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default WriteupCard;
