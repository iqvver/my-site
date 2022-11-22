import React from "react";

const SwitchTheme = ({ switchTheme, setSwitchTheme }) => {
  return (
    <div className="switch">
      <input
        checked={switchTheme}
        onChange={setSwitchTheme}
        className="switch__checkbox"
        id={`switch-input`}
        type="checkbox"
      />
      <label
        //style={{ background: switchTheme && "#06D6A0" }}
        className="switch__label"
        htmlFor={`switch-input`}
      >
        <span className="switch__left">Dark</span>
        <span className="switch__button" />
        <span className="switch__right">Light</span>
      </label>
    </div>
  );
};

export default SwitchTheme;
