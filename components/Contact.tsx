import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 items-center justify-center">
        <h2 className="text-2xl font-bold">Let’s Bring Your Words to Life!</h2>
        <p className="text-lg tracking-wide text-center">
          As a freelance writer, I am dedicated to crafting compelling content
          that resonates with your audience. Whether you need engaging blog
          posts, impactful copywriting, or persuasive emails, I am here to help
          bring your vision to life. Feel free to reach out if you’re interested
          in discussing your writing needs or if you have any questions about my
          services.
        </p>
        <a href="mailto:vmargulius@comcast.net">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            Say Hello
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap gap-8 justify-center">
        <SocialLink
          title="LinkedIn"
          link="https://www.linkedin.com/in/victor-margulius/"
        />
      </div>
    </div>
  );
};

export default Contact;
