import React from "react";
import Social from "../Widgets/Social/Social";

const Footer = () => {
  
  return (
    <div className="footer">
      <div className="footer-animate footer__text title_fs12">
        Pavlov[Valerii] {" "}
        <span> &#169;2022</span>
      </div>
      <div className="footer__social">
        <Social />
      </div>
    </div>
  );
};

export default Footer;
