//App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    alert(`Form submitted successfully!\nEmail: ${formData.email}`);
  };

  return (
    <div className="app-container">
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => alert('Login clicked')}>Login</button>
        </div>
      </form>
    </div>
  );
}
export default App;
//App.css
/* Background animation */
@keyframes backgroundAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

body, #root {
  height: 100vh;
  margin: 0;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #53354a);
  background-size: 400% 400%;
  animation: backgroundAnimation 15s ease infinite;
  color: #fff;
}

/* Container styling */
.app-container {
  max-width: 400px;
  margin: 200px auto;
  padding: 40px 40px 40px 40px;
  background: rgba(0,0,0,0.7);
  border-radius: 15px;
  box-shadow: 0 0 10px #00ffea, 0 0 20px #00ffea inset;
  border: 2px solid #00ffea;
  animation: glowPulse 6s ease-in-out infinite;
  position: relative;
}

/* Glow pulse animation */
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 10px #00ffea, 0 0 20px #00ffea inset;
  }
  50% {
    box-shadow: 0 0 20px #00fff7, 0 0 30px #00fff7 inset;
  }
}

/* Heading style */
h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #00fff7;
  text-shadow: 0 0 10px #00fff7;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 2rem;
}

/* Emoji container styling */
.emoji-container {
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 6rem;
  user-select: none;
  pointer-events: none;
  text-shadow: 0 0 10px #00ffea;
  z-index: 10;
}

/* Input styling */
input[type="email"],
input[type="password"] {
  width: calc(100% - 24px);
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 2px solid #00ffea;
  background: #0f3460;
  color: #00fff7;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px #00ffea inset;
  font-family: 'Orbitron', sans-serif;
}

input[type="email"]:focus,
input[type="password"]:focus {
  outline: none;
  border-color: #00fff7;
  box-shadow: 0 0 20px #00fff7 inset;
  transform: scale(1.05);
}

/* Button styling */
button {
  width: 48%;
  padding: 12px;
  background: linear-gradient(45deg, #00ffea, #00fff7);
  border: none;
  border-radius: 10px;
  color: #000;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 0 15px #00ffea;
  transition: all 0.3s ease;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  animation: buttonGlow 2s ease-in-out infinite;
  margin-right: 4%;
}

button:last-child {
  margin-right: 0;
}

button:hover {
  background: linear-gradient(45deg, #00fff7, #00ffea);
  box-shadow: 0 0 30px #00fff7, 0 0 40px #00fff7 inset;
  transform: scale(1.1);
}

/* Button group container */
.button-group {
  display: flex;
  justify-content: space-between;
}

/* Button glow animation */
@keyframes buttonGlow {
  0%, 100% {
    box-shadow: 0 0 15px #00ffea;
  }
  50% {
    box-shadow: 0 0 30px #00fff7, 0 0 40px #00fff7 inset;
  }
}
.error-message {
  color: #ff4c4c;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
  text-shadow: 0 0 5px #ff4c4c;
}
