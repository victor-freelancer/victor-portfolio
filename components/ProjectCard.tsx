"use client";

import { MdReadMore } from "react-icons/md";

interface DocumentCardProps {
  title: string;
  subtitle: string;
  content: string;
  docUrl: string;
}

const ProjectCard = ({
  title,
  subtitle,
  content,
  docUrl,
}: DocumentCardProps) => {
  return (
    <div className="border border-blue-800 rounded-lg p-6 mb-6 max-w-lg">
      <h2 className="text-lg font-bold">{title}</h2>
      <h3 className="text-md text-gray-600">{subtitle}</h3>
      <p className="mt-4 text-base text-gray-400">{content}</p>
      <a
        href={docUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-blue-800 px-3 py-1 text-sm text-gray-400 bg-transparent hover:text-white hover:border-blue-600 hover:bg-black rounded-lg duration-300 mt-4 inline-flex items-center"
      >
        <MdReadMore className="text-lg mr-1" />
        <span>Read More</span>
      </a>
    </div>
  );
};

export default ProjectCard;
