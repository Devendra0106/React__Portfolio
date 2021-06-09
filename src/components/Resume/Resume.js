import React from 'react';
import Bar from '../Bar/Bar';
import { motion } from 'framer-motion';
import { languages, tools } from '../../data/resumeData';
import './Resume.css';

const Resume = () => {

    const resume_variant = {
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
        <motion.div className="container resume"
            variants={resume_variant}
            initial='hidden'
            animate='visible'
        >
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            B.E. in ECE
                        </h5>
                        <p className="resume-card__name">
                            PICT <i>(July 2016- May 2019)</i>
                        </p>
                        <p className="resume-card__details">Completed BE in Electronics and Telecommunication from Pune Institute of Computer Technology with CGPA: 8.98   </p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            System Engineer
                        </h5>
                        <p className="resume-card__name">
                            Infosys <i>(Aug 2019-Present)</i>
                        </p>
                        <p className="resume-card__details">Working in the agile environment where Designing web pages using React.js and Performed Data Driven testing with Selenium WebDriver using java and C#. </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume-skills">
                    <h5 className="resume-skills__heading">
                        Languages and Frameworks
                        </h5>
                    <div className="resume-skills__body mt-3">
                        {
                            languages.map(lang => (
                                <Bar lang={lang} />
                            ))
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-skills">
                    <h5 className="resume-skills__heading">
                        Tools and Softwares
                        </h5>
                    <div className="resume-skills__body mt-3">
                        {
                            tools.map(tool => (
                                <Bar lang={tool} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Resume;