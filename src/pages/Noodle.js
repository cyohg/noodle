import React from 'react';
import '../styles/Noodle.css';

function Noodle() {
  return (
    <div className="netflix">
      <header className="header">
        <img className="header__logo" src="logo-netflix.png" alt="Netflix Logo" />
        <nav className="navbar">
          <span className="navbar__item">Accueil</span>
          <span className="navbar__item">Séries TV</span>
          <span className="navbar__item">Films</span>
          <span className="navbar__item">Nouveautés les plus regardées</span>
          <span className="navbar__item">Ma liste</span>
        </nav>
      </header>

      <div className="banner">
        <div className="banner__contents">
          <h1 className="banner__title">Titre du film ou de la série</h1>
          <div className="banner__description">
            Description du film ou de la série à afficher ici.
          </div>
          <div className="banner__buttons">
            <button className="banner__button">Lire</button>
            <button className="banner__button">Ma liste</button>
          </div>
        </div>
      </div>



      {/* Ajoutez d'autres sections de rangées de films ou séries TV ici */}
    </div>
  );
};

export default Noodle;
