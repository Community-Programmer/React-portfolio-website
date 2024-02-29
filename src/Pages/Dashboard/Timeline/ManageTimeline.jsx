import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Timeline from "../../../Components/Timeline/Timeline";
import axios from "axios";
import API_BASE_URL from "../../../config/config";
import { fetchPortfolioData } from "../../../Store/DataSlice";

const ManageTimeline = () => {
  const data = useSelector((state) => state.portfolioData.data);
  const status = useSelector((state) => state.portfolioData.status);
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    year: "",
    listItems: [],
    position: "",
    isVisible: true,
  });

  const removeTimeline = async (id) => {
    await axios.delete(`${API_BASE_URL}/data/deletetimeline/${id}`, {
      withCredentials: true,
    });
    refreshData();
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (name === "listItems") {
      const listItems = value.split(",").map((part) => part.trim());
      const listItemsArray = listItems.map((text) => ({ text: text }));
      setFormData({
        ...formData,
        listItems: listItemsArray,
      });
    } else if (type === "checkbox") {
      setIsChecked(!isChecked);
      setFormData({ ...formData, isVisible: !isChecked });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const response = await axios.post(
      `${API_BASE_URL}/data/addtimeline`,
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

  const refreshData = () => {
    dispatch(fetchPortfolioData());
  };

  return (
    <>
      <div className="dashboardContainer">
        <h1>Manage Timeline</h1>

        <button
          onClick={() => setModalOpen(!isModalOpen)}
          className="dashboardBtn"
        >
          <i class="fa-solid fa-plus" /> Add New Timeline
        </button>

        <div className={`dashboardForms ${isModalOpen ? "OpenModal" : ""}`}>
          <form onSubmit={handleSubmit}>
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
              Description (use comma separated values)
              <input
                id="listItems"
                value={formData.listItems.map((item) => item.text).join(", ")}
                onChange={handleChange}
                type="text"
                name="listItems"
              />
            </label>
            <label htmlFor="position">
              Position
              <input
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
                  checked={isChecked}
                  onChange={handleChange}
                />
                <span className="slider round"></span>
              </div>
            </label>

            <button type="submit">Submit</button>
          </form>
          <i
            onClick={() => setModalOpen(!isModalOpen)}
            className="fa-solid fa-x"
          />
        </div>

        <div className="timelineContainer">
          {status === "idle" ? (
            <>
              {data.timelineData.map((data, index) => {
                return (
                  <div className="timelineBox">
                    <Timeline
                      key={index}
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
                      <i className="fa-solid fa-pen-to-square" />
                      <i
                        onClick={() => {
                          removeTimeline(data._id);
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
