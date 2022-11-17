import React from "react";
import bg from "../../Assets/Images/bg.png";

const Promo = () => {
  return (
    <div className="promo">
      <div className="promo__wrapper">
        <div className="promo__title title title_fs20 animate__animated animate__slideInLeft">
          Меня зовут Павлов Валерий
        </div>
        <div className="promo__title title animate__animated animate__slideInLeft">
          Я web-разработчик из города Калининград
        </div>
        <div className="promo__btm">
          <button href="#" className="promo__link button">
            Портфолио
          </button>
          <button className="promo__link button button_bg-none">
            Про меня
          </button>
        </div>
      </div>
      <div className="promo__img">
        <img src={bg} alt="background" />
      </div>
    </div>
  );
};

export default Promo;
