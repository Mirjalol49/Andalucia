import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import Faq from "./Faq/Faq";

import HeroSection from "./HeroSection/HeroSection";

import "./MainPage.css";
import Popup from "./PopUp/Popup";

import Results from "./Results/Results";
import Subjects from "./Subjects/Subjects";

import Testimonilas from "./Testimonials/Testimonilas";

import WhyChoose from "./WhyChoose/WhyChoose";

const MainPage = () => {
  return (
    <main>
      <HeroSection />
      <Subjects />

      <AboutMe />
      <Results />
      <Popup />
      <WhyChoose />
      <Faq />
      <Testimonilas />
      <Contact />
    </main>
  );
};

export default MainPage;
