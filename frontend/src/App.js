import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
  const navigate = useNavigate();

  const handleModelLogin = () => {
    navigate('/model-login');
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

function ModelLogin() {
  return (
    <div className="login-page">
      <h2>Model Login</h2>
      <form className="login-form">
        <label>
          Email:
          <input type="email" placeholder="Enter your email" required />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter your password" required />
        </label>
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model-login" element={<ModelLogin />} />
      </Routes>
    </Router>
  );
}

export default App;