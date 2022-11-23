import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link
        to="promo"
        className="navbar__link header-text header-text_12px"
        activeClass="navbar__link_active"
        spy={true}
      >
        главная
      </Link>
      <Link
        to="about"
        className="navbar__link header-text header-text_12px"
        activeClass="navbar__link_active"
        spy={true}
      >
        про меня
      </Link>
      <Link
        to="ability"
        className="navbar__link header-text header-text_12px"
        activeClass="navbar__link_active"
        spy={true}
      >
        мои навыки
      </Link>
      <Link
        to="portfolio"
        className="navbar__link header-text header-text_12px"
        activeClass="navbar__link_active"
        spy={true}
      >
        мои работы
      </Link>
      <Link
        to="contacts"
        className="navbar__link header-text header-text_12px"
        activeClass="navbar__link_active"
        spy={true}
      >
        контакты
      </Link>
    </div>
  );
};

export default Navbar;
