import { GiSkills } from "react-icons/gi";
import SkillsInput from "./SkillsInput";
import Title from "./Title";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput skill="Content Writing" />
        <SkillsInput skill="Copywriting" />
        <SkillsInput skill="SEO Writing" />
        <SkillsInput skill="Blog Writing" />
        <SkillsInput skill="Technical Writing" />
        <SkillsInput skill="Email Marketing" />
        <SkillsInput skill="Proofreading" />
        <SkillsInput skill="Editing" />
        <SkillsInput skill="Research" />
        <SkillsInput skill="Social Media Writing" />
      </div>
    </div>
  );
};

export default Skills;
