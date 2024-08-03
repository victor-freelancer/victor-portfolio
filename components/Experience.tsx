import { FaHammer } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import ExperienceCard from "./ExperienceCard";
import Title from "./Title";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experience" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Domino’s, Germantown"
          year="June 2024 - Present"
          profession="Insider"
          icon={<FaHammer />}
        />
        <ExperienceCard
          title="Pick N Save, Germantown"
          year="June 2023 - Aug 2023"
          profession="Produce Clerk"
          icon={<FaHammer />}
        />
      </div>
    </div>
  );
};

export default Experience;
