import AboutMe from "./AboutMe";
import Contact from "./Contact";
import HeaderSection from "./HeaderSection";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="max-w-6xl space-y-20 mx-auto">
      <HeaderSection></HeaderSection>
      <Skills></Skills>
      <Projects></Projects>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 space-y-4 lg:space-y-0">
        <AboutMe></AboutMe>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
