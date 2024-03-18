import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import Faq from "./Faq/Faq";
import Popup from "reactjs-popup";
import HeroSection from "./HeroSection/HeroSection";

import Picnic from "./Picnic/Picnic";

import Results from "./Results/Results";
import Subjects from "./Subjects/Subjects";
import Teachers from "./Teachers/Teachers";

import Testimonilas from "./Testimonials/Testimonilas";

import WhyChoose from "./WhyChoose/WhyChoose";

const MainPage = () => {
  return (
    <main>
      <HeroSection />
      <Subjects />
      <Teachers />
      <AboutMe />

      <Picnic />
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
