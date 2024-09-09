import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend using the REACT_APP_BACKEND_URL environment variable
    fetch(`${process.env.REACT_APP_BACKEND_URL}/data`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data.message))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="App">
      <div className="App-section">
        <h1>Frontend 3</h1>
        {/* Show backend data or an error message */}
        {error ? (
          <p className="error">Error: {error}</p>
        ) : (
          <p>Backend Data: {data}</p>
        )}
      </div>
    </div>
  );
}

export default App;
