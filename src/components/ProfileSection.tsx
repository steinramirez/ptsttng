import React, { useState } from 'react';
import Profile from './Profile';
import MyCalendar from './MyCalendar';

function ProfileSection() {

    const [activeSection, setActiveSection ] = useState(1);

    function changeSection(index){
        setActiveSection(index)
    }
  return (
    <div className="profile-section">
      <div className="photo-wrapper">
      <div className="info-wrapper">
        <img src="./profileimg1.png" alt="Foto de perfil"/>
        <h2>Amys Smith</h2>
        <p>Sexo: Femenino</p>
      </div>
      

        <nav className="section-nav">
        <button className={`section-btn ${activeSection === 1 ? 'active' : ''}`} onClick={() => changeSection(1)}>Perfil</button>
        <button className={`section-btn ${activeSection === 2 ? 'active' : ''}`} onClick={() => changeSection(2)}>Citas</button>
        <button className={`section-btn ${activeSection === 3 ? 'active' : ''}`} onClick={() => changeSection(3)}>Faq / Contacto </button>
        <button className={`section-btn ${activeSection === 4 ? 'active' : ''}`} onClick={() => changeSection(4)}>Sign Out </button>
      </nav>
      </div>
      <main className="section-container">
        <section className={`section ${activeSection === 1 ? 'active' : ''}`}>
          <div> <Profile />  </div>
        </section>
        <section className={`section ${activeSection === 2 ? 'active' : ''}`}>
          <div> <MyCalendar /> </div>
        </section>
        <section className={`section ${activeSection === 3 ? 'active' : ''}`}>
          <div> 3 </div>
        </section>
        <section className={`section ${activeSection === 4 ? 'active' : ''}`}>
          <div> 4 </div>
        </section>
      </main>
    </div>
  );
}

export default ProfileSection;