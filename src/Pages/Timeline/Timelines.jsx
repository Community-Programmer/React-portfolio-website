import React from "react";
import Timeline from "../../Components/Timeline/Timeline";
import { useSelector } from "react-redux";

const Timelines = () => {
  const data = useSelector((state) => state.portfolioData.data);
  const status = useSelector((state) => state.portfolioData.status);

  return (
    <>
      {status === "idle" ? (
        <>
          <h1 className="heading">My Journey</h1>
          {data.timelineData.map((data, index) => {
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
      ) : (
        ""
      )}
    </>
  );
};

export default Timelines;
