import React from "react";
import html5 from "../../Assets/Icons/skills/html5.svg";
import css3 from "../../Assets/Icons/skills/css3.svg";
import jquery from "../../Assets/Icons/skills/jquery.svg";
import js from "../../Assets/Icons/skills/js.svg";
import reactJs from "../../Assets/Icons/skills/react.svg";
import redux from "../../Assets/Icons/skills/redux.svg";
import Progres from "./Progres";

const Ability = () => {
  return (
    <div className="ability" id="ability">
      <div className="container">
        <h2 className="ability__title">Навыки</h2>
        <div className="ability__title">Что я использую в работе</div>
        <div className="divider" />
        <div className="ability__wrapper">
          <div className="ability__item">
            <div className="ability__item-img">
              <img src={html5} alt="html5" />
            </div>
            <h5 className="ability__item-title">HTML5</h5>
            <div className="ability__item-text">
              Именно он создает каркас вашего сайта или приложения, а пятая
              версия позволит мне создавать более SEO-оптимизированную структуру
              вашего продукта.
            </div>
          </div>
          <div className="ability__item">
            <div className="ability__item-img">
              <img src={css3} alt="css3" />
            </div>
            <h5 className="ability__item-title">CSS3</h5>
            <div className="ability__item-text">
              Этот язык стилей позволяет мне создавать абсолютно любой внешний
              вид вашего сайта или приложения. Все ограничивается только вашей
              фантазией!
            </div>
          </div>
          <div className="ability__item">
            <div className="ability__item-img">
              <img src={js} alt="js" />
            </div>
            <h5 className="ability__item-title">Java Script</h5>
            <div className="ability__item-text">
              Этот язык программирования позволяет оживить все что угодно:
              слайдеры, окна, подсказки, вкладки, получение данных от сервера и
              многое другое.
            </div>
          </div>
          <div className="ability__item">
            <div className="ability__item-img">
              <img src={jquery} alt="jquery" />
            </div>
            <h5 className="ability__item-title">Jquery</h5>
            <div className="ability__item-text">
              Библиотека Jquery позволит ускорить разработку. Без необходимости
              интегрировать в проект мы её не будем, но навык работы с ней
              присутствует.
            </div>
          </div>
          <div className="ability__item">
            <div className="ability__item-img">
              <img src={reactJs} alt="reactJs" />
            </div>
            <h5 className="ability__item-title">React</h5>
            <div className="ability__item-text">
              Эта библиотека позволяет создавать web-приложения. Мы можем
              создать максимально интерактивный продукт именно под ваши цели.
            </div>
          </div>
          <div className="ability__item">
            <div className="ability__item-img">
              <img src={redux} alt="redux" />
            </div>
            <h5 className="ability__item-title">Redux</h5>
            <div className="ability__item-text">
              Это библиотека для JavaScript с открытым исходным кодом,
              предназначенная для управления состоянием приложения.
            </div>
          </div>
        </div>
        <Progres />
      </div>
    </div>
  );
};

export default Ability;
