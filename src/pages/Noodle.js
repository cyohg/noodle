import React, { useState } from 'react';
import '../styles/Noodle.css';
import logo from '../assets/logo.png';

function Noodle() {
  return (
    <div className="netflix">
      <header className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <nav className="navbar">
          <span className="navbar__item">Accueil</span>
          <span className="navbar__item">Séries TV</span>
          <span className="navbar__item">Films</span>
          <span className="navbar__item">Nouveautés les plus regardées</span>
          <span className="navbar__item">Ma liste</span>
        </nav>
      </header>
    </div>
  );
}

export default Noodle;
