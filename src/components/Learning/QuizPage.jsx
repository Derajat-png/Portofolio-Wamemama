import React, { useState } from 'react';
import './QuizPage.css';

// Import icons from assets
import calendarIcon from '../../assets/Calendar.png';
import clockIcon from '../../assets/Clock.png';
import pohonMc from '../../assets/pohon mc.png';
import bintangImg from '../../assets/Bintang.png';
import chestMc from '../../assets/chest mc.png';
import swordMc from '../../assets/sword mc.png';

// SILAKAN IMPORT GAMBAR ANDA DI SINI SECARA MANUAL NANTI:
// Contoh:
// import obbyImg from '../../assets/obby_vocab.png';
// import mansionImg from '../../assets/mystery_mansion.png';
// import typingImg from '../../assets/speed_typing.png';
// import roleplayImg from '../../assets/roleplay_speaking.png';

import game1Img from '../../assets/Game 1.jpeg';
import game2Img from '../../assets/Game 2.jpeg';
import game3Img from '../../assets/game 3.jpeg';
import game4Img from '../../assets/game 4.jpeg';

function QuizPage({ onBack }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'Semua', color: null },
    { id: 'Quiz', label: 'Quiz', color: '#f59e0b' },
    { id: 'Essai', label: 'Essai', color: '#0ea5e9' },
    { id: 'Salah atau Benar', label: 'Salah atau Benar', color: '#ec4899' },
    { id: 'Jawaban Singkat', label: 'Jawaban Singkat', color: '#6366f1' },
  ];

  // Data game quiz edukasi berdasarkan gambar kedua
  const quizGames = [
    {
      id: 1,
      title: 'Get Ready With Me',
      category: 'Quiz',
      categoryClass: 'tag-kosakata',
      date: '12 July 2026',
      timeAgo: '38 hari lalu',
      image: game1Img, // Menggunakan gambar Game 1.jpeg
      imageBg: '#fef3c7', // Fallback background color (soft yellow)
      gameUrl: 'https://quiz.zep.us/id/play/WardVN', // Ganti dengan link game Roblox Anda
    },
    {
      id: 2,
      title: "It's Not Always Good News: Giving Negative Feedback and Bad News",
      category: 'Essai',
      categoryClass: 'tag-tata-bahasa',
      date: '28 June 2026',
      timeAgo: '52 hari lalu',
      image: game2Img, // Menggunakan gambar game 2.png
      imageBg: '#e0f2fe', // Fallback background color (soft blue)
      gameUrl: 'https://quiz.zep.us/id/play/47oq3e', // Ganti dengan link game Roblox Anda
    },
    {
      id: 3,
      title: 'Figurative Language',
      category: 'Salah atau Benar',
      categoryClass: 'tag-mengetik-ejaan',
      date: '21 June 2026',
      timeAgo: '60 hari lalu',
      image: game3Img, // Menggunakan gambar game 3.jpeg
      imageBg: '#fce7f3', // Fallback background color (soft pink)
      gameUrl: 'https://quiz.zep.us/id/play/N3qgrB', // Ganti dengan link game Roblox Anda
    },
    {
      id: 4,
      title: 'Conditional Sentences What Happens If',
      category: 'Jawaban Singkat',
      categoryClass: 'tag-percakapan',
      date: '14 June 2026',
      timeAgo: '67 hari lalu',
      image: game4Img, // Menggunakan gambar game 4.jpeg
      imageBg: '#e0e7ff', // Fallback background color (soft indigo)
      gameUrl: 'https://quiz.zep.us/id/play/9PlXNa', // Ganti dengan link game Roblox Anda
    },
  ];

  return (
    <section className="quiz-section">
      {/* Dekorasi Pohon di Pojok Kiri Bawah */}
      <img src={pohonMc} alt="Dekorasi Pohon" className="quiz-decor-pohon" />

      {/* Dekorasi Bintang di Pojok Kanan Atas */}
      <img src={bintangImg} alt="Dekorasi Bintang" className="quiz-decor-bintang" />

      {/* Dekorasi Bintang di Pojok Kiri */}
      <img src={bintangImg} alt="Dekorasi Bintang Kiri" className="quiz-decor-bintang-kiri" />

      {/* Dekorasi Sword di Pojok Kanan Tengah */}
      <img src={swordMc} alt="Dekorasi Sword" className="quiz-decor-sword" />

      {/* Dekorasi Chest di Pojok Kanan Bawah */}
      <img src={chestMc} alt="Dekorasi Chest" className="quiz-decor-chest" />

      <div className="quiz-container">
        {/* Tombol Kembali ke Beranda */}
        <div className="quiz-back-btn-container">
          <button className="quiz-btn-back" onClick={onBack}>
            <span className="back-arrow">←</span> Kembali ke Beranda
          </button>
        </div>

        {/* Header Halaman */}
        <div className="quiz-header">
          <h1 className="quiz-title">Bermain Sambil Belajar</h1>
          <p className="quiz-subtitle">
            Belajar Bahasa Inggris jadi lebih seru! Jelajahi koleksi pengalaman Roblox
            interaktif kami yang dirancang khusus untuk meningkatkan keterampilan literasi
            melalui permainan.
          </p>
        </div>

        {/* Filter Kategori */}
        <div className="quiz-filter-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`quiz-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.color && (
                <span 
                  className="filter-dot" 
                  style={{ backgroundColor: cat.color }}
                />
              )}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Kartu Game */}
        {quizGames.filter(game => selectedCategory === 'All' || game.category === selectedCategory).length > 0 ? (
          <div className="quiz-grid">
            {quizGames
              .filter(game => selectedCategory === 'All' || game.category === selectedCategory)
              .map((game) => (
                <div key={game.id} className="quiz-card">
                  {/* Image Container dengan Tag Badge */}
                  <div className="quiz-card-image-wrapper">
                    {/* Tag Kategori */}
                    <span className={`quiz-card-tag ${game.categoryClass}`}>
                      {game.category}
                    </span>

                    {/* Render Gambar atau Placeholder */}
                    {game.image ? (
                      <img src={game.image} alt={game.title} className="quiz-card-image" />
                    ) : (
                      <div
                        className="quiz-card-image-placeholder"
                        style={{ backgroundColor: game.imageBg }}
                      >
                        <div className="placeholder-text">
                          <h3>[ {game.title} ]</h3>
                          <p>Silakan pasang gambar Anda secara manual</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Konten Detail Kartu */}
                  <div className="quiz-card-details">
                    <h3 className="quiz-card-title">{game.title}</h3>

                    {/* Metadata Row (Tanggal & Waktu) */}
                    <div className="quiz-card-meta">
                      <span className="quiz-meta-item">
                        <img src={calendarIcon} className="quiz-meta-icon" alt="Calendar" />
                        {game.date}
                      </span>
                      <span className="quiz-meta-item">
                        <img src={clockIcon} className="quiz-meta-icon" alt="Clock" />
                        {game.timeAgo}
                      </span>
                    </div>

                    {/* Tombol Mainkan Sekarang */}
                    <a
                      href={game.gameUrl}
                      target={game.gameUrl !== '#' ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="quiz-play-btn"
                    >
                      Mainkan Sekarang
                    </a>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="quiz-empty-state">
            <p>Tidak ada game di kategori ini.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default QuizPage;
