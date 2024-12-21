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
    window.scrollTo(0, 0);
    fetchDocText();
  }, [writeup.document]);

  return (
    <div
    style={{
      backgroundImage: `url(${writeup.coverArt})`, // Dynamically set the cover art as the background
      backgroundSize: "cover" ,
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      minHeight: "100vh", // Full-page height
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    }}
  >
    <div
      className="writeup-detail"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.88)", // Semi-transparent white background
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "800px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1>{writeup.title}</h1>
      <div className="writeup-content">
        <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.6", color: "#333" }}>
          {docContent}
        </p>
        <button onClick={onClose} style={buttonStyle}>
          Back
        </button>
      </div>
    </div>
  </div>
);
};
const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#2c3e50",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

buttonStyle[':hover'] = {
  backgroundColor: "#34495e",
};

export default WriteupDetail;
