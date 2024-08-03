import { ReactNode } from "react";

interface Props {
  title: string;
  year: string;
  degree: string;
  icon: ReactNode;
}

const EducationCard = ({ title, year, degree, icon }: Props) => {
  return (
    <div className="flex items-center gap-4 max-w-md">
      <span className="w-12 h-12 rounded-full bg-black border-[1px] border-blue-600 flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </span>
      <div>
        <h3 className="text-md font-bold">{title}</h3>
        <p className="text-base tracking-wide text-gray-400">{degree}</p>
        <p className="text-base tracking-wide text-gray-400">{year}</p>
      </div>
    </div>
  );
};

export default EducationCard;
