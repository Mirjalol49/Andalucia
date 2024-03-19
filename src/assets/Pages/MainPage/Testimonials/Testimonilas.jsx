/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import "./Testimonials.css";
import TestimonialCard from "./../../../reusables/TestimonialCard/TestimonialCard";

const Testimonials = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  const testimonialsData = [
    {
      nameTitle: "Hayitmurodova M",
      thought:
        "Assalomu aleykum, kursingiz yaxshi mavzular juda tushunarli qilib tushuntirilgan. Ustozlar savollarga har doim tushunarli qilib javob berishadi",
      bg: "#ED203D",
      textBg: "#ED203D",
    },
    {
      nameTitle: "Safarova A",
      thought:
        "Raxmat kattakon, darslarni juda ham chiroyli tushuntirasiz, Alloh rozi bo'lsin sizlardan",
      bg: "#0BA95B",
      textBg: "#0BA95B",
    },
    {
      nameTitle: "Sitora Gaybullayeva",
      thought:
        "Mani eshtib xatolarimni topib to'g'ri yo'l ko'rsatayotganiz uchun Alloh rozi bo'lsin.",
      bg: "#12B5E5",
      textBg: "#12B5E5",
    },
    {
      nameTitle: "Chutbayeva Farida",
      thought:
        "Assalomu aleykum hurmatli kurs tashkilotchilari, ustozlar. Kurs juda yaxshi tashkil etilgan, sizlarni yutug'inglar oxirigacha masuliyat bilan, har bir o'quvchi bilan ishlaydilar. Savobli ishlarda bardavom bo'linglar.",
      bg: "#FCBA28",
      textBg: "#FCBA28",
    },
  ];

  return (
    <section className="testimonials">
      <svg
        viewBox="0 0 1000 195"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="sc-c611d025-2 jIzOke"
      >
        <g clipPath="url(#clip-path-:R35j6:)">
          <path
            d="M988.5 34C943 52.5 917.269 16.6372 867 9.99992C739.481 -6.837 791.5 68.9999 534 68.9999C308.5 68.9999 290.854 15.9393 197 21.4998C103.146 27.0604 87.5 81.9999 10 61.4999"
            stroke="#8F7DE8"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1 10"
            transform="translate(0 67.02509740193685)"
            className="sc-c611d025-3 gjqpxr"
          ></path>
          <path
            d="M413.722 46.7526C306.531 36.2559 248.691 97.3741 141.222 90.2526C81.726 86.31 -8.77783 53.7526 -8.77783 53.7526V305.753H1071.22C1071.22 305.753 1169.22 69.7527 1071.22 101.753C973.222 133.752 1036.05 13.135 990.222 8.25257C944.728 3.4056 952.94 69.7644 909.222 83.2526C858.334 98.9531 827.875 57.4452 774.722 60.7526C712.97 64.5951 686.453 107.569 624.722 111.753C538.698 117.583 499.534 55.1556 413.722 46.7526Z"
            fill="#151118"
            stroke="#151118"
            strokeWidth="10"
            strokeLinecap="round"
            transform="translate(0 34.740962219238284)"
            className="sc-c611d025-3 gjqpxr"
          ></path>
          <path
            d="M990 8.25257C944.506 3.4056 952.94 69.7644 909.222 83.2526C858.334 98.9531 827.875 57.4452 774.722 60.7526C712.97 64.5951 686.452 107.569 624.722 111.753C538.698 117.583 499.534 55.1556 413.722 46.7526C306.531 36.2559 248.691 96.3741 141.222 89.2526C81.726 85.31 10 60.7526 10 60.7526"
            stroke="#77F6AA"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="6 6"
            transform="translate(0 34.740962219238284)"
            className="sc-c611d025-3 gjqpxr"
          ></path>
          <path
            d="M447.722 151.753C312.206 184.036 246.392 51.044 108 67C51.405 73.5251 30.4999 176.753 2.99994 121.753C-24.5001 66.7526 -31.7778 318.253 -31.7778 318.253H1085.72C1085.72 318.253 1117.5 112.5 1026.5 99C935.5 85.5 970.5 70.0607 917 67C835.686 62.3481 820.88 133.606 739.722 126.753C683.896 122.038 670.089 61.4461 614.222 57.2526C539.667 51.6563 520.452 134.426 447.722 151.753Z"
            fill="#151118"
            stroke="#151118"
            strokeWidth="10"
            strokeLinecap="round"
          ></path>
          <path
            d="M990 93.5C958.778 87.2474 955.5 69.2026 917 67C835.686 62.3481 820.88 133.606 739.722 126.753C683.897 122.038 670.089 61.4461 614.222 57.2526C539.667 51.6563 520.452 134.426 447.722 151.753C312.206 184.036 246.392 51.044 108 67C51.405 73.5251 43 153.253 10 134.5"
            stroke="#FFE666"
            strokeWidth="3"
            strokeLinecap="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip-path-:R35j6:">
            <rect width="1000" height="195" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
      <div className="container">
        <h2 className="testimonials-title" data-aos="fade-up">
          O'quvchilarimizning fikri
        </h2>
      </div>
      <div className="scroller" data-speed="slow" data-aos="fade-up">
        <ul className="tag-list scroller__inner">
          {testimonialsData.map((testimonial, index) => (
            <li key={index}>
              <TestimonialCard
                nameTitle={testimonial.nameTitle}
                thought={testimonial.thought}
                bg={testimonial.bg}
                TextBg={testimonial.textBg}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
