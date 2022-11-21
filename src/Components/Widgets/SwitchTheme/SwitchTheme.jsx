import React from "react";

const SwitchTheme = ({ switchTheme, setSwitchTheme }) => {
  return (
    <div
      className="language header-text header-text_12px"
      onClick={() => setSwitchTheme(!switchTheme)}
    >
      {" "}
      {switchTheme ? "одно" : "другое"}
    </div>
  );
};

export default SwitchTheme;
