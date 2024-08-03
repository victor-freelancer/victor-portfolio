import { FaProjectDiagram } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

const App = () => {
  return (
    <div className="wrapper">
      <Title text="Work Samples" icon={<FaProjectDiagram />} />
      <div className="flex-col md:flex-row flex-wrap gap-4 flex">
        <ProjectCard
          title="Copywriting Sample 1: Product Description"
          subtitle="BlendoGo Pro: Your Ultimate On-the-Go Blender"
          content="Transform the way you enjoy smoothies with the BlendoGo Pro, the portable blender designed for the modern lifestyle! Whether you’re rushing out the door for a workout or need a quick, nutritious meal at the office, the BlendoGo Pro is your perfect companion for effortless blending anytime, anywhere."
          docUrl="https://docs.google.com/document/d/e/2PACX-1vSHqAYOYrTAKBAjXU1g-RcdMYfGxwBvpX5DnPARKkp7s4cmygpIlS3meP1qYhSlZuoRbqOosfnbcQju/pub"
        />
        <ProjectCard
          title="Copywriting Sample 2: Product Landing Page"
          subtitle="Amp up Your Life with AeroPure Elite."
          content="Meet AeroPure Elite – the fancy air cleaner set to turn your home into a fortress of fresh, clean air. Whether you're fighting allergies, dealing with unwanted stuff in the air, or just want to make your indoor air better, AeroPure Elite brings unbeaten power and smoothness."
          docUrl="https://docs.google.com/document/d/e/2PACX-1vSaJjLXci2uhLZZEiLdONYJPfIKuBEKZ12mXp6_aGXVh9-69PJuTIMGCF4U0RRkkCuY0MlkN2lLjlhb/pub"
        />
        <ProjectCard
          title="Blog Sample 1: Informative Blog Post"
          subtitle="How to Write Clear and Concise Software Release Notes"
          content="In the fast-paced world of software development, effective communication is key to ensuring users are well-informed about updates and changes. However, like any endeavor, communication tends to get, well…buggy! To effectively report when new changes are made to the software,"
          docUrl="https://docs.google.com/document/d/e/2PACX-1vRv7HA2-C1xtvouDSAjyx31LL9ozTqcXck62CCK0uSsuUgcOxECWnva-3B6gPbcoxAh3vhZoOOm_9CS/pub"
        />
        <ProjectCard
          title="Blog Sample 2: Product Comparison"
          subtitle="Subject: Welcome to [Your Brand]!"
          content="In the world of wearable technology, fitness trackers and smartwatches are two popular choices for those looking to monitor their health and stay connected. Both devices offer unique features and benefits, but which one is better suited for your fitness goals? "
          docUrl="https://docs.google.com/document/d/e/2PACX-1vRH7fUqaE1QxV43vY-xZyPOdc8DXS1rV_5bcB4P-UGhy5xAePm3K82Z_-C96ODCxuVOXeWAooBZnOKr/pub"
        />
        <ProjectCard
          title="Email Sample 1: Welcome Email"
          subtitle="Hey [Subscriber]"
          content="Welcome to the [Your Brand] family! We’re thrilled to have you on board. At [Your Brand], we are dedicated to [Your Brand’s mission and service] and bringing you superior service and peace of mind! As a valued subscriber, you’ll be the first to hear about our latest updates, select offers, and exclusive content."
          docUrl="https://docs.google.com/document/d/e/2PACX-1vQxxSG3rw55_AH9ua6CGqAmU9cjc-ovluELJi2o_1hmAx3mvo_ES1Rs1b4rwssvvuzT-soM-_5TCTmd/pub"
        />
        <ProjectCard
          title="Email Sample 2: Promotional Email"
          subtitle="Hey [Subscriber]"
          content="We’ve got something special just for you! For a limited time, enjoy an exclusive [%] discount off our [Your product/service]. Whether you’re looking to [Your benefit or feature of your product], now is the perfect time to make your move!"
          docUrl="https://docs.google.com/document/d/e/2PACX-1vRIo4B_K-NYwMQ_vX0174txTA-y8dDB1llqScW4Ihd0aTtI_ATLhvcPHBWfQlQiYt0ofodfbg4fO4mI/pub"
        />
      </div>
    </div>
  );
};

export default App;
