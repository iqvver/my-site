import React from "react";
import logo from "../../logo.svg";
import Navbar from "../Navbar/Navbar";
import Sidepanel from "../Sidepanel/Sidepanel";

const Header = () => {
  return (
    <header className="header">
      <div className="header__nav">
        <Navbar />
      </div>
      <div className="header__sidepanel">
        <Sidepanel />
      </div>
    </header>
  );
};

export default Header;
