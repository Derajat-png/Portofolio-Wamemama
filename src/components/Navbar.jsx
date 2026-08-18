import React from 'react';
import './Navbar.css';

function Navbar({ currentView, onViewChange }) {
  const handleNavClick = (viewName, e) => {
    e.preventDefault();
    onViewChange(viewName);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div 
          className="navbar-logo" 
          onClick={(e) => handleNavClick('home', e)} 
          style={{ cursor: 'pointer' }}
        >
          <div className="logo-circle">Logo</div>
          <span className="navbar-brand-name">Wamemama English Class</span>
        </div>
        <ul className="navbar-links">
          <li>
            <a 
              href="#profile" 
              onClick={(e) => handleNavClick('staff', e)} 
              className={`nav-link ${currentView === 'staff' ? 'active' : ''}`}
            >
              Profile
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick('about', e)} 
              className={`nav-link ${currentView === 'about' ? 'active' : ''}`}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#team" 
              onClick={(e) => handleNavClick('team', e)} 
              className={`nav-link ${currentView === 'team' ? 'active' : ''}`}
            >
              Staff
            </a>
          </li>
          <li>
            <a 
              href="#articles" 
              onClick={(e) => handleNavClick('articles', e)} 
              className={`nav-link ${currentView === 'articles' ? 'active' : ''}`}
            >
              Artikel
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick('contact', e)} 
              className={`nav-link ${currentView === 'contact' ? 'active' : ''}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
