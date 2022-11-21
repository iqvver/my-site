import React from "react";
import bg from "../../Assets/Images/bg.png";

const Promo = () => {
  return (
    <div className="promo">
      <div className="promo__stars" />
      <div className="promo__stars2" />
      <div className="promo__stars3" />
      <div className="promo__title">
        <span className="title title_fs60">Меня зовут Павлов Валерий</span>
        <span className="title title_fs50">Я web-разработчик из города Калининград</span>
        <div className="promo__btm">
          <a href="#about">
            <button className="button button_promo">
              Про меня
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill="#e31b6d" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Promo;
