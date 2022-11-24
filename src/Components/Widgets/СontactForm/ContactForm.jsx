import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ setShowThanks }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vnl40dp",
        "template_0b4hkuj",
        form.current,
        "0pU0-6T93MBCA3A0T"
      )
      .then(
        (result) => {
          e.target.reset();
          setShowThanks(true);
        },
        (error) => {
          alert("ОЙ! Сообщение не отправлено!");
        }
      );
  };
  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        id="contact__form"
      >
        <div className="contact-form__input">
          <input
            required
            name="user_name"
            id="name"
            type="text"
            placeholder="Ваше имя"
          />
        </div>
        <div className="contact-form__input">
          <input
            required
            name="user_email"
            id="email"
            type="email"
            placeholder="Ваше email"
          />
        </div>
        <div className="contact-form__textarea">
          <textarea name="message" id="text" placeholder="Ваше сообщение" />
        </div>
        <div className="contact-form__btm">
          <button className="button button_bg-contact" type="submit">
            ОТПРАВИТЬ
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
