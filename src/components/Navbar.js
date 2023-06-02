import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Noodle.css';
import { Link } from 'react-router-dom';
import '../styles/Link.css'

function Navbar(){
return(
    <header className="header">
    <img className="header__logo" src={logo} alt="Netflix Logo" />
    <nav className="navbar">
        <Link className="custom-link" to="/Noodle">Accueil</Link>
        <span className="navbar__item">Nouveautés</span>
        <Link className="custom-link" to="/Mylist">Ma Liste</Link>
    </nav>
    </header>)
} 
export default Navbar

