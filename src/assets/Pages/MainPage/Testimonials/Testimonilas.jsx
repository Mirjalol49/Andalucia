import TestimonialCard from "../../../reusables/TestimonialCard/TestimonialCard";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>O'quvchilarimizning fikri</h2>
        <div className="testimonials-wrapper">
            <TestimonialCard nameTitle={"Shaxlo Azimova"} thought={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
        </div>              
      </div>
    </section>
  );
};

export default Testimonials;
