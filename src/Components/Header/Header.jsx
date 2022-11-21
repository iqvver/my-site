import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidepanel from "../Sidepanel/Sidepanel";
import Hamburger from "../Widgets/Hamburger/Hamburger";
import Menu from "../Widgets/Hamburger/Menu";

const Header = ({ switchTheme, setSwitchTheme }) => {
  const [hamburgerActive, showActiv] = useState(false);
  return (
    <header className="header animate__animated animate__fadeInDown">
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
        <Sidepanel switchTheme={switchTheme} setSwitchTheme={setSwitchTheme} />
      </div>
    </header>
  );
};

export default Header;
