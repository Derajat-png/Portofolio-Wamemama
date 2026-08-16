import { useState } from 'react'
import awalBg from './assets/Awal.png'
import jaywalkImg from './assets/Frame 1135.png'
import keeImg from './assets/Frame 1134.png'
import spicyTacoImg from './assets/Frame 1136.png'
import bintangImg from './assets/Bintang.png'
import logoRectImg from './assets/Rectangle 204.png'
import DevelopmentPage from './DevelopmentPage'
import WelcomeLoader from './WelcomeLoader'
import './App.css'

function App() {
  const [view, setView] = useState('home')
  const [showLoader, setShowLoader] = useState(true)

  const handleNavClick = (sectionId) => {
    setView('home')
    setTimeout(() => {
      const el = document.getElementById(sectionId)
      if (el) {
        let yOffset = -80
        if (window.innerWidth <= 768) {
          yOffset = sectionId === 'about' ? -100 : -70
        } else {
          yOffset = sectionId === 'about' ? 46 : 55
        }
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className="app-container">
      {showLoader && <WelcomeLoader onFadeEnd={() => setShowLoader(false)} />}
      {/* Floating Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => handleNavClick('hero')} style={{ cursor: 'pointer' }}>
            <div className="logo-circle">Logo</div>
            <span className="navbar-brand-name">Wamemama English Class</span>
          </div>
          <ul className="navbar-links">
            <li>
              <a href="#profile" onClick={(e) => { e.preventDefault(); handleNavClick('staff'); }} className="nav-link">
                Profile
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#staff" onClick={(e) => { e.preventDefault(); handleNavClick('staff'); }} className="nav-link">
                Staff
              </a>
            </li>
            <li>
              <a href="#artikel" onClick={(e) => { e.preventDefault(); setView('artikel'); }} className={`nav-link ${view === 'artikel' ? 'active' : ''}`}>
                Artikel
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Conditional View Rendering */}
      {view === 'home' ? (
        <>
          {/* Hero Section */}
          <header id="hero" className="hero-section" style={{ backgroundImage: `url(${awalBg})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">Wamemama English Class</h1>
              <p className="hero-description">
                An English learning platform based on Roblox that provides an interactive, engaging,
                and enjoyable learning experience. It creates a fun virtual environment where
                learners can practice and improve their English skills through activities,
                communication, and collaboration with others.
              </p>
              <button className="btn-mulai" onClick={() => setView('belajar')}>Mulai Belajar</button>
            </div>
          </header>

          {/* Profil Pengajar Section */}
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
                <div className="teacher-card" style={{ backgroundImage: `url(${jaywalkImg})` }}>
                  <div className="card-overlay"></div>
                  <div className="card-info">
                    <h3 className="teacher-name">Jaywalk</h3>
                    <p className="teacher-role">Professor</p>
                  </div>
                </div>

                {/* Kee (Center) */}
                <div className="teacher-card" style={{ backgroundImage: `url(${keeImg})` }}>
                  <div className="card-overlay"></div>
                  <div className="card-info">
                    <h3 className="teacher-name">Kee</h3>
                    <p className="teacher-role">HeadMaster</p>
                  </div>
                </div>

                {/* SpicyTaco (Right) */}
                <div className="teacher-card" style={{ backgroundImage: `url(${spicyTacoImg})` }}>
                  <div className="card-overlay"></div>
                  <div className="card-info">
                    <h3 className="teacher-name">SpicyTaco</h3>
                    <p className="teacher-role">Professor</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learning English Section */}
          <section id="about" className="learning-section">
            <div className="learning-container">
              <div className="learning-grid">
                {/* Left Column: Heading and Details */}
                <div className="learning-left">
                  <h2 className="learning-heading">
                    Learning English, <br />
                    <span className="text-highlight">The Fun Way.</span>
                  </h2>
                  <div className="learning-details-card">
                    <p>
                      <b>Wamemama English Class </b> adalah kegiatan ekstrakurikuler bahasa Inggris yang dirancang dengan cara unik dan seru, yaitu dengan memanfaatkan game Roblox sebagai media pembelajaran utama. Melalui pendekatan ini, belajar bahasa Inggris tidak lagi terasa membosankan atau menegangkan, melainkan berubah menjadi pengalaman yang santai, interaktif, dan penuh keseruan.
                    </p>
                    <p>
                      Kegiatan ini rutin <b>diadakan setiap Selasa malam</b> dan mengambil lokasi di <b>map Bopung (Bocah Kampung)</b>. Di dalam map virtual yang menarik ini, para peserta dapat mengasah dan meningkatkan kemampuan bahasa Inggris mereka secara alami. Kamu akan diajak berpartisipasi dalam berbagai aktivitas seru, berkomunikasi secara langsung, serta berinteraksi aktif bersama para teacher dan staff dalam suasana yang sangat ramah dan mendukung.
                    </p>
                  </div>
                </div>

                {/* Right Column: Logo/Identity Card */}
                <div className="learning-right">
                  <div className="identity-card">
                    <div className="logo-placeholder">
                      <img src={logoRectImg} className="identity-logo" alt="Wamemama Logo" />
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
        </>
      ) : (
        /* Under Development View */
        <DevelopmentPage onBack={() => setView('home')} />
      )}
    </div>
  )
}

export default App
