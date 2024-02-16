import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import user from "../../Assets/Images/user.png";
import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Skills from "../skills/Skills";
import Technologies from "../../Components/Technologies/Technologies";
import axios from "axios";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import Footer from "../../Components/Footer/Footer";
import Timeline from "../../Components/Timeline/Timeline";
import API_BASE_URL from "../../config/config";

const Home = () => {
  const [techData, setTechData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [timelineData, setTimelineData] = useState([]);

  // useEffect hook to make the API request when the component mounts
  useEffect(() => {
    const fetchTechnologiesData = async () => {
      try {
        // Make an Axios GET request to your API endpoint
        const response = await axios.get(
          `${API_BASE_URL}/data/gettechnologies`
        );

        // Set the fetched data to the state
        setTechData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchTechnologiesData();

    const fetchProjectData = async () => {
      try {
        // Make an Axios GET request to your API endpoint
        const response = await axios.get(
          `${API_BASE_URL}/data/latestproject`
        );

        // Set the fetched data to the state
        setProjectData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProjectData();

    

    const fetchTimeline = async () => {
      try {
        // Make an Axios GET request to your API endpoint
        const response = await axios.get(
          `${API_BASE_URL}/data/hometimeline`
        );

        // Set the fetched data to the state
        setTimelineData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchTimeline();
  

  }, []);

  


  console.log(projectData)

  return (
    <>
      <section className="main-section">
        <div
          data-aos="zoom-in" data-aos-duration="1500"
          className="info"
        >
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
            <Link to="https://github.com/Community-Programmer">
              <i className="fa-brands fa-github fa-2xl" />
            </Link>

            <Link to="https://www.linkedin.com/in/sarthak-patel23">
              <i className="fa-brands fa-linkedin fa-2xl" />
            </Link>

            <Link to="https://wa.me/918081239465">
              <i class="fa-brands fa-whatsapp fa-2xl" />
            </Link>

            <Link to="mailto:sarthakpatel230204@gmail.com">
              <i class="fa-solid fa-envelope fa-2xl" />
            </Link>
          </div>
          <Link to='/projects'>
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
        <div class="custom-shape-divider-bottom-1705068149">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <Skills />

      <h1 className="heading">Technologies I know</h1>
      <div className="technologies">
        {techData.map((data, index) => {
          return (
            <Technologies
              key={index}
              link={data.link}
              imagePath={data.imagePath}
              alt={data.alt}
            />
          );
        })}
      </div>

      <h1 className="heading">My Latest Projects</h1>
      <div className="projects">
        {projectData.map((data, index) => {
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
            />
          );
        })}
      </div>

      <h1 className="heading">My Journey</h1>
      {timelineData.map((data, index) => {
          return (
            <Timeline
            key={index}
            title={data.title}
            year={data.year}
            listItems={data.listItems}
            position={data.position}


            />
          );
        })}
        <div className="journey-btn">
    
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="cta-button journery-btn "
            onClick={()=>{window.open('/timeline')}}
          >
            See Full Journey
          </motion.button>
          
        </div>
    </>
  );
};

export default Home;
