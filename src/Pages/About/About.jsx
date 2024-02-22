import React from "react";
import "./About.css";
import user2 from "../../Assets/Images/user-2.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="about-section">
        <div  data-aos="flip-left" data-aos-duration="1000" className="about-left-section">
          <div className="user-image">
            <img src={user2} alt="user" />
          </div>
          <h1>Sarthak Patel</h1>
          <span>Coder & Full stack developer</span>
          <p>
            Hello there! I'm a passionate undergraduate student currently
            enrolled in the Bachelor of Engineering and Technology program at
            BMS Institute of Technology (BMSIT), specializing in Computer
            Science and Engineering (CSE)
          </p>
          <div className="about-icons">
            <Link to="https://github.com/Community-Programmer">
              <i className="fa-brands fa-github fa-2xl" />
            </Link>

            <Link to="https://www.linkedin.com/in/sarthak-patel23">
              <i className="fa-brands fa-linkedin fa-2xl" />
            </Link>

            <Link to="https://wa.me/918081239465">
              <i className="fa-brands fa-whatsapp fa-2xl" />
            </Link>

            <Link to="mailto:sarthakpatel230204@gmail.com">
              <i className="fa-solid fa-envelope fa-2xl" />
            </Link>
          </div>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="about-cta-button"
            >
              Contact
            </motion.button>
          </Link>
        </div>

        <div className="about-right-section">
          <h1>About me</h1>
          <p>
            As a dedicated full-stack developer, I thrive on the challenges that
            come with creating robust and innovative solutions. My skill set
            extends across various programming languages, frameworks, and
            technologies, allowing me to craft dynamic and efficient
            applications. Whether it's front-end development to enhance user
            experiences or back-end programming for seamless functionality, I
            find joy in bringing ideas to life through code
          </p>
          <h1>Experience & Skills</h1>

          <div className="tab1">
            <div className="skill-info">
              <p>
                I am proficient in multiple programming languages and have
                contributed to various open-source projects. This diverse
                experience has strengthened my skills and allowed me to
                collaborate effectively within the global developer community
                volunteer in a web automation role at a government organization
                managed by the Government of Uttar Pradesh
              </p>
            </div>

            <div data-aos="zoom-in"
     data-aos-duration="1000" className="skill-progress">
              <p>HTML</p>
              <div className="progress">
                <div className="skill-bar html"></div>
              </div>
              <p>C/C++</p>
              <div className="progress">
                <div className="skill-bar cp"></div>
              </div>
              <p>CSS</p>
              <div className="progress">
                <div className="skill-bar css"></div>
              </div>
              <p>JAVASCRIPT</p>
              <div className="progress">
                <div className="skill-bar javascript"></div>
              </div>
              <p>NODEJS</p>
              <div className="progress">
                <div className="skill-bar nodejs"></div>
              </div>
            </div>
          </div>
          <div className="general-info">
            <p>
              <i className="fa-solid fa-calendar-days " />
              23 February 2004
            </p>
            <p>
              <i className="fa-solid fa-location-dot" />
              Bengaluru,Karnataka
            </p>
          </div>

          <h1>Hobbies & Interest</h1>
          <div className="tab2">
            <p>
              <i className="fa-solid fa-check-double"></i>Travelling
            </p>
            <p>
              <i className="fa-solid fa-check-double"></i>Gaming
            </p>
            <p>
              <i className="fa-solid fa-check-double"></i>Reading
            </p>
            <p>
              <i className="fa-solid fa-check-double"></i>Coding
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
