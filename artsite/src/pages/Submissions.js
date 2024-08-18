import React, { useState } from 'react';
import Login from '../components/Login';
import '../css/index.css';

function Submissions() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [submissionType, setSubmissionType] = useState(null);

  const handleLogin = (authStatus) => {
    setIsAuthenticated(authStatus);
  };

  const handleTypeSelect = (type) => {
    setSubmissionType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <div className="container-login">
    <div className="login-form">
      {isAuthenticated ? (
        submissionType ? (
          <div>
            <h2>Upload New {submissionType}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required />
              </div>
  
              {/* Specific Fields for Artworks */}
              {submissionType === 'Artwork' && (
                <>
                  <div className="form-group">
                    <label htmlFor="artworkType">Type of Artwork</label>
                    <select id="artworkType" name="artworkType" required>
                      <option value="">Select Type</option>
                      <option value="Oil Painting">Oil Painting</option>
                      <option value="Watercolor">Watercolor</option>
                      <option value="Acrylic">Acrylic</option>
                      <option value="Digital Art">Digital Art</option>
                      <option value="Sketch">Sketch</option>
                    </select>
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="image">Upload Image</label>
                    <input type="file" id="image" name="image" accept="image/*" required />
                  </div>
                </>
              )}
  
              {/* Specific Fields for Writeups */}
              {submissionType === 'Writeup' && (
                <>
                  <div className="form-group">
                    <label htmlFor="writeupType">Type of Writeup</label>
                    <select id="writeupType" name="writeupType" required>
                      <option value="">Select Type</option>
                      <option value="Essay">Essay</option>
                      <option value="Poetry">Poetry</option>
                      <option value="Short Story">Short Story</option>
                      <option value="Review">Review</option>
                      <option value="Article">Article</option>
                    </select>
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="file">Upload File</label>
                    <input type="file" id="file" name="file" accept=".pdf,.doc,.docx,.txt" required />
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="coverImage">Upload Cover Image</label>
                    <input type="file" id="coverImage" name="coverImage" accept="image/*" required />
                  </div>
                </>
              )}
  
              <button className='sub-button' type="submit">Submit</button>
            </form>
          </div>
        ) : (
          <div>
            <button className='sub-button' onClick={() => handleTypeSelect('Artwork')}>Artwork</button>
            <button className='sub-button' onClick={() => handleTypeSelect('Writeup')}>Writeup</button>
          </div>
        )
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  </div>
  

  );
}

export default Submissions;
