import React, { useState } from "react";
import logo from "../../logo.svg";
import cansel from "../../Assets/Icons/cansel.svg";
import Navbar from "../Navbar/Navbar";
import Sidepanel from "../Sidepanel/Sidepanel";
import Hamburger from "../Widgets/Hamburger/Hamburger";
import Menu from "../Widgets/Hamburger/Menu";

const Header = () => {
  const [hamburgerActive, showActiv] = useState(false);
  console.log(hamburgerActive);
  return (
    <header className="header">
      <nav className="header__nav">
        <Menu showActiv={showActiv} hamburgerActive={hamburgerActive} />
        <div className="header__nav-hamburger">
          <Hamburger showActiv={showActiv} />
        </div>
        <div className="header__nav-bar">
          <Navbar />
        </div>
      </nav>
      <div className="header__sidepanel">
        <Sidepanel />
      </div>
    </header>
  );
};

export default Header;
