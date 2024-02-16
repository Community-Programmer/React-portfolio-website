import React from "react";
import "./ProjectCard.css";
import { motion } from "framer-motion";
import Technologies from "../Technologies/Technologies";


const ProjectCard = (props) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const buttonVariants = {
    enabled: {
      opacity: 1,
      scale: 1,
      cursor: "pointer",
    },
    disabled: {
      opacity: 0.5,
      scale: 1,
      cursor: "not-allowed",
    },
  };

  return (
    <>
      <div className="project-card" >
        <img className="project-image" src={props.projectImage} alt="project" />
        <div className="project-info">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <div className="technologies-used">
            <b>Technologies Used :</b>
            <div className="tech-stacks">
            {props.TechnologiesUsed.map((data, index) => {
              return (
                <Technologies
                  key={index}
                  link={data.link}
                  imagePath={data.imagePath}
                  width="45"
                  height="45"
                />
              );
            })}
            </div>
          </div>

          <div className="project-date">
            <p>
              <b>Start Date: </b>
              {formatDate(props.startDate)}
            </p>
            <p>
              <b>End Date: </b>
              {formatDate(props.endDate)}
            </p>
          </div>

          <motion.button
            disabled={!props.isAvailable}
            variants={buttonVariants}
            initial="enabled"
            animate={!props.isAvailable ? "disabled" : "enabled"}
            whileHover={props.isAvailable ? { scale: 1.1 } : ""}
            whileTap={props.isAvailable ? { scale: 0.9 } : ""}
            transition={{ duration: 0.5 }}
            className={`cta-button`}
            onClick={() => {
              window.open(`${props.projectLink}`, "_blank");
            }}
          >
            See Project
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
