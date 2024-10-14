import styles from "../Hero/HeroStyles.module.css";
import heroImg from "../../assets/BilalMemon.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkinLight from "../../assets/linkedin-light.svg";
import linkinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Bilal_Memon_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";
function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkinIcon = theme === "light" ? linkinLight : linkinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Bilal Memon"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Bilal <br /> Memon
        </h1>
        <h2>Software developer</h2>
        <span>
          <a href="https://github.com/SimpleHelloProgram" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/bilal-memon-1a59b6208/"
            target="_blank"
          >
            <img src={linkinIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Aspiring software developer with a passion for building
          innovative solutions and solving complex problems
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
