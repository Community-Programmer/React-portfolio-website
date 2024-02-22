import React from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { useSelector } from "react-redux";

const Project = () => {
  const data = useSelector((state) => state.portfolioData.data);
  const status = useSelector((state) => state.portfolioData.status);

  return (
    <>
      {status === "idle" ? (
        <>
          <h1 className="heading">My Projects</h1>
          <div className="projects">
            {data.projectData.map((data, index) => {
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
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Project;
