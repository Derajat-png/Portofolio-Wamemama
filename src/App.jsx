import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Staff from './components/Profil/Staff.jsx'
import About from './components/About/About.jsx'
import Team from './components/Staff/Team.jsx'
import Articles from './components/Artikel/Articles.jsx'
import Contact from './components/Contact/Contact.jsx'
import DiscordModal from './components/DiscordModal.jsx'
import WelcomeLoader from './WelcomeLoader.jsx'
import QuizPage from './components/Learning/QuizPage.jsx'
import './App.css'


function App() {
  const [view, setView] = useState('home')
  const [showLoader, setShowLoader] = useState(true)
  const [showDiscordModal, setShowDiscordModal] = useState(false)

  // IntersectionObserver for Scroll Reveal animations
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

  const handleNavClick = (viewName) => {
    setView(viewName)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className="app-container">
      {showLoader && <WelcomeLoader onFadeEnd={() => setShowLoader(false)} />}
      
      {/* Floating Navbar */}
      {view !== 'belajar' && (
        <Navbar currentView={view} onViewChange={handleNavClick} />
      )}

      {/* Main Content Area */}
      <main className="main-content">
        {view === 'home' && (
          <Hero onViewChange={setView} />
        )}

        {view === 'staff' && (
          <Staff />
        )}

        {view === 'about' && (
          <About />
        )}

        {view === 'team' && (
          <Team />
        )}

        {view === 'articles' && (
          <Articles />
        )}

        {view === 'contact' && (
          <Contact onShowDiscordModal={() => setShowDiscordModal(true)} />
        )}

        {view === 'belajar' && (
          <QuizPage onBack={() => setView('home')} />
        )}
      </main>



      {/* Discord Selection Modal */}
      {showDiscordModal && (
        <DiscordModal onClose={() => setShowDiscordModal(false)} />
      )}
    </div>
  )
}

export default App
