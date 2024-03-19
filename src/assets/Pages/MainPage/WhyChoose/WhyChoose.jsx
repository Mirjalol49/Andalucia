/* eslint-disable react/no-unescaped-entities */

import GoldTrophy from "../../../Images/gold-new.png";
import Tv from "../../../Images/tv-cart.avif";
import Tresuare from "../../../Images/treasure-chest.avif";
import "./WhyChoose.css";
const WhyChoose = () => {
  return (
    <section className="why-choose">
      <svg
        viewBox="0 0 1000 212"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="sc-26b3c953-3 kmCtSI"
      >
        <g clipPath="url(#clip-path-:R9j6:)">
          <path
            d="M200.5 112C326.937 114.843 389.617 -16.8739 514 6C514.295 6.0543 514.591 6.11028 514.888 6.16792C562.815 15.4711 589.442 95.0443 541.706 105.282C541.304 105.368 540.902 105.441 540.5 105.5C525.5 107.697 504.5 95.5567 504.5 82C504.5 68.4432 512.5 55 534 55C566.5 55 650.608 154.3 722 155C768.789 155.459 815.129 117.013 849.406 79.0644C884.163 40.5844 941.275 22.5767 981.864 54.8458C997.382 67.1833 1011.86 81.0596 1021.5 95.5C1053.37 143.247 1048.21 220.924 1038.28 277.629C1030.79 320.428 992.032 348.5 948.583 348.5H56.3161C16.1229 348.5 -20.3677 324.506 -31.9556 286.019C-54.1672 212.249 -76.6372 95.1265 -9.99997 60C64.9066 20.5144 115.845 110.096 200.5 112Z"
            stroke="#FFE666"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1 8"
            transform="translate(0 8.890602608404215)"
            className="sc-26b3c953-4 itwkTH"
          ></path>
          <path
            d="M-19 47.9999C53.2993 -13.2782 115.313 73.3138 209 58.9999C286.507 47.1581 326.403 19.7688 404 31C480 42 506 158 561 167C686.669 187.564 682.927 50.7591 810 58.9999C868.058 62.765 941.024 92.1636 989.012 114.469C1020.96 129.317 1040 161.855 1040 197.081C1040 250.608 996.608 294 943.082 294H48.7947C7.85857 294 -29.3082 269.088 -39.1231 229.346C-53.7429 170.148 -63.9884 86.1303 -19 47.9999Z"
            stroke="#8F7DE8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="5 16"
            transform="translate(0 12.226506521010538)"
            className="sc-26b3c953-4 itwkTH"
          ></path>
          <path
            d="M665.66 152.5C494.84 164.925 418.634 39 247.197 39C138.491 39 61.9282 164 -74.8319 108.5C-211.592 53 5.82148 280 5.82148 280H1210.36C1210.36 280 1263.55 102 1210.36 108.5C1157.18 115 1049.38 60.607 943.856 67C828.705 73.9763 780.685 144.134 665.66 152.5Z"
            fill="#151118"
            stroke="#F286A6"
            strokeWidth="3"
            strokeLinecap="round"
          ></path>
          <path
            d="M665.66 162.5C494.84 174.925 409.673 47 250.704 47C150.18 47 61.9282 174 -74.8319 118.5C-211.592 63 5.82148 290 5.82148 290H1210.36C1210.36 290 1263.55 112 1210.36 118.5C1157.18 125 1049.38 68.607 943.856 75C838.333 81.393 780.685 154.134 665.66 162.5Z"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2 4"
          ></path>
        </g>
        <defs>
          <clipPath id="clip-path-:R9j6:">
            <rect width="1000" height="212" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
      <div className="container">
        <h2 className="why-choose-title" data-aos="fade-down">
          Nima uchun aynan bizni tanlashingiz kerak?
        </h2>

        <div className="why-choose-exp" data-aos="fade-left">
          <img
            className="whychoose-goldTrophy"
            src={GoldTrophy}
            alt="gold trophy"
          />
          <div className="why-choose-info">
            <h3 className="why-choose-info-title">Biz Tajribalimiz</h3>
            <p className="why-choose-info-text">
              Bizda o'qituvchilar tajribali, pedagog, <span>bakalavr</span> dan
              tortib <span>doktorant</span> darajaga cha.
            </p>
            <p className="why-choose-info-text mt-3">
              Bizda Arab tilidan Xalqaro{" "}
              <span className="whychoose-start  text-[#FFD015]">Attanal</span>{" "}
              va{" "}
              <span className="whychoose-start  text-[#FFD015]">
                CEFR dan C1
              </span>{" "}
              darajadagi o'qtuvchilarimiz dars berishadi va Amerika va Dubai da
              o'qib malaka oshirgan o'qtuvchilarmiz ham bor.
            </p>
          </div>
        </div>

        <div className="why-choose-exp" data-aos="fade-right">
          <div className="why-choose-info">
            <h3 className="why-choose-info-title">Online Darslar</h3>
            <p className="why-choose-info-text">
              Uzoq masofada istiqomat qiluvchilar uchun Online darslarimiz ham
              mavjud.Bizda hatto{" "}
              <span className="whychoose-mid">
                Rossiya, Tojikiston, Qozoqiston
              </span>{" "}
              va hokazo davlatlardan online darslarimizda tahsil olishadi.
            </p>

            <p className="why-choose-info-text mt-3 space-x-10">
              Yuzlab o'quvchilar ayni vaqtda online ta'lim olishmoqda. Agar
              sizda ham online darsda qatnashishni istasangiz quyidagi havolaga
              ustiga bosing. 👉{" "}
              <a
                className="why-choose-info-text text-[#FFD015]"
                href="https://t.me/Abu_xadija"
                target="blank"
                rel="noopener noreferrer"
              >
                Begzod Bakirov bilan bog'lanish
              </a>
            </p>
          </div>

          <img className="whychoose-goldTrophy" src={Tv} alt="gold trophy" />
        </div>
        <div className="why-choose-exp" data-aos="fade-left">
          <img
            className="whychoose-goldTrophy"
            src={Tresuare}
            alt="gold trophy"
          />
          <div className="why-choose-info">
            <h3 className="why-choose-info-title">Bepul Darslar</h3>
            <p className="why-choose-info-text">
              Haftada kamida 3 marta kanalimizda Jonli bepul dars shaxsan{" "}
              <span className="whychoose-end  text-[#FFD015]">
                Begzod Bakirov(doktorant){" "}
              </span>{" "}
              tomonidan o'tqaziladi. Arab tilidan bepul darslarimiz Youtube va
              Telegramda qo'yib boriladi.
            </p>
            <p className="why-choose-info-text text-[#FFD015]">
              {" "}
              <a href="https://t.me/begzodbakirov">
                {" "}
                Begzod Bakirov shaxsiy telegram bloglari.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
