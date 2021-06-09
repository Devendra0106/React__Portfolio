import React from 'react';
import SkillCard from '../SkillCard/SkillCard';
import { motion } from 'framer-motion';
import { skills } from '../../data/aboutData';
import './About.css';

const About = () => {
    const about_variant = {
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
        <motion.div className="about"
            variants={about_variant}
            initial='hidden'
            animate='visible'
        >
            <h6 className="about__intro">
                Software engineer with good problem solving skills and ability to perform well in team.
                Passionate about web development and also having hands on experience in full stack web development technologies.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">Skills</h6>
                <div className="row">
                    {
                        skills.map(skill => (
                            <SkillCard skill={skill} />
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default About;