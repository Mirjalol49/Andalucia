import AboutMe from "./AboutMe/AboutMe";
import HeroSection from "./HeroSection/HeroSection";
import "./MainPage.css";
import Results from "./Results/Results";
import Subjects from "./Subjects/Subjects";
import Teachers from "./Teachers/Teachers";
import WhyChoose from "./WhyChoose/WhyChoose";


const MainPage = () => {
  return (
    <main>
      <HeroSection />
      <Subjects />

      <Teachers />
      <AboutMe />
      <Results />
      <WhyChoose />
     
    </main>
  );
};

export default MainPage;
