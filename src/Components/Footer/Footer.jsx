import React from "react";
import Social from "../Widgets/Social/Social";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__text title_fs12">
        Pavlov[Valerii] {""}
        <span> &#169;2022</span>
      </div>
      <Social />
    </div>
  );
};

export default Footer;
