/* eslint-disable react/no-unescaped-entities */
import "./Faq.css";
const Faq = () => {
  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq-title">Ota-onalar so'rashadi...</h2>
        <div className="collapse collapse-plus  bg-white mb-7 shadow-md">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content  bg-white">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus   bg-white mb-7 shadow-md">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium bg-white">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-white shadow-md">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium  bg-white">
            Click to open this one and close others
          </div>
          <div className="collapse-content  bg-white">
            <p>hello</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
