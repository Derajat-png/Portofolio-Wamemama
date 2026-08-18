import React from 'react';
import rexImg from '../../assets/rex.png';
import AngsleImg from '../../assets/Angsle.png';
import pasirImg from '../../assets/pasir.png';
import lilyImg from '../../assets/lily.png';
import viscoImg from '../../assets/visco.png';
import lumiImg from '../../assets/lumi.png';
import bibuImg from '../../assets/bibu.png';
import BabyGiImg from '../../assets/BabyGi.png';
import GulaImg from '../../assets/Gula.png';
import sevenImg from '../../assets/seven.png';
import './Team.css';

function Team() {
  const instagramIconSvg = (
    <svg 
      viewBox="0 0 24 24" 
      className="team-social-icon-svg"
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

  const teamMembers = [
    { name: 'Mr. Rex', role: 'Pembina Eskul', image: rexImg, link: 'https://www.instagram.com/' },
    { name: 'Ms. Angsle', role: 'CareTaker', image: AngsleImg, link: 'https://www.instagram.com/' },
    { name: 'Mr. Pasir', role: 'Pembina Eskul', image: pasirImg, link: 'https://www.instagram.com/' },
    { name: 'Ms. Lily', role: 'Professor', image: lilyImg, link: 'https://www.instagram.com/' },
    { name: 'Mr. Visco', role: 'CareTaker', image: viscoImg, link: 'https://www.instagram.com/' },
    { name: 'Mr. ILLumi', role: 'CareTaker', image: lumiImg, link: 'https://www.instagram.com/' },
    { name: 'Ms. Bibu', role: 'CareTaker', image: bibuImg, link: 'https://www.instagram.com/' },
    { name: 'Ms. BabyGi', role: 'CareTaker', image: BabyGiImg, link: 'https://www.instagram.com/' },
    { name: 'Ms. Gula', role: 'CareTaker', image: GulaImg, link: 'https://www.instagram.com/' },
    { name: 'Mr. Seven', role: 'CareTaker', image: sevenImg, link: 'https://www.instagram.com/' },
  ];

  return (
    <section id="team" className="team-section">
      <div className="teachers-container">
        <h2 className="teachers-title team-title-dark">Our Teaching Team</h2>
        <p className="teachers-subtitle team-subtitle-dark">
          Staff bertugas membantu kelancaran kegiatan kelas serta mendukung para pengajar dalam menjalankan proses pembelajaran.
        </p>

        <div className="teachers-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card scroll-reveal" key={index}>
              <div 
                className="team-card-image" 
                style={{ backgroundImage: `url("${member.image}")` }}
              ></div>
              <div className="team-card-info">
                <h3 className="team-member-name">{member.name}</h3>
                <div className="teacher-role-row">
                  <p className="team-member-role">{member.role}</p>
                  <a 
                    href={member.link} 
                    className="teacher-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Instagram ${member.name}`}
                  >
                    {instagramIconSvg}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
