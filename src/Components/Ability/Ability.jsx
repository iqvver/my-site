import React from "react";
import html5 from "../../Assets/Icons/skills/html5.svg";
import css3 from "../../Assets/Icons/skills/css3.svg";
import jquery from "../../Assets/Icons/skills/jquery.svg";
import js from "../../Assets/Icons/skills/js.svg";
import reactJs from "../../Assets/Icons/skills/react.svg";
import Progres from "./Progres";

const Ability = () => {
  return (
    <div className="ability"id="ability">
      <div className="container">
        <h2 className="ability__title">Навыки</h2>
        <div className="ability__title">Что я использую в работе</div>
        <div className="divider"></div>
        <div className="ability__wrapper">
          <div className="ability__item">
            <div className="ability__item-img">
              <img src={html5} alt="html5" />
            </div>
            <h5 className="">HTML5</h5>
            <div className="">
              Именно он создает каркас вашего сайта или приложения, а пятая
              версия позволит мне создавать более SEO-оптимизированную структуру
              вашего продукта
            </div>
          </div>
          <div className="ability__item">
            <div className="ability__item-img">
              <img src={css3} alt="css3" />
            </div>
            <h5 className="">CSS3</h5>
            <div className="">
              Этот язык стилей позволяет мне создавать абсолютно любой внешний
              вид вашего сайта или приложения. Все ограничивается только вашей
              фантазией!
            </div>
          </div>
          <div className="ability__item">
            <div className="ability__item-img">
              <img src={js} alt="js" />
            </div>
            <h5 className="">Java Script</h5>
            <div className="">
              Этот язык программирования позволяет оживить все что угодно:
              слайдеры, окна, подсказки, вкладки, получение данных от сервера и
              многое другое
            </div>
          </div>
          <div className="ability__item">
            <div className="ability__item-img">
              <img src={jquery} alt="jquery" />
            </div>
            <h5 className="">Jquery</h5>
            <div className="">
              Библиотека Jquery позволит ускорить разработку. Без необходимости
              интегрировать в проект мы её не будем, но навык работы с ней
              присутствует
            </div>
          </div>
          <div className="ability__item">
            <div className="ability__item-img">
              <img src={reactJs} alt="reactJs" />
            </div>
            <h5 className="">React</h5>
            <div className="">
              Эта библиотека позволяет создавать web-приложения. Мы можем
              создать максимально интерактивный продукт именно под ваши цели
            </div>
          </div>
        </div>
        <Progres />
      </div>
    </div>
  );
};

export default Ability;
