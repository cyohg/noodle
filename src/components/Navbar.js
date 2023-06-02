import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Noodle.css';
import { Link } from 'react-router-dom';
import '../styles/Link.css'

function Navbar(){
return(
    <header className="header">
    <nav className="navbar">
    <Link to='/'>
      <img classname='navbar__logo'src={logo} alt="Noodle Logo"/>
    </Link>
        <Link className="custom-link" to="/">Accueil</Link>
        <span className="navbar__item">Nouveautés</span>
        <Link className="custom-link" to="/Mylist">Ma Liste</Link>
    </nav>
    </header>)
} 
export default Navbar

