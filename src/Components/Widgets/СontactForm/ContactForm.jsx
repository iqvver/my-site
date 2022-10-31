import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="contact-form__input">
        <input required name="name" id="name" type="text" placeholder="Ваше имя" />
      </div>
      <div className="contact-form__input">
        <input required name="email" id="email" type="email" placeholder="Ваше email" />
      </div>
      <div className="contact-form__textarea">
        <textarea name="text" id="text" placeholder="Ваше сообщение" />
      </div>
      <div className="contact-form__btm">
        <button className="button button_bg-contact">ОТПРАВИТЬ</button>
      </div>
    </div>
  );
};

export default ContactForm;
