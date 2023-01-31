import React from "react";
import "./skills.css";
import htmlImg from "../../assets/img/html.png";
import cssImg from "../../assets/img/css.png";
import javascriptImg from "../../assets/img/javascript.png";
import reactImg from "../../assets/img/react.png";
import nodejsImg from "../../assets/img/nodejs.png";
import mongodbImg from "../../assets/img/mongodb.png";
import expressImg from "../../assets/img/express.png";
import bootstrapImg from "../../assets/img/bootstrap.png";

const Skills = () => {
  let skills = [
    {
      name: "HTML",
      imgSrc: htmlImg,
      style: { padding: ".6rem .3rem" },
    },
    {
      name: "CSS",
      imgSrc: cssImg,
      style: {},
    },
    {
      name: "JAVASCRIPT",
      imgSrc: javascriptImg,
      style: {},
    },
    {
      name: "REACT",
      imgSrc: reactImg,
      style: {},
    },
    {
      name: "NODE JS",
      imgSrc: nodejsImg,
      style: { },
    },
    {
      name: "EXPRESS",
      imgSrc:expressImg,
      style: {},
    },
    {
      name: "MONGO DB",
      imgSrc: mongodbImg,
      style: {},
    },
    {
      name: "Bootstrap",
      imgSrc: bootstrapImg,
      style: {},
    },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My tech stack</span>
      <div className="skill-container container grid">
        {skills.map(skill=>{
          return(
          <div key={skill.name} className="skill-item">
          <img
            className="skill-img"
            src={skill.imgSrc}
            style={skill.style}
            alt=""
          />
          <p className="skill-item-title">{skill.name}</p>
        </div>)
        })}
      </div>
    </section>
  );
};

export default Skills;
