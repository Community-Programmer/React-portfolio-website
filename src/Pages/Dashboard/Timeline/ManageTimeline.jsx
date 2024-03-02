import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Timeline from "../../../Components/Timeline/Timeline";
import axios from "axios";
import API_BASE_URL from "../../../config/config";
import { fetchPortfolioData } from "../../../Store/DataSlice";
import AlertModal from "../../../Components/AlertModal/AlertModal";

const ManageTimeline = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.portfolioData.data);
  const status = useSelector((state) => state.portfolioData.status);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    year: "",
    listItems: [],
    position: "",
    isVisible: true,
  });

  //  Function to manage form input data

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

  // Fuction for addNewTimeline Button

  const addTimeline = () => {
    setFormData({
      title: "",
      year: "",
      listItems: "",
      position: "",
      isVisible: true,
    });
    setModalOpen(!isModalOpen);
    setIsEdit(false);
  };

  // Set form with exisiting data from redux store

  const editTimeline = async (id) => {
    setModalOpen(!isModalOpen);
    setIsEdit(true);
    data.timelineData
      .filter((data) => data._id === id)
      .map((data) => {
        return setFormData({
          ...data,
          listItems: data.listItems.map((item) => item.text).join(" ~ "),
        });
      });
  };

  // Function to modify timelineData in database

  const modifyTimeline = async (event) => {
    event.preventDefault();
    const response = await axios.put(
      `${API_BASE_URL}/data/edittimeline/${formData._id}`,
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

  // Function to add new timelineData in database

  const addNewTimeline = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      `${API_BASE_URL}/data/addtimeline`,
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

  // Function to delete timelineData from database

  const [itemId,setItemId] =useState('');
  const OpenAlert = (id) =>{
    setIsAlert(!isAlert);
    setItemId(id);
  }

  const removeTimeline = async () => {
    await axios.delete(`${API_BASE_URL}/data/deletetimeline/${itemId}`, {
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

  const handleButtonClick = isEdit ? modifyTimeline : addNewTimeline;
  const buttonText = isEdit ? "Modify Timeline" : "Add Timeline";

  return (
    <>
      <div className="dashboardContainer">
      {isAlert && <AlertModal setIsAlert = {setIsAlert} removeItem = {removeTimeline}/>}
        <div className="dashboardHeader">
          <h1>Manage Timeline</h1>
          <button onClick={addTimeline} className="dashboardBtn">
            <i className="fa-solid fa-plus" /> Add New Timeline
          </button>
        </div>

        <div className={`dashboardForms ${isModalOpen ? "OpenModal" : ""}`}>
          <form>
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
            <label htmlFor="year">
              Year
              <input
                id="year"
                value={formData.year}
                onChange={handleChange}
                type="text"
                name="year"
              />
            </label>
            <label htmlFor="listItems">
              Description (use ~ separated values for different li)
              <input
                id="listItems"
                value={formData.listItems}
                onChange={handleChange}
                type="text"
                name="listItems"
              />
            </label>
            <label htmlFor="position">
              Position
              <input
                id="position"
                type="text"
                value={formData.position}
                onChange={handleChange}
                name="position"
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
          <h1 className="heading">My Journey</h1>
          {status === "idle" ? (
            <>
              {data.timelineData.map((data, index) => {
                return (
                  <div key={index} className="timelineBox">
                    <Timeline
                      title={data.title}
                      year={data.year}
                      listItems={data.listItems}
                      position={data.position}
                      showAnimations={false}
                    />
                    <div
                      className={` icons-box ${
                        data.position === "left" ? "leftIcon" : "rightIcon"
                      }`}
                    >
                      <i
                        onClick={() => {
                          editTimeline(data._id);
                        }}
                        className="fa-solid fa-pen-to-square"
                      />
                      <i
                        onClick={() => {
                          OpenAlert(data._id);
                        }}
                        className="fa-solid fa-trash"
                      />
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ManageTimeline;
