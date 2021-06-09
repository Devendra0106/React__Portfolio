import React from 'react';
import icon__github from '../../assets/icons/github.png';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="projectCard col-md-6 col-lg-4">
            <div className="projectCard__wrapper">
                <a href={project.deployed_url} target="_blank">
                    <img src={project.image} alt={project.name} className="projectCard__image" />
                </a>
                <div className="projectCard__title">
                    <a href={project.github_url} target="_blank">
                        <img src={icon__github} alt="github link" className="projectCard__icon mr-2" />
                    </a>
                    {project.name}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
