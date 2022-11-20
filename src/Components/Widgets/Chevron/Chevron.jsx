import React from "react";
import shevron from "../../../Assets/Icons/chevron.svg";

const Chevron = () => {
  return (
    <div className="chevron">
      <button className="page-up" onClick={() => window.scrollTo(0, 0)}>
        <img src={shevron} alt="shevron" />
      </button>
    </div>
  );
};

export default Chevron;
