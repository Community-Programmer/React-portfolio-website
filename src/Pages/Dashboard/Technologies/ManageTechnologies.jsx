import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import '../Dashboard.css'
import axios from 'axios';
import API_BASE_URL from '../../../config/config';

const ManageTechnologies = () => {

  const data = useSelector((state) => state.portfolioData.data);
  const status = useSelector((state) => state.portfolioData.status);

  const [isModalOpen, setModalOpen] = useState(false);

  const removeTechnologies= async(id)=>{
    await axios.delete(`${API_BASE_URL}/data/deletetechnologies/${id}`,{
      withCredentials: true
  });
  }

  const handleSubmit =async(event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData);

    const response = await axios.post(`${API_BASE_URL}/data/addtechnologies`,formDataObj,{
        withCredentials: true
      })

    if(response.status === 201){
      setModalOpen(false)

    }

  }
  return (
    <>
    <div className='dashboardContainer'>
    <h1>Manage Technologies</h1>

    <button onClick={()=>setModalOpen(!isModalOpen)} className="dashboardBtn">
    <i class="fa-solid fa-plus"/> Add Technologies
    </button>

    <div className={`dashboardForms ${isModalOpen ? 'OpenModal':''}`}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Link">
        Link
        <input type='text' name='link'/>
        </label>
        <label htmlFor="imagePath">
          Image Link
        <input type='text' name='imagePath'/>
        </label>
        <label htmlFor="alt">
          Alt text    
        <input type='text' name='alt'/>
        </label>
        
        <button type="submit">Submit</button>
      </form>
      <i onClick={()=>setModalOpen(!isModalOpen)} className="fa-solid fa-x"/>
    </div>

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