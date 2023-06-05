import React from "react";
import { Link } from "react-router-dom";
const Project = ({
  id,
  title,
  description,
  technologies,
  deployUrl,
  githubUrl,
  image,
}) => {
  return (
    <div className="border w-[200px] p-6">
      <h3>{title}</h3>
      {/* <p>{description}</p> */}
      <ul>{technologies.map((el)=>{
        return (
          <li>{el}</li>
        )
      })}</ul>
      <img src={image} alt="" />
      <Link></Link>
      <Link target="_blanck" to={deployUrl}>
        <span class="material-symbols-outlined">language</span>
      </Link>
      <Link target="_blanck" to={githubUrl}>
        <i class="bi bi-github"></i>
      </Link>
    </div>
  );
};

export default Project;
