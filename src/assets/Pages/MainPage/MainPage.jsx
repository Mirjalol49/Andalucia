import Header from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import "./MainPage.css";
const MainPage = () => {
  return (
    <>
      <div className="head-wrapper">
        <div className="container">
          <Header />
          <main>
            <HeroSection />
          </main>
        </div>
      </div>
    </>
  );
};

export default MainPage;
