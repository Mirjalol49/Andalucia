import HeroSection from "./HeroSection/HeroSection";
import "./MainPage.css";
import Teachers from "./Teachers/Teachers";
const MainPage = () => {
  return (
    <main>
      <HeroSection />
      <div className="main-wrapper">
        <Teachers />
      </div>
    </main>
  );
};

export default MainPage;
