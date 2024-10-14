import styles from "./SkillsStyle.module.css";
import checkD from "../../assets/checkmark-dark.svg";
import checkL from "../../assets/checkmark-light.svg"
import SkillList from "../../common/SkillList";
import { useTheme } from '../../common/ThemeContext';
function Skills() {
  const { theme } = useTheme();
  const check = theme === 'light' ? checkL : checkD;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList skill="Python" src={check} />
        <SkillList skill="C/C++" src={check} />
        <SkillList skill="Java" src={check} />
        <SkillList skill="HTML" src={check} />
        <SkillList skill="CSS" src={check} />
        <SkillList skill="Javascript" src={check} />
        <SkillList skill="SQL" src={check} />
        <SkillList skill="Typescript" src={check} />
        <SkillList skill="Haskell" src={check} />
        <SkillList skill="R" src={check} />
        
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="React" src={check} />
        <SkillList skill="Next.js" src={check} />
        <SkillList skill="Django" src={check} />
        <SkillList skill="Node.js" src={check} />
        <SkillList skill="Bootstrap" src={check} />
        <SkillList skill="Material UI" src={check} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="Stripe" src={check} />
        <SkillList skill="OpenAi API" src={check} />
        <SkillList skill="Clerk" src={check} />
        <SkillList skill="Pinecone" src={check} />
    </div>
    </section>
  );
}

export default Skills;
