import React from 'react'

function DevelopmentPage({ onBack }) {
  return (
    <div className="dev-page">
      <div className="dev-container">
        <div className="dev-icon-wrapper">
          <span className="dev-icon">⚙️</span>
        </div>
        <h1 className="dev-title">Dalam Pengembangan</h1>
        <p className="dev-text">
          Halaman ini sedang dalam proses pembuatan dan pengembangan sistem. <br />
          Silakan kembali lagi nanti untuk melihat pembaruan terbaru!
        </p>
        <button className="btn-back" onClick={onBack}>
          Kembali ke Beranda
        </button>
      </div>
    </div>
  )
}

export default DevelopmentPage
