import React from "react";
import { Link } from "react-scroll";
import arrow from "../../Assets/Icons/other/arrow.svg";
import Header from "../Header/Header";

const Promo = ({switchTheme, setSwitchTheme}) => {
  return (
    <div className="promo" id="promo">
      <Header switchTheme={switchTheme} setSwitchTheme={setSwitchTheme} />
      <div className="promo__stars" />
      <div className="promo__stars2" />
      <div className="promo__stars3" />
      <div className="promo__title">
        <span className="title title_fs60">Меня зовут Валерий Павлов</span>
        <span className="title title_fs50">
          Я web-разработчик из города Калининград
        </span>
        <div className="promo__btm">
          <Link
            to="about"
            className="navbar__link header-text header-text_12px"
            activeClass="navbar__link_active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="button button_promo">
              Про меня
              <img src={arrow} alt="arrow" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Promo;
