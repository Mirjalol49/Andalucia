/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import "./Testimonilas.css";
import TestimonialCard from "./../../../reusables/TestimonialCard/TestimonialCard";

const Testimonilas = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="testimonials-title">O'quvchilarimizning fikri</h2>
      </div>
      <div className="scroller" data-speed="slow">
        <ul className="tag-list scroller__inner">
          <li>
            <TestimonialCard
              nameTitle={"Umida Smadova"}
              thought={
                "lkdfjdlksjf sdfjdslfsd lkfjdslf ksjdfklds  sdfljdslfkjsd ldkfjsdlkf sdkjflds"
              }
            />
          </li>
          <li>
            <TestimonialCard
              nameTitle={"Umida Smadova"}
              thought={
                "lkdfjdlksjf sdfjdslfsd lkfjdslf lksjdf dslfkjsdlf dslfkjsd sdlkfj ldskj fsldfksjdfklds  sdfljdslfkjsd ldkfjsdlkf sdkjflds"
              }
            />
          </li>
          <li>
            <TestimonialCard
              nameTitle={"Umida Smadova"}
              thought={
                "lkdfjdlksjf sdfjdslfsd lkfjdsllskjfld flfjlsdkf sdlfksjflkd fjsldfslkf f ksjdfklds  sdfljdslfkjsd ldkfjsdlkf sdkjflds"
              }
            />
          </li>
          <li>
            <TestimonialCard
              nameTitle={"Umida Smadova"}
              thought={
                "lkdfjdlksjf sdfjdslfsd  ldkjfdl fsldfjsl slkfj sdflkdsjf sfl slsjflskdf sflskd fslf lkfjdslf ksjdfklds  sdfljdslfkjsd ldkfjsdlkf sdkjflds"
              }
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonilas;
