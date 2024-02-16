import React, { useEffect, useState } from 'react'
import Timeline from '../../Components/Timeline/Timeline';
import axios from 'axios';
import API_BASE_URL from '../../config/config';

const Timelines = () => {

    const [timelineData, setTimelineData] = useState([]);
    useEffect(()=>{

        const fetchTimeline = async () => {
            try {
              // Make an Axios GET request to your API endpoint
              const response = await axios.get(
                `${API_BASE_URL}/data/gettimeline`
              );
      
              // Set the fetched data to the state
              setTimelineData(response.data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
          fetchTimeline();
    },[])


  return (
    <>
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
    </>
  )
}

export default Timelines