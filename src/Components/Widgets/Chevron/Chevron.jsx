import React from "react";
import shevron from "../../../Assets/Icons/chevron.svg";
import { scrollTop } from "../../../Utils/Utils";

const Chevron = () => {
  return (
    <div className="chevron">
      <button className="page-up" onClick={scrollTop}>
        <img src={shevron} alt="shevron" />
      </button>
    </div>
  );
};

export default Chevron;
