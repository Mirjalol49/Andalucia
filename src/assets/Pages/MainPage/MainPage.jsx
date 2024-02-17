import HeroSection from "./HeroSection/HeroSection";
import "./MainPage.css";
import Subjects from "./Subjects/Subjects";
import Teachers from "./Teachers/Teachers";
const MainPage = () => {
  return (
    <main>
      <HeroSection />
      <Subjects />
      <Teachers />
    </main>
  );
};

export default MainPage;
