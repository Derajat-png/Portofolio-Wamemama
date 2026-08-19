import React from 'react';
import locationIcon from '../assets/Location.png';
import clockIconWhite from '../assets/Clock (1).png';
import instagramIconWhite from '../assets/Instagram (1).png';
import discordIconWhite from '../assets/Discord New (1).png';
import tiktokIconWhite from '../assets/TikTok.png';
import robloxIconWhite from '../assets/download 2.png';
import './Footer.css';

function Footer({ onShowDiscordModal }) {
  return (
    <div className="footer-wrapper">
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-left">
              <h2 className="footer-logo-title">Wamemama English Class</h2>
              <div className="footer-info-item">
                <img src={locationIcon} className="footer-info-icon" alt="" />
                <span>Roblox Maps — Bopung (Bocah Kampung)</span>
              </div>
              <div className="footer-info-item">
                <img src={clockIconWhite} className="footer-info-icon" alt="" />
                <span>8:00 PM, every Tuesday.</span>
              </div>
            </div>

            <div className="footer-right">
              <h3 className="footer-follow-title">Follow Us</h3>
              <div className="footer-social-links">
                <a 
                  href="https://www.instagram.com/wec.bybocahkampung/" 
                  className="footer-social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow on Instagram"
                >
                  <img src={instagramIconWhite} alt="Instagram" />
                </a>
                <a 
                  href="#discord" 
                  onClick={(e) => { e.preventDefault(); onShowDiscordModal(); }} 
                  className="footer-social-icon"
                  title="Join Discord Server"
                >
                  <img src={discordIconWhite} alt="Discord" />
                </a>
                <a 
                  href="https://www.tiktok.com/@wec.bybocahkampung/" 
                  className="footer-social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow on TikTok"
                >
                  <img src={tiktokIconWhite} alt="TikTok" />
                </a>
                <a 
                  href="https://www.roblox.com/games/120519011942267/SKOLAHAN" 
                  className="footer-social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Play Roblox Game"
                >
                  <img src={robloxIconWhite} alt="Roblox" />
                </a>
              </div>
            </div>
          </div>

          <hr className="footer-divider" />

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2026 Wamemama English Class-dev. All Rights Reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy" onClick={(e) => e.preventDefault()}>PRIVACY POLICY</a>
              <a href="#terms" onClick={(e) => e.preventDefault()}>TERMS OF SERVICE</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
