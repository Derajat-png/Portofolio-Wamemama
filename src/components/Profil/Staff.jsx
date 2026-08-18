import React from 'react';
import bintangImg from '../../assets/Bintang.png';
import jaywalkImg from '../../assets/Frame 1135.png';
import keeImg from '../../assets/Frame 1134.png';
import spicyTacoImg from '../../assets/Frame 1136.png';
import './Staff.css';

function Staff() {
  // Inline SVG for Instagram to replace the potentially broken PNG logo-ig
  const instagramIconSvg = (
    <svg 
      viewBox="0 0 24 24" 
      className="teacher-social-icon-svg"
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

  return (
    <section id="staff" className="teachers-section">
      {/* Decorative Star Splatters */}
      <img src={bintangImg} className="star-splat top-right" alt="" />
      <img src={bintangImg} className="star-splat bottom-left" alt="" />

      <div className="teachers-container">
        <h2 className="teachers-title">Profil Pengajar</h2>
        <p className="teachers-subtitle">
          Teachers who guide learners in improving their English skills through
          interactive learning experiences on Roblox.
        </p>

        <div className="teachers-grid">
          {/* Jaywalk (Left) */}
          <div 
            className="teacher-card scroll-reveal" 
            style={{ backgroundImage: `url("${jaywalkImg}")` }}
          >
            <div className="card-overlay"></div>
            <div className="card-info">
              <h3 className="teacher-name">Jaywalk</h3>
              <div className="teacher-role-row">
                <p className="teacher-role">Professor</p>
                <a 
                  href="https://www.instagram.com/jay.walk21" 
                  className="teacher-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Jaywalk"
                >
                  {instagramIconSvg}
                </a>
              </div>
            </div>
          </div>

          {/* Kee (Center) */}
          <div 
            className="teacher-card scroll-reveal" 
            style={{ backgroundImage: `url("${keeImg}")` }}
          >
            <div className="card-overlay"></div>
            <div className="card-info">
              <h3 className="teacher-name">Kee</h3>
              <div className="teacher-role-row">
                <p className="teacher-role">Professor</p>
                <a 
                  href="https://www.instagram.com/kaylafadhila" 
                  className="teacher-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Kee"
                >
                  {instagramIconSvg}
                </a>
              </div>
            </div>
          </div>

          {/* SpicyTaco (Right) */}
          <div 
            className="teacher-card scroll-reveal" 
            style={{ backgroundImage: `url("${spicyTacoImg}")` }}
          >
            <div className="card-overlay"></div>
            <div className="card-info">
              <h3 className="teacher-name">SpicyTaco</h3>
              <div className="teacher-role-row">
                <p className="teacher-role">Professor</p>
                <a 
                  href="https://www.instagram.com/spicytaco_phonegraph" 
                  className="teacher-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram SpicyTaco"
                >
                  {instagramIconSvg}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Staff;
