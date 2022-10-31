import React from "react";
import ipad from "../../Assets/Images/works/ipad.jpg";
import plans from "../../Assets/Images/works/plans.jpg";
import pulse from "../../Assets/Images/works/pulse.jpg";
import mac from "../../Assets/Images/works/mac.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__title">Мои работы</div>
      <div className="about-divider"></div>
      <div className="portfolio__wrapper">
        <a className="portfolio__item">
          <img src={plans} alt="plans" />
        </a>
        <a className="portfolio__item">
          <img src={pulse} alt="pulse" />
        </a>
        <a className="portfolio__item">
        <img src={ipad} alt="ipad" />
        </a>
        <a className="portfolio__item horizontal">
          <img src={mac} alt="mac" />
        </a>
        <a className="portfolio__item vertical">
          <img src={plans} alt="plans" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
