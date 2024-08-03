import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          alt="Profile Image"
        />
      </div>
      <div className="w-3/4 flex flex-col items-center md:items-start gap-4">
        <h1 className="text-5xl font-bold text-white">Victor Margulius</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Freelance Writer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          Driven college student eager to kickstart a career through entry-level
          positions, collaborate with professional co-workers, and build
          character through hands-on experience.
        </p>
      </div>
    </div>
  );
};

export default Banner;
