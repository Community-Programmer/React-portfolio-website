import React from "react";
import "./Skillcard.css";


const Skillcard = (props) => {

  return (
    <>
      <div 
     data-aos="zoom-in"
     data-aos-duration="1000"
      className="card">
        <img src={`data:image/svg+xml;base64,${props.svg}`} alt="web" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default Skillcard;
