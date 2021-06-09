import React, { useState } from 'react';
import project_data from '../../data/projectData';
import ProjectCard from '../ProjectCard/ProjectCard';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState(project_data);
    const [active, setActive] = useState('All');

    const handleProjectFilter = (name) => {
        const filtered_projects = project_data.filter(project => project.category.includes(name));
        setProjects(filtered_projects);
        setActive(name)
    }

    const projects_variant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.7, type: 'spring'
            }
        }
    }

    return (
        <motion.div className="container projects"
            variants={projects_variant}
            initial='hidden'
            animate='visible'
        >
            <div className="project__navbar">
                <div className={active === 'All' && 'projects__navbar-active'} onClick={() => {
                    setProjects(project_data)
                    setActive('All')
                }
                }><a>All</a></div>
                <div className={active === 'react.js' && 'projects__navbar-active'} onClick={() => handleProjectFilter('react.js')}><a>React</a></div>
                <div className={active === 'mongoDB' && 'projects__navbar-active'} onClick={() => handleProjectFilter('mongoDB')}><a>MongoDB</a></div>
                <div className={active === 'node.js' && 'projects__navbar-active'} onClick={() => handleProjectFilter('node.js')}><a>Node</a></div>
                <div className={active === 'responsive' && 'projects__navbar-active'} onClick={() => handleProjectFilter('responsive')}>Responsive</div>
            </div>
            <div className="row">
                {
                    projects.map(project => (
                        <ProjectCard key={project.name} project={project} />
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Projects;