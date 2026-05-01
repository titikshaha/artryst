import React, { useEffect, useState } from "react";
import mammoth from "mammoth";
import '../css/index2.css';

const WriteupDetail = ({ writeup, onClose }) => {
  const [docContent, setDocContent] = useState("");

  useEffect(() => {
    const fetchDocText = async () => {
      try {
        const response = await fetch(writeup.document);
        const arrayBuffer = await response.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        setDocContent(result.value);
      } catch (error) {
        console.error("Error loading Word document:", error);
        setDocContent("Failed to load content.");
      }
    };
    
    fetchDocText();
    window.scrollTo(0, 0);
  }, [writeup.document]);

  return (
    <div className="writeup-reader-view">
      <div className="writeup-reader-nav">
        <button className="writeup-back-btn" onClick={onClose}>
          <span className="back-arrow">←</span> back to collection
        </button>
      </div>

      <div className="writeup-reader-hero">
        <div className="writeup-hero-img-container">
          <img src={writeup.coverArt} alt={writeup.title} className="writeup-hero-img" />
          <div className="writeup-hero-gradient"></div>
        </div>
        <div className="writeup-hero-header">
          <p className="writeup-hero-eyebrow">original piece</p>
          <h1 className="writeup-hero-title">{writeup.title}</h1>
          <div className="writeup-hero-rule" />
        </div>
      </div>

      <div className="writeup-reader-body">
        <div className="writeup-reader-content">
          <p>{docContent || "Loading piece..."}</p>
        </div>
      </div>
    </div>
  );
};

export default WriteupDetail;
