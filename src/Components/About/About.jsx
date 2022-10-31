import React from "react";
import mainPhoto from "../../Assets/Images/main-photo.jpg";
import webDev from "../../Assets/Icons/about-me/web_development.svg";
import mobDev from "../../Assets/Icons/about-me/mobile_dev.svg";
import design from "../../Assets/Icons/about-me/design.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about__photo">
          <img src={mainPhoto} alt="" />
        </div>
        <div className="descr">
          <h2 className="about__title">Про меня</h2>
          <div className="about__title"> Меня зовут Валерий</div>
          <div className="divider divider_m10"></div>
          <div className="about__text">
            Я являюсь фронт-энд-разработчиком в Калининграде. Я увлекаюсь
            эффектами пользовательского интерфейса, анимацией и созданием
            интуитивно понятного, динамичного пользовательского интерфейса.
            Давайте сделаем что-нибудь особенное.
          </div>
          <div className="about__skils">
            <div className="about__skil">
              <div className="about__skil-circle">
                <img src={webDev} alt="web-dev" />
              </div>
              <div>
                <div className="about__text title title_fs14">
                  Web-разработка
                </div>
                <div className="about__skil-text text text_fs12">
                  Основными этапами процесса являются веб-дизайн, вёрстка
                  страниц, программирование на стороне клиента и сервера, а
                  также конфигурирование веб-сервера.
                </div>
              </div>
            </div>
            <div className="about__skil">
              <div className="about__skil-circle">
                <img src={mobDev} alt="mob-dev" />
              </div>
              <div>
                <div className="about__text title title_fs14">
                  Разработка приложений
                </div>
                <div className="about__skil-text text text_fs12">
                  Процесс, при котором приложения разрабатываются для
                  небольших портативных устройств, таких, как КПК, смартфоны или
                  сотовые телефоны.
                </div>
              </div>
            </div>
            <div className="about__skil">
              <div className="about__skil-circle">
                <img src={design} alt="design" />
              </div>
              <div>
                <div className="about__text title title_fs14">UI/UX Design</div>
                <div className="about__skil-text text text_fs12">
                  Проектирование любых пользовательских интерфейсов в которых
                  удобство использования так же важно как и внешний вид.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
