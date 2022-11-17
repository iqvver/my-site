import React from "react";
import Navbar from "../../Navbar/Navbar";
import Social from "../Social/Social";
import cansel from "../../../Assets/Icons/cansel.svg";
import logo from "../../../logo.svg";

const Menu = ({ hamburgerActive, showActiv }) => {
  return (
    <>
      <div className={hamburgerActive ? "menu menu_active" : "menu"}>
        <div className="menu__block">
          <div className="menu__close" onClick={() => showActiv(false)}>
            <img src={cansel} alt="cansel" />
          </div>
          <div className="menu__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="menu__list">
            <Navbar />
            <div className="menu__social">
              <Social />
            </div>
          </div>
        </div>
        <div className="menu__overlay" onClick={() => showActiv(false)} />
      </div>
    </>
  );
};

export default Menu;
