import React from 'react';
import { personalData } from '../data/data';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero fade-in" id="home">
      <div className="hero__container container">
        <div className="hero__content">
          <h3>Hello, I'm</h3>
          <h1>{personalData.name}</h1>
          <h3><span>{personalData.designation}</span></h3>
          <p>{personalData.description}</p>
          
          <div className="hero__socials">
            <a href={personalData.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href={personalData.linkedIn} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href={`mailto:${personalData.email}`}><FaEnvelope /></a>
          </div>

          <a href="#contact" className="btn">Contact Me</a>
        </div>

        <div className="hero__image-wrapper">
          <img src={personalData.profile} alt="Jaison JP" className="hero__img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;