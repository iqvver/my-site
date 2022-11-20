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
          <a href="#portfolio">
            <button className="button">Портфолио</button>
          </a>
          <a href="#about">
            <button className="button button_bg-none">Про меня</button>
          </a>
        </div>
      </div>
      <div className="promo__img">
        <img src={bg} alt="background" />
      </div>
    </div>
  );
};

export default Promo;
