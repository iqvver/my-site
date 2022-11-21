import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#promo" className="navbar__link header-text header-text_12px">
        главная
      </a>
      <a href="#about" className="navbar__link header-text header-text_12px">
        про меня
      </a>
      <a href="#ability" className="navbar__link header-text header-text_12px">
        мои навыки
      </a>
      <a href="#portfolio" className="navbar__link header-text header-text_12px">
        мои работы
      </a>
      <a href="#contacts" className="navbar__link header-text header-text_12px">
        контакты
      </a>
    </div>
  );
};

export default Navbar;
