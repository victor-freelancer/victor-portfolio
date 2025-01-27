import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Banner />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
