import React from 'react'
import { useSelector } from 'react-redux';
import '../Dashboard.css'
import axios from 'axios';
import API_BASE_URL from '../../../config/config';

const ManageTechnologies = () => {
  const data = useSelector((state) => state.portfolioData.data);
  const status = useSelector((state) => state.portfolioData.status);


  const removeTechnologies= async(id)=>{
    await axios.delete(`${API_BASE_URL}/data/deletetechnologies/${id}`,{
      withCredentials: true
  });
  }
  return (
    <>
    <div className='dashboardContainer'>
    <h1>Manage Technologies</h1>
    {status === "idle" ? (
    <div className='technologiesContainer'>
    {data.technologiesData.map((data, index) => {
              return (
                <div key={index}>
                  <img src={data.imagePath} alt={data.alt} />
                  <i onClick={()=>removeTechnologies(data._id)} className="fa-solid fa-trash"/>
                </div>
               
              );
            })}
    </div>):''}
    </div>
    </>
  )
}

export default ManageTechnologies