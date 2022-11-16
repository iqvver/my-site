import React from "react";

const Hamburger = ({ showActiv }) => {
  return (
    <div className="hamburger" onClick={() => showActiv(true)}>
      <span className="hamburger__top-bun"></span>
      <span className="hamburger__long-bun"></span>
      <span className="hamburger__but-bun"></span>
    </div>
  );
};

export default Hamburger;
