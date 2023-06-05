import React from "react";
import Project from "../Project/Project";
import { results } from "../../data/projects";
const Projects = () => {
  return (
    <div className="">
      <h1 className="color-blue text-5xl my-4 font-semibold">Projects</h1>{" "}
      <div className="flex flex-row gap-4">

      {results.map((el) => {
        return (
          <Project
            id={el.id}
            name={el.name}
            description={el.description}
            detailDescription={el.detailDescription}
            technologies={el.technologies}
            image={el.image}
            detailImage={el.detailImage}
            deployUrl={el.deployUrl}
            githubUrl={el.githubUrl}
          />
        );
      })}
      </div>
    </div>
  );
};

export default Projects;
