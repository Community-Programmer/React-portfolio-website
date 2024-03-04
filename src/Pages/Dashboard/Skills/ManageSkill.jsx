import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolioData } from "../../../Store/DataSlice";
import Skillcard from "../../../Components/SkillCard/Skillcard";
import axios from "axios";
import API_BASE_URL from "../../../config/config";
import AlertModal from "../../../Components/AlertModal/AlertModal";

const ManageSkill = () => {

  const dispatch = useDispatch();

  const data = useSelector((state) => state.portfolioData.data);
  const status = useSelector((state) => state.portfolioData.status);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  const [formData, setFormData] = useState({
    svgData: "",
    title: "",
    description: "",
    isVisible: true,
  });

  const addSkill = () =>{
    setFormData({
      svgData: "",
      title: "",
      description: "",
      isVisible: true,
    })
    setModalOpen(!isModalOpen);
    setIsEdit(false);
  }

  const editSkill = (id) => {
    setModalOpen(!isModalOpen);
    setIsEdit(true);
    data.skillData
      .filter((data) => data._id === id)
      .map((data) => {
        return setFormData(data);
      });
  }

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      setFormData({ ...formData, isVisible: !formData.isVisible });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

   // Function to add new skillData in database

  const addNewSkill = async (event) => {

    event.preventDefault();

    const response = await axios.post(`${API_BASE_URL}/data/addskill`,formData,{
      withCredentials: true,
    });

    if (response.status === 201) {
      setModalOpen(false);
    };
    
    refreshData();

  }

    // Function to modify skillData in database

    const modifySkill = async (event) => {
      event.preventDefault();
      const response = await axios.put(
        `${API_BASE_URL}/data/editskill/${formData._id}`,
        formData,
        {
          withCredentials: true,
        }
      );
  
      if (response.status === 201) {
        setModalOpen(false);
      }
      
      refreshData();
    };

  // Function to delete SkillData from database
  
  const [itemId,setItemId] =useState('');

  const OpenAlert = (id) =>{
    setIsAlert(!isAlert);
    setItemId(id);
  }

  const deleteSkil = async() => {

    await axios.delete(`${API_BASE_URL}/data/deleteskill/${itemId}`,{
      withCredentials: true,
    });

    refreshData();

  }


  // function to refresh the redux store portfolio data
  const refreshData = () => {
    dispatch(fetchPortfolioData());
  };

  const handleButtonClick = isEdit ? modifySkill : addNewSkill;
  const buttonText = isEdit ? "Modify Skill" : "Add Skill";

  return (
    <>
      <div className="dashboardContainer">
        
      {isAlert && <AlertModal setIsAlert = {setIsAlert} removeItem = {deleteSkil}/>}
        <div className="dashboardHeader">
          <h1>Manage Skills</h1>
          <button onClick={addSkill} className="dashboardBtn">
            <i className="fa-solid fa-plus" /> Add New Project
          </button>
        </div>


        <div className={`dashboardForms ${isModalOpen ? "OpenModal" : ""}`}>
          <form>
          <label htmlFor="svgData">
              Image Link or Svg data
              <input
                id="svgData"
                value={formData.svgData}
                onChange={handleChange}
                type="text"
                name="svgData"
              />
          </label>

          <label htmlFor="title">
             Title 
              <input
                id="title"
                value={formData.title}
                onChange={handleChange}
                type="text"
                name="title"
              />
          </label>

          <label htmlFor="description">
             Description
              <input
                id="description"
                value={formData.description}
                onChange={handleChange}
                type="text"
                name="description"
              />
          </label>

          <label htmlFor="isVisible">
              isvisible
              <div className="switch">
                <input
                  id="isVisible"
                  type="checkbox"
                  checked={formData.isVisible}
                  onChange={handleChange}
                />
                <span className="slider round"></span>
              </div>
            </label>

          <button onClick={handleButtonClick} type="submit">
              {buttonText}
            </button>
          </form>
          <i
            onClick={() => setModalOpen(!isModalOpen)}
            className="fa-solid fa-x"
          />
        </div>
      
        <div className="dashboardSubContainer">
          <h1 className="heading">Skills</h1>
        {status === "idle" ? (
        <>
          <div className="skills">
            {data.skillData.map((skill, index) => {
              return (
                <div key={index} className="skillBox">
                <Skillcard
                  key={index}
                  svg={skill.svgData}
                  title={skill.title}
                  description={skill.description}
                />
                <div className="icons-box">
                  <i onClick={() => editSkill(skill._id)}className="fa-solid fa-pen-to-square"/>
                  <i onClick={() => OpenAlert(skill._id)}className="fa-solid fa-trash"/>
                      </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
        </div>


      </div>
    </>
  );
};

export default ManageSkill;
