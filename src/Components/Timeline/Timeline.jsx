import React from "react";
import "./Timeline.css";

const Timeline = (props) => {
  return (
    <>
      <div class="timeline">
        <div class={`container ${props.position}`} >
          <div class="content" data-aos="fade-right" data-aos-duration="1000">
            <h3>{props.title}</h3>
            <span>{props.year}</span>
            {props.listItems.map((data, index) => {
              return (<li>{data.text}</li>);
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
