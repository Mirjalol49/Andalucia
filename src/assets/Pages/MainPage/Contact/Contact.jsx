/* eslint-disable react/no-unescaped-entities */
import "./Contact.css";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const defaultCountryCode = "+998";
  const [formData, setFormData] = useState({
    name: "",
    number: defaultCountryCode + "  ",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Telegram bot details
    const telegramBotToken = "6457047782:AAEXA7r-1wzrzqrAsnyjG901z5Pr6EFOrV0";
    const chatId = "1907166652";

    try {
      // Send data to Telegram
      await axios.post(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          chat_id: chatId,
          text: `Kursga yangi talaba yozildi:\n\nO'quvchining ismi: ${formData.name}\nTelefon raqami: ${formData.number}`,
        }
      );

      // Clear form after submission
      setFormData({ name: "", number: "" });

      // Optionally, you can add a success message or redirect to a thank-you page
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-start-wrapper">
            <h2 className="contact-title">Malumot qoldiring</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="contact-label" htmlFor="name">
                O'quvchining ismi
              </label>
              <input
                className="contact-input name-input"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ismingiz"
                autoComplete="off"
                required
              />
              <label className="contact-label" htmlFor="number">
                Telefon raqami
              </label>
              <input
                className="contact-input"
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder={defaultCountryCode}
                min={12}
                autoComplete="off"
                required
              />
              <button className="contact-btn">Yuborish</button>
            </form>
          </div>
          <div className="contact-end-wrapper">
            <div
              className="yandex-map"
              style={{
                position: "relative",
                overflow: "hidden",
                border: "none",
                outline: "none",
                borderRadius: "10px",
              }}
            >
              <a
                href="https://yandex.com/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "0px",
                }}
              >
                Tashkent
              </a>
              <a
                href="https://yandex.com/maps/10335/tashkent/?ll=69.190239%2C41.268953&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=69.190277%2C41.268586&whatshere%5Bzoom%5D=16&z=16"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "14px",
                }}
              >
                Al-Xorazmiy koʻchasi, 66/7 — Yandex Maps
              </a>
              <iframe
                src="https://yandex.com/map-widget/v1/?ll=69.190239%2C41.268953&mode=whatshere&whatshere%5Bpoint%5D=69.190277%2C41.268586&whatshere%5Bzoom%5D=16&z=16"
                width="560"
                height="400"
                frameBorder="1"
                allowFullScreen={true}
                style={{ position: "relative" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
