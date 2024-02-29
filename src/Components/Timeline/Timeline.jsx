import React from "react";
import "./Timeline.css";

const Timeline = (props) => {
  return (
    <>
      <div className="timeline">
        <div className={`container ${props.position}`} >
          <div className="content" data-aos={`${props.showAnimations ? 'fade-right':'' }`} data-aos-duration="1000">
            <h3>{props.title}</h3>
            <span>{props.year}</span>
            {props.listItems.map((data, index) => {
              return <li key={index}>{data.text}</li>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
