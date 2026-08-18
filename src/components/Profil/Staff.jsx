import React from 'react';
import bintangImg from '../../assets/Bintang.png';
import jaywalkImg from '../../assets/Frame 1135.png';
import keeImg from '../../assets/Frame 1134.png';
import spicyTacoImg from '../../assets/Frame 1136.png';
import './Staff.css';

function Staff() {
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Staff;
