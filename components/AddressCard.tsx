import { ReactNode } from "react";

interface SubTitle {
  text: string;
  url?: string;
}

interface Props {
  title: string;
  subTitle: SubTitle;

  icon: ReactNode;
}

const AddressCard = ({ title, subTitle, icon }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <span className="w-12 h-12 rounded-full bg-black border-[1px] border-blue-600 flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </span>
      <div>
        <h3 className="text-md font-bold">{title}</h3>
        {subTitle.url ? (
          <a
            target="_blank"
            rel="noopener noreferrer" //
            href={subTitle.url}
            className="text-base tracking-wide text-gray-400"
          >
            {subTitle.text}
          </a>
        ) : (
          <p className="text-base tracking-wide text-gray-400">
            {subTitle.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
