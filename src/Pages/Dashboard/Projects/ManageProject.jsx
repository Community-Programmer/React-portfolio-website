import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolioData } from "../../../Store/DataSlice";
import API_BASE_URL from "../../../config/config";
import ProjectCard from "../../../Components/ProjectCard/ProjectCard";
import AlertModal from "../../../Components/AlertModal/AlertModal";

const ManageProject = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.portfolioData.data);
  const status = useSelector((state) => state.portfolioData.status);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  const [formData, setFormData] = useState({
    projectImage: "",
    title: "",
    description: "",
    technologiesUsed: "",
    startDate: "",
    endDate: "",
    isLatest: true,
    isAvailable: false,
    isVisible: false,
    projectLink: "",
  });

  const addProject = () => {
    setFormData({
      projectImage: "",
      title: "",
      description: "",
      technologiesUsed: "",
      startDate: "",
      endDate: "",
      isLatest: true,
      isAvailable: false,
      isVisible: false,
      projectLink: "",
    });
    setModalOpen(!isModalOpen);
    setIsEdit(false);
  };

  const editproject = (id) => {
    setModalOpen(!isModalOpen);
    setIsEdit(true);
    data.projectData
      .filter((data) => data._id === id)
      .map((data) => {
        return setFormData({
          ...data,
          technologiesUsed: data.technologiesUsed
            .map((item) => item.alt)
            .join(", "),
          startDate: new Date(data.startDate).toISOString().split("T")[0],
          endDate: new Date(data.endDate).toISOString().split("T")[0],
        });
      });
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "checkbox" && name === "isAvailable") {
      setFormData({ ...formData, isAvailable: !formData.isAvailable });
    } else if (type === "checkbox" && name === "isLatest") {
      setFormData({ ...formData, isLatest: !formData.isLatest });
    } 
    else if(type === "checkbox" && name === "isVisible"){
      
      setFormData({ ...formData, isVisible: !formData.isVisible });

    }
    else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Function to add new ProjectData in database

  const addNewProject = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      `${API_BASE_URL}/data/addproject`,
      formData,
      {
        withCredentials: true,
      }
    );

    if (response.status === 200) {
      setModalOpen(false);
    }

    refreshData();
  };

  // Function to modify timelineData in database

  const modifyProject = async (event) => {
    event.preventDefault();
    const response = await axios.put(
      `${API_BASE_URL}/data/editproject/${formData._id}`,
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

  // Function to delete ProjectData from database

  const [itemId,setItemId] =useState('');

  const OpenAlert = (id) =>{
    setIsAlert(!isAlert);
    setItemId(id);
  }

  const deleteProject = async () => {
    await axios.delete(`${API_BASE_URL}/data/deleteproject/${itemId}`, {
      withCredentials: true,
    });

    refreshData();
  };

  // function to refresh the redux store portfolio data
  const refreshData = () => {
    dispatch(fetchPortfolioData());
  };

  // Set button click action according to mode
  // Modify or Add New Timeline

  const handleButtonClick = isEdit ? modifyProject : addNewProject;
  const buttonText = isEdit ? "Modify Project" : "Add Project";

  return (
    <>
      <div className="dashboardContainer">
      {isAlert && <AlertModal setIsAlert = {setIsAlert} removeItem = {deleteProject}/>}
        <div className="dashboardHeader">
          <h1>Manage Projects</h1>
          <button onClick={addProject} className="dashboardBtn">
            <i className="fa-solid fa-plus" /> Add New Project
          </button>
        </div>

        <div className={`dashboardForms ${isModalOpen ? "OpenModal" : ""}`}>
          <form>
            <label htmlFor="projectImage">
              Project Image Url
              <input
                id="projectImage"
                value={formData.projectImage}
                onChange={handleChange}
                type="text"
                name="projectImage"
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
            <label htmlFor="technologiesUsed">
              Technologies Used (comma separated value)
              <input
                id="technologiesUsed"
                type="text"
                value={formData.technologiesUsed}
                onChange={handleChange}
                name="technologiesUsed"
              />
            </label>
            <div className="labelBox">
              <label htmlFor="startDate">
                startDate
                <input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                  name="startDate"
                />
              </label>
              <label htmlFor="endDate">
                endDate
                <input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={handleChange}
                  name="endDate"
                />
              </label>
            </div>

            <div className="labelBox">
              <label htmlFor="isLatest">
                Latest project
                <div className="switch">
                  <input
                    id="isLatest"
                    type="checkbox"
                    checked={formData.isLatest}
                    onChange={handleChange}
                    name="isLatest"
                  />
                  <span className="slider round"></span>
                </div>
              </label>

              <label htmlFor="isAvailable">
                Is Available
                <div className="switch">
                  <input
                    id="isAvailable"
                    type="checkbox"
                    checked={formData.isAvailable}
                    onChange={handleChange}
                    name="isAvailable"
                  />
                  <span className="slider round"></span>
                </div>
              </label>

              <label htmlFor="isVisible">
                Is Visible
                <div className="switch">
                  <input
                    id="isVisible"
                    type="checkbox"
                    checked={formData.isVisible}
                    onChange={handleChange}
                    name="isVisible"
                  />
                  <span className="slider round"></span>
                </div>
              </label>
            </div>
            {formData.isAvailable && (
              <label htmlFor="projectLink">
                Project Link
                <input
                  id="projectLink"
                  value={formData.projectLink}
                  onChange={handleChange}
                  type="text"
                  name="projectLink"
                />
              </label>
            )}
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
          {status === "idle" ? (
            <>
              <h1 className="heading">My Latest Projects</h1>
              <div className="projects">
                {data.projectData.map((data, index) => {
                  return (
                    <div key={index} className="projectBox">
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
                      <div className="icons-box">
                        <i
                          onClick={() => editproject(data._id)}
                          className="fa-solid fa-pen-to-square"
                        />
                        <i
                          onClick={() => OpenAlert(data._id)}
                          className="fa-solid fa-trash"
                        />
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

export default ManageProject;
