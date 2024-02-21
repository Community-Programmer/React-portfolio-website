import React from "react";
import "./Skills.css";
import Skillcard from "../../Components/SkillCard/Skillcard";
import { useSelector } from "react-redux";

const Skills = () => {
  const data = useSelector((state) => state.projectData.data);
  const status = useSelector((state) => state.projectData.status);

  return (
    <>
      {status === "idle" ? (
        <>
          <h1 className="heading">Skills</h1>
          <div className="skills">
            {data.skillData.map((skill, index) => {
              return (
                <Skillcard
                  key={index}
                  svg={skill.svgData}
                  title={skill.title}
                  description={skill.description}
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
