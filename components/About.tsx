import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiInformatica } from "react-icons/si";
import AddressCard from "./AddressCard";
import Title from "./Title";

const About = () => {
  return (
    <div className="wrapper">
      <Title text="Bio" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          Hi, I’m Victor. I am a beginner freelance writer skilled in crafting
          engaging emails, blog posts, and copywriting. I understand what
          resonates with Gen Z and use that insight to create impactful content.
          I work mornings and evenings in the summer and am available during the
          school year on a project basis.
        </p>
        <p>
          Outside of writing, I enjoy hitting the gym, biking, and exploring
          history. For high-quality content and reliable results, let’s work
          together!
        </p>
        <div className="mt-6 flex flex-col gap-4 md:flex-row justify-between md:gap-8">
          <AddressCard
            title="LinkedIn"
            subTitle={{
              text: "Linkedin.com/in/victor-margulius",
              url: "https://www.linkedin.com/in/victor-margulius",
            }}
            icon={<FaLinkedin />}
          />

          <AddressCard
            title="Mobile Number"
            subTitle={{ text: "+1 603-339-6352" }}
            icon={<FaPhoneAlt />}
          />
          <AddressCard
            title="Email Address"
            subTitle={{ text: "vmargulius@gmail.com" }}
            icon={<FaEnvelope />}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
