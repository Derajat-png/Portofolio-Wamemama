import { useState, useEffect } from 'react'
import awalBg from './assets/Awal.png'
import jaywalkImg from './assets/Frame 1135.png'
import keeImg from './assets/Frame 1134.png'
import spicyTacoImg from './assets/Frame 1136.png'
import bintangImg from './assets/Bintang.png'
import logoRectImg from './assets/Rectangle 204.png'
import logoIgImg from './assets/logo-ig.png'
import lilyImg from './assets/lily.png'
import viscoImg from './assets/visco.png'
import lumiImg from './assets/lumi.png'
import DevelopmentPage from './DevelopmentPage'
import WelcomeLoader from './WelcomeLoader'
import './App.css'

function App() {
  const [view, setView] = useState('home')
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [view, showLoader]);

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
              <a href="#team" onClick={(e) => { e.preventDefault(); handleNavClick('team'); }} className="nav-link">
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
                <div className="teacher-card scroll-reveal" style={{ backgroundImage: `url(${jaywalkImg})` }}>
                  <div className="card-overlay"></div>
                  <div className="card-info">
                    <h3 className="teacher-name">Jaywalk</h3>
                    <div className="teacher-role-row">
                      <p className="teacher-role">Professor</p>
                      <a href="https://www.instagram.com/jay.walk21" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Kee (Center) */}
                <div className="teacher-card scroll-reveal" style={{ backgroundImage: `url(${keeImg})` }}>
                  <div className="card-overlay"></div>
                  <div className="card-info">
                    <h3 className="teacher-name">Kee</h3>
                    <div className="teacher-role-row">
                      <p className="teacher-role">HeadMaster</p>
                      <a href="https://www.instagram.com/kaylafadhila" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* SpicyTaco (Right) */}
                <div className="teacher-card scroll-reveal" style={{ backgroundImage: `url(${spicyTacoImg})` }}>
                  <div className="card-overlay"></div>
                  <div className="card-info">
                    <h3 className="teacher-name">SpicyTaco</h3>
                    <div className="teacher-role-row">
                      <p className="teacher-role">Professor</p>
                      <a href="https://www.instagram.com/spicytaco_phonegraph" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
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

          {/* Our Teaching Team Section */}
          <section id="team" className="team-section">
            <div className="teachers-container">
              <h2 className="teachers-title team-title-dark">Our Teaching Team</h2>
              <p className="teachers-subtitle team-subtitle-dark">
                Staff bertugas membantu kelancaran kegiatan kelas serta mendukung para pengajar dalam menjalankan proses pembelajaran.
              </p>

              <div className="teachers-grid">
                {/* Ms. Lily (1) */}
                <div className="team-card scroll-reveal">
                  <div className="team-card-image" style={{ backgroundImage: `url(${lilyImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Ms. Lily</h3>
                    <div className="teacher-role-row">
                      <p className="team-member-role">Professor</p>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mr. Visco (2) */}
                <div className="team-card scroll-reveal">
                  <div className="team-card-image" style={{ backgroundImage: `url(${viscoImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Mr. Visco</h3>
                    <div className="teacher-role-row">
                      <p className="team-member-role">Professor</p>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mr. ILLumi (3) */}
                <div className="team-card scroll-reveal">
                  <div className="team-card-image" style={{ backgroundImage: `url(${lumiImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Mr. ILLumi</h3>
                    <div className="teacher-role-row">
                      <p className="team-member-role">Professor</p>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Ms. Lily (4) */}
                <div className="team-card scroll-reveal">
                  <div className="team-card-image" style={{ backgroundImage: `url(${lumiImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Mr. Rex</h3>
                    <div className="teacher-role-row">
                      <p className="team-member-role">HeadMaster</p>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mr. Visco (5) */}
                <div className="team-card scroll-reveal">
                  <div className="team-card-image" style={{ backgroundImage: `url(${viscoImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Mr. Visco</h3>
                    <div className="teacher-role-row">
                      <p className="team-member-role">Professor</p>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mr. ILLumi (6) */}
                <div className="team-card scroll-reveal">
                  <div className="team-card-image" style={{ backgroundImage: `url(${lumiImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Mr. ILLumi</h3>
                    <div className="teacher-role-row">
                      <p className="team-member-role">Professor</p>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Ms. Lily (7) */}
                <div className="team-card scroll-reveal">
                  <div className="team-card-image" style={{ backgroundImage: `url(${lilyImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Ms. Lily</h3>
                    <div className="teacher-role-row">
                      <p className="team-member-role">Professor</p>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mr. Visco (8) */}
                <div className="team-card scroll-reveal">
                  <div className="team-card-image" style={{ backgroundImage: `url(${viscoImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Mr. Visco</h3>
                    <div className="teacher-role-row">
                      <p className="team-member-role">Professor</p>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mr. ILLumi (9) */}
                <div className="team-card scroll-reveal">
                  <div className="team-card-image" style={{ backgroundImage: `url(${lumiImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Mr. ILLumi</h3>
                    <div className="teacher-role-row">
                      <p className="team-member-role">Professor</p>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Ms. Lily (10) */}
                <div className="team-card scroll-reveal">
                  <div className="team-card-image" style={{ backgroundImage: `url(${lilyImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Ms. Lily</h3>
                    <div className="teacher-role-row">
                      <p className="team-member-role">Professor</p>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
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
