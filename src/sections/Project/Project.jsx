import React from "react";
import styles from "./ProjectStyle.module.css";
import flashcard from "../../assets/FlashcardSassImg.webp";
import hispter from "../../assets/hipsster.png";
import ProjectCard from "../../common/ProjectCard";
import rateMy from "../../assets/RateMYnoBack.png";
import auction from "../../assets/auction.jpg";
import inv from "../../assets/invimg.png"
function Project() {
  return (
    <div id="projects" className={styles.container}>
      <h1 className="sectionTitle">Project</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={flashcard}
          link="https://github.com/SimpleHelloProgram/Flashcard-Saas"
          h3="FlashCard SAAS"
          pp="AI generated FlashCards"
        />
        <ProjectCard
          src={rateMy}
          link="https://github.com/SimpleHelloProgram/Flashcard-Saas"
          h3="Rate my Professor AI Chat"
          pp="Uses AI to find your right teacher"
        />
        <ProjectCard
          src={auction}
          link="https://github.com/SimpleHelloProgram/Commerce"
          h3="Commerce"
          pp="An Auction site"
        />
        <ProjectCard
          src={inv}
          link="https://github.com/SimpleHelloProgram/inventoryApp"
          h3="Inventory App"
          pp="You can add and delete items from"
        />
      </div>
    </div>
  );
}

export default Project;
