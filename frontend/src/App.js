import React from 'react';
import './App.css';

function App() {
  const handleModelLogin = () => {
    alert('Model login clicked!');
  };

  const handleClientLogin = () => {
    alert('Client login clicked!');
  };

  return (
    <div className="hero">
      <header className="header">
        <h1>DFFUSION</h1>
        <p>Where models and clients connect effortlessly.</p>
      </header>
      <main className="main">
        <button className="button" onClick={handleModelLogin}>
          Login for Models
        </button>
        <button className="button" onClick={handleClientLogin}>
          Login for Clients
        </button>
      </main>
    </div>
  );
}

export default App;