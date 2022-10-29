import React from "react";
import google from '../../../Assets/Icons/google.svg'
import telegram from '../../../Assets/Icons/telegram.svg'
import vk from '../../../Assets/Icons/vk.svg'
import github from '../../../Assets/Icons/github.svg'

const Social = () => {
  return (
    <div className="social">
      <img src={google} alt="google" />
      <img src={telegram} alt="telegram" />
      <img src={vk} alt="vk" />
      <img src={github} alt="github" />
    </div>
  );
};

export default Social;
