import React from 'react';
import { personalData } from '../data/data';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fade-in" id="contact">
      <div className="section contact">
        <h2 className="section__title">Contact Me</h2>
        <p className="contact__description">
          I'm currently open to new opportunities. Feel free to reach out via email or connect with me on LinkedIn.
        </p>

        <div className="contact__info-container container">
            <div className="contact__info">
                <FaEnvelope className="contact__icon" />
                <a href={`mailto:${personalData.email}`}>{personalData.email}</a>
            </div>
            <div className="contact__info">
                <FaPhone className="contact__icon" />
                <span>{personalData.phone}</span>
            </div>
            <div className="contact__info">
                <FaMapMarkerAlt className="contact__icon" />
                <span>{personalData.address}</span>
            </div>
        </div>
         <a href={`mailto:${personalData.email}`} className="btn">Send Email</a>
      </div>

      <div className="footer">
        <p className="footer__copy">
          &copy; {currentYear} {personalData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;