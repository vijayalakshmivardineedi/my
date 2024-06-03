// Home.js
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import git from '../Uploads/git.png';
import gmail from '../Uploads/gmail.png';
import linkedin from '../Uploads/linkedin.png';
import phone from '../Uploads/phone.png';
import profileImage from '../Uploads/vijju.png';
import resume from '../Uploads/resume.png';
import myresume from '../Uploads/my_resume.pdf';
import projectsData from './Projects';
import './Home.css';
import MediaCarousel from './MediaCarousel';

const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1, y: 0,
        transition: {
            staggerChildren: 0.2,
        }
    }
};

const childVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
};

const continuousMotion = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop'
        }
    }
};

const Home = () => {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToRef = (ref) => {
        const yOffset = -document.querySelector('header').offsetHeight;
        const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    return (
        <div>
            <header>
                <div className="name">
                    <h1>
                        MY <span className="portfolio">PORTFOLIO</span>
                    </h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="#about" onClick={() => scrollToRef(aboutRef)}>About Me</a></li>
                        <li><a href="#skills" onClick={() => scrollToRef(skillsRef)}>Skills</a></li>
                        <li><a href="#projects" onClick={() => scrollToRef(projectsRef)}>Projects</a></li>
                        <li><a href="#contact" onClick={() => scrollToRef(contactRef)}>Contact</a></li>
                    </ul>
                </nav>
            </header>
            <section ref={aboutRef} id="about" className="about-section">
                <div className="about-content">
                    <div className="about-image">
                        <img src={profileImage} alt="Profile" />
                    </div>
                    <div className="about-text">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <motion.h2 variants={childVariants}>Hello</motion.h2>
                            <motion.h2 variants={childVariants}>I am</motion.h2>
                            <motion.h2 className="highlight" variants={childVariants} {...continuousMotion}>Vijaya Lakshmi Vardineedi</motion.h2>
                            <motion.h3
                                variants={childVariants}
                                transition={{ delay: 1.3 }}
                            >
                                A passionate developer
                            </motion.h3>
                            <motion.p
                                variants={childVariants}
                                transition={{ delay: 1.5 }}
                            >
                                I love creating interactive and dynamic user experiences.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section ref={skillsRef} id="skills" className="skills-section">
                <div className="skills-category">
                    <h1>Technical <span className='skills'>Skills</span></h1>
                </div>
                <div className="skills-content">
                    <h5>Programming Languages:<span className='p'>JavaScript, Java, Python</span></h5>
                    <h5>Markup and Styling Languages:<span className='p'>HTML, CSS</span></h5>
                    <h5>Frameworks:<span className='p'>Node.js, Express.js, Bootstrap</span></h5>
                    <h5>Libraries:<span className='p'>React.js, Redux, Redux-toolkit</span></h5>
                    <h5>Databases:<span className='p'>MongoDB, MySQL</span></h5>
                    <h5>Version Control Tools:<span className='p'>GIT</span></h5>
                    <h5>IDE/Tools:<span className='p'>Visual Studio, Postman, MongoDB Compass, Eclipse, Figma</span></h5>
                </div>
            </section>
            <section ref={projectsRef} id="projects" className='projects-section'>
                <div className="projects-category">
                    <h1>MY <span className='projects'>Projects</span></h1>
                </div>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-details">
                                <MediaCarousel mediaSrcs={project.videoSrcs} />
                            </div>
                            <p className="project-description"><a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
                            <p className="project-description">{project.Note}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            <section ref={contactRef} id="contact" className="contact-section">
                <div className="contact-category">
                    <h1>Contact <span className='info'>Info</span></h1>
                </div>
                <div className="contact-content">
                    <div className="contact">
                        <div className="contact-card">
                            <a href='https://github.com/vijayalakshmivardineedi' target="_blank" rel="noopener noreferrer">
                                <img src={git} alt="Phone" className="contact-image" />
                                <h4>Git</h4>
                            </a>
                        </div>
                        <div className="contact-card">
                            <a href="https://www.linkedin.com/in/vijayalakshmi-vardineedi-9347633146v?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn" className="contact-image" />
                                <h4>LinkedIn</h4>
                            </a>
                        </div>
                        <div className="contact-card">
                            <a href={myresume} target="_blank" rel="noopener noreferrer">
                                <img src={resume} alt="Phone" className="contact-image" />
                                <h4>Resume</h4>
                            </a>
                        </div>
                        <div className="contact-card">
                            <img src={phone} alt="Phone" className="contact-image" />
                            <h5>Phone:</h5>
                            <span className='p'>+91 9347633146</span>
                        </div>
                        <div className="contact-card">
                            <img src={gmail} alt="Phone" className="contact-image" />
                            <h5>Gmail:</h5>
                            <span className='p'>vardineedivijju@gmail.com</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
