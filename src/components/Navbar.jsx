import React, { useState } from 'react';
import { personalData } from '../data/data';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav__container container">
        <a href="#" className="nav__logo">
          {personalData.name}
        </a>

        <div className={`nav__list ${isOpen ? 'show-menu' : ''}`}>
          <a href="#about" className="nav__link" onClick={toggleMenu}>About</a>
          <a href="#experience" className="nav__link" onClick={toggleMenu}>Experience</a>
          <a href="#projects" className="nav__link" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="nav__link" onClick={toggleMenu}>Contact</a>
        </div>
        
        <div className="nav__toggle" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;