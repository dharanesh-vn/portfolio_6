import React from 'react';
import { personalData, education } from '../data/data';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <section className="section fade-in" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container container">
        <img src={personalData.profile} alt="About Me" className="about__img" />
        <div className="about__data">
            <p className="about__description">
                I am a dedicated and passionate student at the Coimbatore Institute of Technology, pursuing a Master's degree in Decision and Computing Sciences. My academic journey and personal projects have equipped me with a robust skill set in software development, data analysis, and machine learning. I am driven by a desire to solve complex problems and build efficient, user-centric applications.
            </p>
            <div className="about__info">
                <div className="about__info-box">
                    <FaGraduationCap />
                    <h3 className="about__info-title">{education.degree}</h3>
                    <span className="about__info-subtitle">{education.institution}</span>
                </div>
                 <div className="about__info-box">
                    <h3 className="about__info-title">Location</h3>
                    <span className="about__info-subtitle">{personalData.address}</span>
                </div>
            </div>
             <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default About;