import React from 'react';
import awalBg from '../assets/Awal.png';
import './Hero.css';

function Hero({ onViewChange }) {
  return (
    <header 
      id="hero" 
      className="hero-section" 
      style={{ backgroundImage: `url("${awalBg}")` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Wamemama English Class</h1>
        <p className="hero-description">
          An English learning platform based on Roblox that provides an interactive, engaging,
          and enjoyable learning experience. It creates a fun virtual environment where
          learners can practice and improve their English skills through activities,
          communication, and collaboration with others.
        </p>
        <button className="btn-mulai" onClick={() => onViewChange('belajar')}>
          Mulai Belajar
        </button>
      </div>
    </header>
  );
}

export default Hero;
