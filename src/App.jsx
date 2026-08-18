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
import rexImg from './assets/rex.png'
import pasirImg from './assets/pasir.png'
import AngsleImg from './assets/Angsle.png'
import GulaImg from './assets/Gula.png'
import BabyGiImg from './assets/BabyGi.png'
import bibuImg from './assets/bibu.png'
import sevenImg from './assets/Seven.png'
import DevelopmentPage from './DevelopmentPage'
import WelcomeLoader from './WelcomeLoader'
import classroomImg from './assets/Frame 1139.png'
import authorKeeImg from './assets/Frame 1148.png'
import classroom2Img from './assets/Frame 1140.png'
import authorJaywalkImg from './assets/Frame 1150.png'
import authorSpicyTacoImg from './assets/Frame 1136.png'
import calendarIcon from './assets/Calendar.png'
import clockIcon from './assets/Clock.png'
import clipboardIcon from './assets/Clipboard.png'
import locationIcon from './assets/Location.png'
import clockIconWhite from './assets/Clock (1).png'
import instagramIconWhite from './assets/Instagram (1).png'
import discordIconWhite from './assets/Discord New (1).png'
import tiktokIconWhite from './assets/TikTok.png'
import robloxIconWhite from './assets/download 2.png'
import kelasImg from './assets/Kelas.png'
import keriukImg from './assets/keriuk.png'
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
              <a href="#articles" onClick={(e) => { e.preventDefault(); handleNavClick('articles'); }} className="nav-link">
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
                      <p className="teacher-role">Professor</p>
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
                      <div style={{ position: 'relative', width: '85%', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={logoRectImg} className="identity-logo" alt="Wamemama Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
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
                  <div className="team-card-image" style={{ backgroundImage: `url(${rexImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Mr. Rex</h3>
                    <div className="teacher-role-row">
                      <p className="team-member-role">Pembina Eskul</p>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mr. Visco (2) */}
                <div className="team-card scroll-reveal">
                  <div className="team-card-image" style={{ backgroundImage: `url(${AngsleImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Ms. Angsle</h3>
                    <div className="teacher-role-row">
                      <p className="team-member-role">CareTaker</p>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Ms. Pasir (3) */}
                <div className="team-card scroll-reveal">
                  <div className="team-card-image" style={{ backgroundImage: `url(${pasirImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Mr. Pasir</h3>
                    <div className="teacher-role-row">
                      <p className="team-member-role">Pembina Eskul</p>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Ms. Lily (4) */}
                <div className="team-card scroll-reveal">
                  <div className="team-card-image" style={{ backgroundImage: `url(${lilyImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Ms. Lily</h3>
                    <div className="teacher-role-row">
                      <p className="team-member-role">CareTaker</p>
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
                      <p className="team-member-role">CareTaker</p>
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
                      <p className="team-member-role">CareTaker</p>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Ms. Lily (7) */}
                <div className="team-card scroll-reveal">
                  <div className="team-card-image" style={{ backgroundImage: `url(${bibuImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Ms. Bibu</h3>
                    <div className="teacher-role-row">
                      <p className="team-member-role">CareTaker</p>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mr. Visco (8) */}
                <div className="team-card scroll-reveal">
                  <div className="team-card-image" style={{ backgroundImage: `url(${BabyGiImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Ms. BabyGi</h3>
                    <div className="teacher-role-row">
                      <p className="team-member-role">CareTaker</p>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mr. ILLumi (9) */}
                <div className="team-card scroll-reveal">
                  <div className="team-card-image" style={{ backgroundImage: `url(${GulaImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Ms. Gula</h3>
                    <div className="teacher-role-row">
                      <p className="team-member-role">CareTaker</p>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="teacher-social-link">
                        <img src={logoIgImg} alt="Instagram" className="teacher-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Ms. Lily (10) */}
                <div className="team-card scroll-reveal">
                  <div className="team-card-image" style={{ backgroundImage: `url(${sevenImg})` }}></div>
                  <div className="team-card-info">
                    <h3 className="team-member-name">Mr. Seven</h3>
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

          {/* Learning Articles Section */}
          <section id="articles" className="articles-section">
            <div className="articles-container">
              <h2 className="articles-title scroll-reveal">Learning Articles</h2>
              <p className="articles-subtitle scroll-reveal">
                Temukan berbagai artikel tentang materi pembelajaran sebelumnya serta tips dan trik
                untuk membantu meningkatkan kemampuan bahasa Inggris dengan cara yang mudah dan menyenangkan.
              </p>

              <div className="article-card-white scroll-reveal">
                <div className="article-image-container">
                  <img src={classroomImg} className="article-image" alt="Classroom" />
                </div>
                <div className="article-details">
                  <div className="article-tags">
                    <span className="article-tag">Tips Belajar</span>
                    <span className="article-tag">Documentation</span>
                    <span className="article-tag">Education</span>
                  </div>
                  <h3 className="article-heading-featured">Learning Documentation</h3>
                  <p className="article-description-white">
                    Dokumentasi proses pembelajaran Bahasa Inggris yang berisi berbagai materi yang telah dipelajari,
                    mulai dari Noun, Subject, Verb, hingga materi lainnya. Setiap materi dilengkapi dengan penjelasan dan
                    rangkuman untuk membantu memahami serta mengulang kembali pembelajaran yang telah dilakukan.
                  </p>
                  <div className="article-footer">
                    <div className="article-author">
                      <img src={authorKeeImg} className="author-avatar" alt="Ms. Kee" />
                      <div className="author-meta">
                        <span className="author-name">Ms. Kee</span>
                        <span className="article-meta-info">Learning Documentaition . 5 min read</span>
                      </div>
                    </div>
                    <button className="btn-read-more">
                      Read More <span className="arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Separator: Latest Articles */}
              <div className="articles-separator scroll-reveal">
                <div className="separator-header">
                  <div className="separator-title-group">
                    <img src={clipboardIcon} className="separator-icon" alt="" />
                    <span className="separator-title">Latest Articles</span>
                  </div>
                </div>
                <hr className="separator-line" />
              </div>

              {/* Card 2: Noun - Understanding Nouns in English */}
              <div className="article-card-white-small scroll-reveal">
                <div className="article-image-container">
                  <img src={classroom2Img} className="article-image" alt="Classroom Diphthongs" />
                </div>
                <div className="article-details">
                  <span className="article-tag-simple">Noun</span>
                  <h3 className="article-heading-small">Understanding Nouns in English</h3>
                  <p className="article-description-small">
                    Noun adalah kata yang digunakan untuk menyebut orang, tempat, benda, hewan, atau sesuatu yang berupa konsep/ide.
                    Noun merupakan salah satu bagian penting dalam bahasa Inggris karena sering digunakan sebagai subject maupun object
                    dalam sebuah kalimat.
                  </p>
                  <div className="article-footer">
                    <div className="article-author">
                      <img src={authorJaywalkImg} className="author-avatar" alt="Mr. Jaywalk" />
                      <div className="author-meta">
                        <span className="author-name">Mr. Jaywalk</span>
                        <div className="article-meta-row-white">
                          <span className="article-meta-info-item-white">
                            <img src={calendarIcon} className="meta-icon-white" alt="" />
                            August 05, 2027
                          </span>
                          <span className="article-meta-info-item-white">
                            <img src={clockIcon} className="meta-icon-white" alt="" />
                            6 min read
                          </span>
                        </div>
                      </div>
                    </div>
                    <a href="#read-more" className="article-read-more-link" onClick={(e) => e.preventDefault()}>
                      Read More <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3: Subjects Pronoun - Learning About Subjects */}
              <div className="article-card-white-small scroll-reveal">
                <div className="article-image-container">
                  <img src={keriukImg} className="article-image" alt="Classroom Subjects" />
                </div>
                <div className="article-details">
                  <span className="article-tag-simple">Subjects Pronoun</span>
                  <h3 className="article-heading-small">Learning About Subjects</h3>
                  <p className="article-description-small">
                    Subject adalah orang, hewan, benda, atau sesuatu yang menjadi pelaku atau topik utama dalam sebuah kalimat.
                    Subject biasanya terletak di awal kalimat dan melakukan suatu tindakan.
                  </p>
                  <div className="article-footer">
                    <div className="article-author">
                      <img src={authorSpicyTacoImg} className="author-avatar" alt="Mr. SpicyTaco" />
                      <div className="author-meta">
                        <span className="author-name">Mr. SpicyTaco</span>
                        <div className="article-meta-row-white">
                          <span className="article-meta-info-item-white">
                            <img src={calendarIcon} className="meta-icon-white" alt="" />
                            June 27, 2027
                          </span>
                          <span className="article-meta-info-item-white">
                            <img src={clockIcon} className="meta-icon-white" alt="" />
                            45 min read
                          </span>
                        </div>
                      </div>
                    </div>
                    <a href="#read-more" className="article-read-more-link" onClick={(e) => e.preventDefault()}>
                      Read More <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 4: Verb - Verb – English Grammar */}
              <div className="article-card-white-small scroll-reveal">
                <div className="article-image-container">
                  <img src={kelasImg} className="article-image" alt="Classroom Subjects" />                </div>
                <div className="article-details">
                  <span className="article-tag-simple">Verb</span>
                  <h3 className="article-heading-small">Verb – English Grammar</h3>
                  <p className="article-description-small">
                    Verb adalah kata yang digunakan untuk menunjukkan tindakan, kegiatan, atau keadaan dalam sebuah kalimat.
                    Verb merupakan bagian penting dalam bahasa Inggris karena membantu menjelaskan apa yang dilakukan atau terjadi pada subject.
                  </p>
                  <div className="article-footer">
                    <div className="article-author">
                      <img src={authorKeeImg} className="author-avatar" alt="Ms. Kee" />
                      <div className="author-meta">
                        <span className="author-name">Ms. Kee</span>
                        <div className="article-meta-row-white">
                          <span className="article-meta-info-item-white">
                            <img src={calendarIcon} className="meta-icon-white" alt="" />
                            January 13, 2026
                          </span>
                          <span className="article-meta-info-item-white">
                            <img src={clockIcon} className="meta-icon-white" alt="" />
                            29 min read
                          </span>
                        </div>
                      </div>
                    </div>
                    <a href="#read-more" className="article-read-more-link" onClick={(e) => e.preventDefault()}>
                      Read More <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="articles-pagination scroll-reveal">
                <button className="pagination-btn disabled" disabled>
                  &lt;
                </button>
                <button className="pagination-btn active">
                  1
                </button>
                <button className="pagination-btn">
                  2
                </button>
                <button className="pagination-btn">
                  3
                </button>
                <button className="pagination-btn">
                  &gt;
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
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
                      <a href="https://www.instagram.com/wec.bybocahkampung/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                        <img src={instagramIconWhite} alt="Instagram" />
                      </a>
                      <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                        <img src={discordIconWhite} alt="Discord" />
                      </a>
                      <a href="https://www.tiktok.com/@wec.bybocahkampung/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                        <img src={tiktokIconWhite} alt="TikTok" />
                      </a>
                      <a href="https://www.roblox.com/games/120519011942267/SKOLAHAN" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
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
        </>
      ) : (
        /* Under Development View */
        <DevelopmentPage onBack={() => setView('home')} />
      )}
    </div>
  )
}

export default App
