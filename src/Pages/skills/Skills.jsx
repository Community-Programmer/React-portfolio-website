import React, { useEffect, useState } from 'react'
import './Skills.css'
import Skillcard from '../../Components/SkillCard/Skillcard'
import axios from 'axios'
import API_BASE_URL from '../../config/config'

const Skills = () => {

  const [data, setData] = useState([]);

  // useEffect hook to make the API request when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make an Axios GET request to your API endpoint
        const response = await axios.get(`${API_BASE_URL}/data/getskill`);

        // Set the fetched data to the state
        setData(response.data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);
  
  return (
    <>
    <h1 className='heading'>Skills</h1>
    <div className="skills">
    {data.map((skill,index)=>{
      return <Skillcard  key={index} svg={skill.svgData} title={skill.title} description={skill.description}/>
    })}

    </div>
    </>
  )
}

export default Skills