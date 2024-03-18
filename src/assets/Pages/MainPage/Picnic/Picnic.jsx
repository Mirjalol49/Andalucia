import Picnic1 from "../../../Images/picnic1.jpg";
import Picnic2 from "../../../Images/picnic2.jpg";
import Picnic3 from "../../../Images/picnic3.jpg";
import Picnic4 from "../../../Images/picnic4.jpg";
import "./Picnic.css";
const Picnic = () => {
  return (
    <section className="picnic">
      <div className="container">
        <h2 className="picnic-title" data-aos="fade-down">
          Piknikga chiqamiz
        </h2>
        <p className="picnic-text">
          Oyda bir marta madaniy hordiq olish, samaradorlikni oshiradi
        </p>

        <div className="picnic-img-wrapper">
          <img
            className="picnic-img"
            data-aos="fade-right"
            src={Picnic1}
            alt="picnic images"
          />
          <img
            className="picnic-img"
            data-aos="fade-right"
            src={Picnic2}
            alt="picnic images"
          />
          <img
            className="picnic-img"
            data-aos="fade-left"
            src={Picnic3}
            alt="picnic images"
          />
          <img
            className="picnic-img"
            data-aos="fade-left"
            src={Picnic4}
            alt="picnic images"
          />
        </div>
      </div>
    </section>
  );
};

export default Picnic;
