import React from "react";
import { Link } from "react-scroll";
import shevron from "../../../Assets/Icons/chevron.svg";

const Chevron = () => {
  return (
    <div className="chevron">
      <Link to="promo" className="page-up">
        <img src={shevron} alt="shevron" />
      </Link>
    </div>
  );
};

export default Chevron;
