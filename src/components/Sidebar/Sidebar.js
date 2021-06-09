import React from 'react';

import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instagram.png'
import linkedIn from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'
import pin from '../../assets/icons/pin.png'
import tie from '../../assets/icons/resume.png'
import mightycoder from '../../assets/mightycoder.svg'
import resume from "../../assets/Devendra's Resume.pdf"
import { motion } from 'framer-motion';
import './Sidebar.css';

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:devendramorankar@gmail.com")
    }

    const sidebar_variant = {
        hidden: {
            x: '-30vw'
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.2, duration: 0.7, type: 'spring'
            }
        }
    }

    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate='visible'
        >
            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Devendra Morankar</div>
            <div className="sidebar__item sidebar__title">Software Engineer</div>
            <a href={resume} download="Devendra's Resume.pdf">
                <div className="sidebar__item sidebar__resume my-2">
                    <img src={tie} alt="resume" className="sidebar__icon mr-2" /><span>Download Resume</span>
                </div>
            </a>
            <figure className="sidebar__social-icons my-3">
                <a href="https://www.linkedin.com/in/devendra-morankar-a18aa6159" target="_blank"><img src={linkedIn} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href="https://www.instagram.com/devendra._.01/" target="_blank"><img src={instagram} alt="instagram" className="sidebar__icon mr-3" /></a>
                <a href="https://www.facebook.com/devendra.morankar.58" target="_blank"><img src={facebook} alt="facebook" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/Devendra0106" target="_blank"><img src={github} alt="github" className="sidebar__icon mr-3" />github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                        Pune, India</div>
                <div className="sidebar__item">devendramorankar@gmail.com</div>
                <div className="sidebar__item">8380870406/8668625653</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>E-mail Me</div>
        </motion.div>
    )
}
export default Sidebar;
