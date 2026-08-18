import React from 'react';
import logoRectImg from '../../assets/Rectangle 204.png';
import './About.css';

function About() {
  return (
    <section id="about" className="learning-section">
      <div className="learning-container">
        <div className="learning-grid">
          {/* Left Column: Heading and Details */}
          <div className="learning-left scroll-reveal">
            <h2 className="learning-heading">
              Learning English, <br />
              <span className="text-highlight">The Fun Way.</span>
            </h2>
            <div className="learning-details-card">
              <p>
                <b>Wamemama English Class </b> adalah kegiatan ekstrakurikuler bahasa Inggris yang dirancang dengan cara unik dan seru, yaitu dengan memanfaatkan game Roblox sebagai media pembelajaran utama.
                Melalui pendekatan ini, belajar bahasa Inggris tidak lagi terasa membosankan atau menegangkan, melainkan berubah menjadi pengalaman yang santai, interaktif, dan penuh keseruan.
              </p>
              <p>
                Kegiatan ini rutin <b>diadakan setiap Selasa malam</b> dan mengambil <b> lokasi di map Bopung (Bocah Kampung)</b>.
                Di dalam map virtual yang menarik ini, para peserta dapat mengasah dan meningkatkan kemampuan bahasa Inggris mereka secara alami. Kamu akan diajak berpartisipasi dalam berbagai aktivitas seru,
                berkomunikasi secara langsung, serta berinteraksi aktif bersama para teacher dan staff dalam suasana yang sangat ramah dan mendukung.
              </p>
            </div>
          </div>

          {/* Right Column: Logo/Identity Card */}
          <div className="learning-right scroll-reveal">
            <div className="identity-card">
              <div className="logo-placeholder">
                <div style={{ position: 'relative', width: '85%', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={logoRectImg} 
                    className="identity-logo" 
                    alt="Wamemama Logo" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} 
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: '700',
                    fontSize: '28px',
                    letterSpacing: '1px',
                    userSelect: 'none'
                  }}>
                    LOGO WEC
                  </div>
                </div>
              </div>
              <div className="identity-info">
                <h3 className="identity-title">Wamemama</h3>
                <span className="identity-subtitle">ENGLISH CLASS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
