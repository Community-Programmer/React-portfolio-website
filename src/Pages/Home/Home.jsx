import React from "react";
import Typewriter from "typewriter-effect";
import user from "../../Assets/Images/user.png";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Technologies from "../../Components/Technologies/Technologies";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import Timeline from "../../Components/Timeline/Timeline";
import { useSelector } from "react-redux";
import Skillcard from "../../Components/SkillCard/Skillcard";

const Home = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.portfolioData.data);
  const status = useSelector((state) => state.portfolioData.status);

  return (
    <>
      <section className="main-section">
        <div data-aos="zoom-in" data-aos-duration="1500" className="info">
          <h1>Sarthak Patel</h1>
          <Typewriter
            options={{
              strings: [
                "Web Development",
                "C/C++",
                "Web Automation",
                "Deployment",
                "MERN",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <p>
            Welcome to my digital space, where creativity meets functionality!
            I'm Sarthak, and I'm on a mission to craft meaningful digital
            experiences through various set of technologies. Whether it's
            coding, designing, or problem-solving, I thrive on pushing
            boundaries and embracing new challenges.
          </p>

          <div className="social-links">
            <Link to="https://github.com/Community-Programmer" target="_blank">
              <i className="fa-brands fa-github fa-2xl" />
            </Link>

            <Link to="https://www.linkedin.com/in/sarthak-patel23" target="_blank">
              <i className="fa-brands fa-linkedin fa-2xl" />
            </Link>

            <Link to="https://wa.me/918081239465" target="_blank">
              <i className="fa-brands fa-whatsapp fa-2xl" />
            </Link>

            <Link to="mailto:sarthakpatel230204@gmail.com">
              <i className="fa-solid fa-envelope fa-2xl" />
            </Link>
          </div>
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="cta-button"
            >
              See Projects
            </motion.button>
          </Link>
        </div>

        <div className="user-img">
          <img
            data-aos="zoom-in"
            data-aos-duration="1500"
            src={user}
            alt="user"
          />
        </div>
        <div className="custom-shape-divider-bottom-1705068149">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {status === "idle" ? (
        <>
          <h1 className="heading">Skills</h1>
          <div className="skills">
            {data.skillData.filter((skill) =>  skill.isVisible).map((skill, index) => {
              return (
                <Skillcard
                  key={index}
                  svg={skill.svgData}
                  title={skill.title}
                  description={skill.description}
                  showAnimations ={true}
                />
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}

      {status === "idle" ? (
        <>
          <h1 className="heading">Technologies I know</h1>
          <div className="technologies">
            {data.technologiesData.map((data, index) => {
              return (
                <Technologies
                  key={index}
                  link={data.link}
                  imagePath={data.imagePath}
                  showAnimations={true}
                  alt={data.alt}
                />
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}

      {status === "idle" ? (
        <>
          <h1 className="heading">My Latest Projects</h1>
          <div className="projects">
            {data.projectData
              .filter((project) => project.isLatest && project.isVisible)
              .map((data, index) => {
                return (
                  <ProjectCard
                    key={index}
                    projectImage={data.projectImage}
                    title={data.title}
                    description={data.description}
                    TechnologiesUsed={data.technologiesUsed}
                    startDate={data.startDate}
                    endDate={data.endDate}
                    projectLink={data.projectLink}
                    isAvailable={data.isAvailable}
                    showAnimations={true}
                  />
                );
              })}
          </div>
        </>
      ) : (
        ""
      )}

      {status === "idle" ? (
        <>
          <h1 className="heading">My Journey</h1>
          {data.timelineData.filter((timeline) => timeline.isVisible).slice(0, 4).map((data, index) => {
            return (
              <Timeline
                key={index}
                title={data.title}
                year={data.year}
                listItems={data.listItems}
                position={data.position}
                showAnimations={true}
              />
            );
          })}
        </>
      ) : (
        ""
      )}
      <div className="journey-btn">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="cta-button journery-btn "
          onClick={() => {
            navigate("/timeline");
          }}
        >
          See Full Journey
        </motion.button>
      </div>
    </>
  );
};

export default Home;
