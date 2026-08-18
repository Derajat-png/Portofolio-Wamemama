import React, { useState } from 'react';
import classroomImg from '../../assets/Frame 1139.png';
import authorKeeImg from '../../assets/Frame 1148.png';
import classroom2Img from '../../assets/Frame 1140.png';
import authorJaywalkImg from '../../assets/Frame 1150.png';
import authorSpicyTacoImg from '../../assets/Frame 1136.png';
import keriukImg from '../../assets/keriuk.png';
import kelasImg from '../../assets/Kelas.png';
import calendarIcon from '../../assets/Calendar.png';
import clockIcon from '../../assets/Clock.png';
import clipboardIcon from '../../assets/Clipboard.png';
import ellipseImg from '../../assets/Ellipse 53.png';
import awanImg from '../../assets/awan.png';
import './Articles.css';

function Articles() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayPage, setDisplayPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    if (pageNumber === displayPage || pageNumber < 1 || pageNumber > 3) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setDisplayPage(pageNumber);
      setCurrentPage(pageNumber);
      setIsTransitioning(false);
    }, 250);
  };

  return (
    <section id="articles" className="articles-section">
      {/* Decorative Sun & Cloud Backgrounds */}
      <img src={ellipseImg} className="ellipse-sun" alt="" />
      <img src={awanImg} className="cloud-left" alt="" />
      <div className="articles-container">
        <h2 className="articles-title scroll-reveal">Learning Articles</h2>
        <p className="articles-subtitle scroll-reveal">
          Temukan berbagai artikel tentang materi pembelajaran sebelumnya serta tips dan trik
          untuk membantu meningkatkan kemampuan bahasa Inggris dengan cara yang mudah dan menyenangkan.
        </p>

        {/* Featured Article Card */}
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
                  <span className="article-meta-info">Learning Documentation . 5 min read</span>
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

        {/* Paginated Articles Area */}
        <div className={`articles-page-container scroll-reveal ${isTransitioning ? 'transition-out' : 'transition-in'}`}>

          {displayPage === 1 && (
            <>
              {/* PAGE 1 */}
              {/* Card 2: Noun - Understanding Nouns in English */}
              <div className="article-card-wrapper">
                <img src={awanImg} className="cloud-right-noun" alt="" />
                <div className="article-card-white-small">
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
              </div>

              {/* Card 3: Subjects Pronoun - Learning About Subjects */}
              <div className="article-card-white-small">
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
              <div className="article-card-white-small">
                <div className="article-image-container">
                  <img src={kelasImg} className="article-image" alt="Classroom Subjects" />
                </div>
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
            </>
          )}

          {displayPage === 2 && (
            <>
              {/* PAGE 2 - Duplicated layout for manual edits */}
              {/* Card 2: Noun - Understanding Nouns in English */}
              <div className="article-card-wrapper">
                <img src={awanImg} className="cloud-right-noun" alt="" />
                <div className="article-card-white-small">
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
              </div>

              {/* Card 3: Subjects Pronoun - Learning About Subjects */}
              <div className="article-card-white-small">
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
              <div className="article-card-white-small">
                <div className="article-image-container">
                  <img src={kelasImg} className="article-image" alt="Classroom Subjects" />
                </div>
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
            </>
          )}

          {displayPage === 3 && (
            <>
              {/* PAGE 3 - Duplicated layout for manual edits */}
              {/* Card 2: Noun - Understanding Nouns in English */}
              <div className="article-card-wrapper">
                <img src={awanImg} className="cloud-right-noun" alt="" />
                <div className="article-card-white-small">
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
              </div>

              {/* Card 3: Subjects Pronoun - Learning About Subjects */}
              <div className="article-card-white-small">
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
              <div className="article-card-white-small">
                <div className="article-image-container">
                  <img src={kelasImg} className="article-image" alt="Classroom Subjects" />
                </div>
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
            </>
          )}

        </div>

        {/* Pagination */}
        <div className="articles-pagination scroll-reveal">
          <button
            className={`pagination-btn ${displayPage === 1 ? 'disabled' : ''}`}
            onClick={() => handlePageChange(displayPage - 1)}
            disabled={displayPage === 1}
          >
            &lt;
          </button>
          <button
            className={`pagination-btn ${displayPage === 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
          <button
            className={`pagination-btn ${displayPage === 2 ? 'active' : ''}`}
            onClick={() => handlePageChange(2)}
          >
            2
          </button>
          <button
            className={`pagination-btn ${displayPage === 3 ? 'active' : ''}`}
            onClick={() => handlePageChange(3)}
          >
            3
          </button>
          <button
            className={`pagination-btn ${displayPage === 3 ? 'disabled' : ''}`}
            onClick={() => handlePageChange(displayPage + 1)}
            disabled={displayPage === 3}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Articles;
