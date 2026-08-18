import React, { useEffect } from 'react';
import discordIconWhite from '../assets/Discord New (1).png';
import './DiscordModal.css';

function DiscordModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="discord-modal-overlay" onClick={onClose}>
      <div className="discord-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="discord-modal-close"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          &times;
        </button>
        <div className="discord-modal-header">
          <div className="discord-modal-logo-wrapper">
            <img src={discordIconWhite} alt="Discord Logo" className="discord-modal-logo" />
          </div>
          <h3 className="discord-modal-title">Pilih Server Discord</h3>
          <p className="discord-modal-subtitle">Silakan pilih salah satu server Discord di bawah ini untuk bergabung</p>
        </div>
        <div className="discord-modal-options">
          <a
            href="https://discord.gg/bocahkampung"
            className="discord-server-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="discord-server-card-content">
              <div className="discord-server-card-logo-wrapper">
                <img src={discordIconWhite} alt="Discord" className="discord-server-card-logo" />
              </div>
              <div className="discord-server-card-info">
                <h4 className="discord-server-name">Discord Bocah Kampung</h4>
                <p className="discord-server-desc">Bergabung ke komunitas utama game Roblox Bocah Kampung</p>
              </div>
              <span className="discord-server-arrow">→</span>
            </div>
          </a>
          <a
            href="https://discord.gg/wamemama"
            className="discord-server-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="discord-server-card-content">
              <div className="discord-server-card-logo-wrapper">
                <img src={discordIconWhite} alt="Discord" className="discord-server-card-logo" />
              </div>
              <div className="discord-server-card-info">
                <h4 className="discord-server-name">Discord Wamemama English Class</h4>
                <p className="discord-server-desc">Bergabung ke kelas belajar Bahasa Inggris di Roblox Wamemama English Class</p>
              </div>
              <span className="discord-server-arrow">→</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DiscordModal;
