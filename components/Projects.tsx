import { FaProjectDiagram } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

const App = () => {
  return (
    <div className="wrapper">
      <Title text="Work Samples" icon={<FaProjectDiagram />} />
      <div className="flex-col md:flex-row flex-wrap gap-4 flex">
        <ProjectCard
          title="Copywriting Prompt 1: Product Description"
          subtitle="BlendoGo Pro: Your Ultimate On-the-Go Blender"
          content="Transform how you enjoy smoothies with the BlendoGo Pro, the portable blender designed for a modern lifestyle! Ideal for workouts"
          docUrl="https://docs.google.com/document/d/1sFlmIUzvEDBsi-9ehCvprknXGIAsvYeLrCvJBRHtcmA/edit?usp=sharing"
        />
        <ProjectCard
          title="Blog Prompt 1: Informative Blog Post"
          subtitle="How to Write Clear and Concise Software Release Notes"
          content="Effective communication is key in software development. To keep users informed about updates"
          docUrl="https://docs.google.com/document/d/1XYI6-GJ3fGHqCKzLVdzmd2HW6LQ1hzTI91LinIbOAXQ/edit?usp=sharing"
        />
        <ProjectCard
          title="Blog Prompt 2: Product Comparison"
          subtitle="Fitness Trackers vs. Smartwatches: Which is Better for Your Fitness Goals?"
          content="In wearable technology, fitness trackers and smartwatches offer distinct benefits"
          docUrl="https://docs.google.com/document/d/1Q8lykKM0YW6_Rb3iWDzQPyOwJu_GZwcaWYsblGKi7YQ/edit?usp=sharing"
        />
        <ProjectCard
          title="Email Prompt 1: Welcome Email"
          subtitle="Subject: Welcome to [Your Brand]!"
          content="Welcome to the [Your Brand] family! We’re thrilled to have you on board. At [Your Brand], we are dedicated"
          docUrl="https://docs.google.com/document/d/1xj5WEB4dbOplerBd7jXEQgjg7Tr9B74Jii4CW2OaOO4/edit?usp=sharing"
        />
        <ProjectCard
          title="Email Prompt 2: Promotional Email"
          subtitle="Subject: Exclusive Offer Just for You!"
          content="Hi [Subscriber], We’ve got something special for you! For a limited time,"
          docUrl="https://docs.google.com/document/d/1irP-e6sgDKq8cGRQMaVBUYQYqfnH5pNdN5HWl8nZOQo/edit?usp=sharing"
        />
        <ProjectCard
          title="Copywriting Prompt 2: Product Landing Page"
          subtitle="Amp Up Your Life with AeroPure Elite"
          content="Meet AeroPure Elite – the advanced air cleaner designed to transform your home into a haven of fresh, clean air."
          docUrl="https://docs.google.com/document/d/1v-pCHEbNAqLRRWD-Ts3An3AUULPjoVQcRZd_g4ZLLbQ/edit?usp=sharing"
        />
      </div>
    </div>
  );
};

export default App;
