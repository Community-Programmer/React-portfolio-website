import React from "react";
import "../Dashboard.css";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const data = useSelector((state) => state.portfolioData.data);
  const status = useSelector((state) => state.portfolioData.status);

  return (
    <>
      <div className="dashboardContainer">
        <h1>Dashboard Page</h1>
        {status === "idle" ? (
          <>
            <div>No of technologies Added: {data.technologiesData.length}</div>
            <div>No of projects Added: {data.projectData.length}</div>
            <div>No of skills Added: {data.skillData.length}</div>
            <div>No of technologies Added: {data.timelineData.length}</div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Dashboard;
