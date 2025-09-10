import React from 'react';
import { projects } from '../data/data';

const ProjectCard = ({ title, description, tools }) => {
  return (
    <div className="project__card">
      <div className="project__content">
        <h3 className="project__title">{title}</h3>
        <p className="project__description">{description}</p>
        <div className="project__tools">
          {tools.map((tool, index) => (
            <span key={index} className="project__tool">{tool}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="section fade-in" id="projects">
      <h2 className="section__title">Projects</h2>
      <div className="projects__container container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tools={project.tools}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;