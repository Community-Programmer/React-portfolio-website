import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import API_BASE_URL from '../../config/config';

const Project = () => {

    const [projectData, setProjectData] = useState([]);

    useEffect(()=>{
        const fetchProjectData = async () => {
            try {
              const response = await axios.get(
                `${API_BASE_URL}/data/getproject`
              );
              setProjectData(response.data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
          fetchProjectData();
    },[])
    console.log(projectData)
  return (
    <>
    <h1 className='heading'>My Projects</h1>
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
    </>
  )
}

export default Project