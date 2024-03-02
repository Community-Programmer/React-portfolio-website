import React from "react";
import "./Skills.css";
import Skillcard from "../../Components/SkillCard/Skillcard";
import { useSelector } from "react-redux";

const Skills = () => {
  const data = useSelector((state) => state.portfolioData.data);
  const status = useSelector((state) => state.portfolioData.status);

  return (
    <>
      {status === "idle" ? (
        <>
          <h1 className="heading">Skills</h1>
          <div className="skills">
            {data.skillData.filter((skill) =>  skill.isVisible).map((skill, index) => {
              return (
                <Skillcard
                  key={index}
                  svg={skill.svgData}
                  title={skill.title}
                  description={skill.description}
                  showAnimations ={true}
                />
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Skills;
