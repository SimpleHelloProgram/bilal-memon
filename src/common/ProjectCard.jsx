import React from "react";

function ProjectCard({ src, link, h3, pp }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={h3} />
      <h3>{h3}</h3>
      <p>{pp}</p>
    </a>
  );
}

export default ProjectCard;
