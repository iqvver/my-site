import React from "react";
import ContactForm from "../Widgets/СontactForm/ContactForm";

const Contact = () => {
  return (
    <div className="contact" id="contacts">
      <div className="container">
        <h2 className="contact__title">КОТАКТЫ</h2>
        <div className="contact__subtitle">
          У вас есть вопрос или вы хотите работать вместе?
        </div>
        <div className="divider divider_bgmain" />
        <div className="contact__form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
