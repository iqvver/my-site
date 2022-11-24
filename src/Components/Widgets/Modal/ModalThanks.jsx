import React from "react";
import cansel from "../../../Assets/Icons/cansel.svg";

const ModalThanks = ({ showThanks, setShowThanks }) => {
  return showThanks ? (
    <div className="modal-overlay" onClick={() => setShowThanks(false)}>
      <div className="modal">
        <div className="modal__close" onClick={() => setShowThanks(false)}>
          <img src={cansel} alt="cansel" />
        </div>
        <div className="modal__text">
          <div className="title_fs16">Сообщение отправлено!</div>
          <div className="title_fs12">
            Я обязательно свяжусь с Вами в ближайшее время!
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalThanks;
