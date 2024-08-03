import { FaGraduationCap } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import EducationCard from "./EducationCard";
import Title from "./Title";

const EducationSection = () => {
  return (
    <div className="wrapper">
      <Title text="Education" icon={<MdMenuBook />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <EducationCard
          title="University of Wisconsin - Madison"
          degree="Undeclared Major"
          year="August 2023 - Expected May 2027"
          icon={<FaGraduationCap />}
        />
        <EducationCard
          title="Wisconsin Lutheran High School"
          year="August 2020 - May 2023"
          degree="High School"
          icon={<FaGraduationCap />}
        />
      </div>
    </div>
  );
};

export default EducationSection;
