import React from 'react';
import { experiences, interests, skills, certifications } from '../data/data';

const Experience = () => {
  return (
    <section className="section fade-in" id="experience">
      <h2 className="section__title">Skills & Experience</h2>
      <div className="experience__container container">
        
        {/* Experience & Interests Column */}
        <div>
          <h3 className="experience__section-title">Experience & Interests</h3>
          <div className="experience__content">
            {experiences.map((exp, index) => (
              <div key={index} className="experience__data">
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
              </div>
            ))}
             {interests.map((interest, index) => (
              <div key={index} className="experience__data">
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Certifications Column */}
        <div>
          <h3 className="experience__section-title">Technical Skills & Certifications</h3>
          <div className="skills__content">
            <div className="experience__data">
              <h3>Languages</h3>
              <div className="skills__list">
                {skills.languages.map(skill => <span key={skill} className="skill__item">{skill}</span>)}
              </div>
            </div>
            <div className="experience__data">
              <h3>Databases & Tools</h3>
              <div className="skills__list">
                {skills.database.map(skill => <span key={skill} className="skill__item">{skill}</span>)}
                {skills.developerTools.map(skill => <span key={skill} className="skill__item">{skill}</span>)}
              </div>
            </div>
            <div className="experience__data">
              <h3>Certifications</h3>
              {certifications.map(cert => <p key={cert}>- {cert}</p>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;