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
                
                <div className="form-group">
                  <label htmlFor="file">Upload File</label>
                  <input type="file" id="file" name="file" required />
                </div>
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
