import React from "react";
import shevron from "../../../Assets/Icons/chevron.svg";

const Chevron = () => {
  return (
    <div className="chevron">
      <a href="#promo" className="page-up">
        <img src={shevron} alt="shevron" />
      </a>
    </div>
  );
};

export default Chevron;
