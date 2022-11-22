import React from "react";
import google from "../../../Assets/Icons/social/google.svg";
import telegram from "../../../Assets/Icons/social/telegram.svg";
import vk from "../../../Assets/Icons/social/vk.svg";
import github from "../../../Assets/Icons/social/github.svg";

const Social = () => {
  return (
    <div className="social">
      <a href="mailto:iqvver@gmail.com">
        <img src={google} alt="google" />
      </a>
      <a href="https://t.me/iqvver" target="_blank" rel="noreferrer">
        <img src={telegram} alt="telegram" />
      </a>
      <a href="https://vk.com/iqvver" target="_blank" rel="noreferrer">
        <img src={vk} alt="vk" />
      </a>
      <a href="https://github.com/iqvver" target="_blank" rel="noreferrer">
        <img src={github} alt="github" />
      </a>
    </div>
  );
};

export default Social;
