import React, { useState, useEffect } from "react";
import mammoth from "mammoth";
import "../css/index2.css";

const WriteupCard = ({ writeup, onSelect }) => {
  const [docText, setDocText] = useState(""); // State to hold extracted text

  useEffect(() => {
    const fetchDocText = async () => {
      try {
        if (writeup.document.endsWith(".docx")) {
          // Fetch the .docx file as an ArrayBuffer
          const response = await fetch(writeup.document);
          const arrayBuffer = await response.arrayBuffer();

          // Extract raw text from the .docx file
          const result = await mammoth.extractRawText({ arrayBuffer });
          setDocText(result.value); // `result.value` contains the extracted text
        }
      } catch (error) {
        console.error("Error loading Word document:", error);
        setDocText("Failed to load content.");
      }
    };

    fetchDocText();
  }, [writeup.document]);

  return (
    <div className="writeup-card" onClick={() => onSelect(writeup)}>
      <div className="writeup-card-left">
        <img src={writeup.coverArt} alt={`${writeup.title} Cover Art`} />
      </div>
      <div className="writeup-card-right">
        <h2>{writeup.title}</h2>
        <p>{docText ? docText.slice(0, 200) + "..." : "Loading content..."}</p>
        <button className="read-more" onClick={() => onSelect(writeup)}>
          Read More
        </button>
      </div>
    </div>
  );
};

export default WriteupCard;
