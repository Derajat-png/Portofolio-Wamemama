import React, { useState } from 'react';
import locationIcon from '../../assets/Location.png';
import clockIconWhite from '../../assets/Clock (1).png';
import discordIconWhite from '../../assets/Discord New (1).png';
import instagramIconWhite from '../../assets/Instagram (1).png';
import tiktokIconWhite from '../../assets/TikTok.png';
import robloxIconWhite from '../../assets/download 2.png';
import globeIcon from '../../assets/Globe.png';
import './Contact.css';

function Contact({ onShowDiscordModal }) {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setFormError('Semua kolom wajib diisi!');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactEmail)) {
      setFormError('Format email tidak valid!');
      return;
    }
    setFormError('');
    setIsSubmitted(true);
    setContactName('');
    setContactEmail('');
    setContactMessage('');
  };

  return (
    <section id="contact" className="contact-section scroll-reveal">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Ada pertanyaan, saran, atau ingin bergabung dengan kelas kami? Hubungi kami langsung di sini!
        </p>

        <div className="contact-grid">
          {/* Left Side: Info */}
          <div className="contact-info-panel">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Informasi Kontak</h3>
              <p className="contact-info-desc">
                Hubungi kami melalui detail di bawah ini atau kirim pesan secara langsung lewat formulir.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon-wrapper">
                    <img src={globeIcon} alt="Website" className="contact-info-img-icon" />
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-label">Website</span>
                    <span className="contact-info-value">Wamemama.vercel.app</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon-wrapper">
                    <img src={locationIcon} alt="Lokasi" className="contact-info-img-icon" />
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-label">Lokasi Kegiatan</span>
                    <span className="contact-info-value">Roblox Maps — Bopung (Bocah Kampung)</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon-wrapper">
                    <img src={clockIconWhite} alt="Waktu" className="contact-info-img-icon" />
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-label">Jadwal Kelas</span>
                    <span className="contact-info-value">Selasa, 20.00 WIB (8:00 PM)</span>
                  </div>
                </div>
              </div>

              <div className="contact-quick-actions">
                <h4 className="contact-quick-title">Quick Connect</h4>
                <div className="contact-action-buttons">
                  <button
                    onClick={onShowDiscordModal}
                    className="btn-contact-action discord"
                    title="Join Discord Server"
                    type="button"
                  >
                    <img src={discordIconWhite} alt="Discord" />
                    <span>Join Discord</span>
                  </button>
                  <a
                    href="https://www.instagram.com/wec.bybocahkampung/"
                    className="btn-contact-action instagram"
                    title="Follow Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={instagramIconWhite} alt="Instagram" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@wec.bybocahkampung/"
                    className="btn-contact-action tiktok"
                    title="Follow TikTok"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={tiktokIconWhite} alt="TikTok" />
                    <span>TikTok</span>
                  </a>
                  <a
                    href="https://www.roblox.com/games/120519011942267/SKOLAHAN"
                    className="btn-contact-action roblox"
                    title="Play Roblox Game"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={robloxIconWhite} alt="Roblox" />
                    <span>Roblox</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-panel">
            {isSubmitted ? (
              <div className="contact-success-card">
                <div className="success-icon-wrapper">
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="success-title">Pesan Terkirim!</h3>
                <p className="success-desc">
                  Terima kasih telah menghubungi kami. Tim kami akan segera menanggapi pesan Anda secepatnya.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn-success-reset">
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="contact-form">
                {formError && (
                  <div className="contact-form-error">
                    <span className="error-icon">⚠️</span>
                    <span className="error-text">{formError}</span>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">Nama Lengkap</label>
                  <input
                    type="text"
                    id="fullName"
                    className="form-input"
                    placeholder="Masukkan nama lengkap Anda"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="emailAddress" className="form-label">Alamat Email</label>
                  <input
                    type="email"
                    id="emailAddress"
                    className="form-input"
                    placeholder="contoh@domain.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="messageText" className="form-label">Kritik dan Saran</label>
                  <textarea
                    id="messageText"
                    className="form-input form-textarea"
                    placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                    rows="5"
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-form-submit">
                  Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
