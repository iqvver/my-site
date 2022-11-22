import React from "react";
import arrow from '../../Assets/Icons/arrow.svg'

const Promo = () => {
  return (
    <div className="promo" id="promo">
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
              
              <img src={arrow} alt="" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Promo;
