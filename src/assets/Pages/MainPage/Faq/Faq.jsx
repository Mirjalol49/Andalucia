/* eslint-disable react/no-unescaped-entities */
import "./Faq.css";
const Faq = () => {
  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq-title">Ota-onalar so'rashadi...</h2>
        <div className="collapse collapse-plus   bg-[#F9F4DA] mb-7">
          <input type="radio" name="my-accordion-3" />
          <p className="faq-in-title collapse-title">
            Necha yoshdan kursga qabu qilinadi?
          </p>

          <div className="collapse-content  bg-[#F9F4DA]">
            <p className="faq-content">
              Bizda 3 yoshdan 70 yoshgacha o'quvchilar o'qishadi, 3 yoshdan
              katta bo'lsangiz bemalol qabul qilinasiz.😊
            </p>
          </div>
        </div>

        {/*  */}
        <div className="collapse collapse-plus  bg-[#F9F4DA] mb-7">
          <input type="radio" name="my-accordion-3" />
          <p className="faq-in-title collapse-title">Fliallar bormi?</p>
          <div className="collapse-content  bg-[#F9F4DA]">
            <p className="faq-content">
              Albatta fliallarimiz Parkent va Sergeli tumanlarida bor
            </p>
          </div>
        </div>

        {/*  */}
        <div className="collapse collapse-plus  bg-[#F9F4DA] mb-7">
          <input type="radio" name="my-accordion-3" />
          <p className="faq-in-title collapse-title">
            Online darslar ham bormi?
          </p>
          <div className="collapse-content  bg-[#F9F4DA]">
            <p className="faq-content">
              Ha albatta online darslarimiz ham bor.
            </p>
          </div>
        </div>

        {/*  */}
        <div className="collapse collapse-plus  bg-[#F9F4DA] mb-7">
          <input type="radio" name="my-accordion-3" />
          <p className="faq-in-title collapse-title">Bepul darslar bormi?</p>
          <div className="collapse-content  bg-[#F9F4DA]">
            <p className="faq-content">
              Telegram va Youtube kanallarimizga bepul darslarni qo'yib boramiz.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus  bg-[#F9F4DA] mb-7">
          <input type="radio" name="my-accordion-3" />
          <p className="faq-in-title collapse-title">
            Ijtimoiy qiynalganlarga yordam bormi?
          </p>
          <div className="collapse-content  bg-[#F9F4DA]">
            <p className="faq-content">
              Albatta mutlaqo bepul o'qiydigan o'quvchilarimiz ham bor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
