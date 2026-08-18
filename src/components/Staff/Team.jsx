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
import taciImg from '../../assets/taci.png';
import bintangImg from '../../assets/Bintang.png';
import './Team.css';

function Team() {
  const teamMembers = [
    { name: 'Mr. Rex', role: 'Pembina Eskul', image: rexImg },
    { name: 'Ms. Taci', role: 'Pembina Eskul', image: taciImg },
    { name: 'Mr. Pasir', role: 'Pembina Eskul', image: pasirImg },
    { name: 'Ms. Lily', role: 'Professor', image: lilyImg },
    { name: 'Mr. Visco', role: 'CareTaker', image: viscoImg },
    { name: 'Mr. ILLumi', role: 'CareTaker', image: lumiImg },
    { name: 'Ms. Bibu', role: 'CareTaker', image: bibuImg },
    { name: 'Ms. BabyGi', role: 'CareTaker', image: BabyGiImg },
    { name: 'Ms. Gula', role: 'CareTaker', image: GulaImg },
    { name: 'Mr. Seven', role: 'CareTaker', image: sevenImg },
    { name: 'Ms. Angsle', role: 'CareTaker', image: AngsleImg },
  ];

  return (
    <section id="team" className="team-section">
      {/* Decorative Star Splatters */}
      <img src={bintangImg} className="star-splat top-right" alt="" />
      <img src={bintangImg} className="star-splat bottom-left" alt="" />
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
