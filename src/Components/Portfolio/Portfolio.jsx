import React from "react";
import ipad from "../../Assets/Images/works/ipad.jpg";
import convertion from "../../Assets/Images/works/convertion.png";
import users from "../../Assets/Images/works/users.png";
import pokemon from "../../Assets/Images/works/pokemon.png";
import notes from "../../Assets/Images/works/notes.png";
import shop from "../../Assets/Images/works/shop.png";
import folder from "../../Assets/Icons/works/folder.svg";
import git from "../../Assets/Icons/works/git.svg";
import link from "../../Assets/Icons/works/link.svg";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="portfolio__title">Портфолио</h2>
          <div className="portfolio__title">Мои работы</div>
          <div className="divider" />
          <div className="portfolio__wrapper">
            <div className="portfolio__item">
              <div className="portfolio__info animate__animated animate__zoomIn">
                <div className="portfolio__info-header">
                  <div className="portfolio__info-header-logo">
                    <img src={folder} alt="folder" />
                  </div>
                  <div className="portfolio__info-header-link">
                    <a
                      href="https://github.com/iqvver/Notes-App"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={git} alt="git" />
                    </a>
                    <a
                      href="https://iqvver.github.io/Notes-App/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={link} alt="link" />
                    </a>
                  </div>
                </div>
                <div className="portfolio__info-deckr">
                  <div className="portfolio__info-deckr-title">Notes-App</div>
                  <div className="portfolio__info-deckr-text">
                    Приложение "Заметки". Заметки сохраняются в "Локальном
                    хранилище".
                  </div>
                </div>
                <div className="portfolio__info-footer">Modx, Antd, React</div>
              </div>
              <div className="portfolio__img">
                <img src={notes} alt="notes" />
              </div>
            </div>
            <div className="portfolio__item">
              <div className="portfolio__info animate__animated animate__zoomIn">
                <div className="portfolio__info-header">
                  <div className="portfolio__info-header-logo">
                    <img src={folder} alt="folder" />
                  </div>
                  <div className="portfolio__info-header-link">
                    <a
                      href="https://github.com/iqvver/ConvertionApp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={git} alt="git" />
                    </a>
                    <a
                      href="https://iqvver.github.io/ConvertionApp/#/current"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={link} alt="link" />
                    </a>
                  </div>
                </div>
                <div className="portfolio__info-deckr">
                  <div className="portfolio__info-deckr-title">
                    Convertion-App
                  </div>
                  <div className="portfolio__info-deckr-text">
                    Приложение для "Конвертации валют", по актуальному курсу.
                  </div>
                </div>
                <div className="portfolio__info-footer">
                  React, Redux, RestAPI
                </div>
              </div>
              <div className="portfolio__img">
                <img src={convertion} alt="convertion_img" />
              </div>
            </div>
            <div className="portfolio__item">
              <div className="portfolio__info animate__animated animate__zoomIn">
                <div className="portfolio__info-header">
                  <div className="portfolio__info-header-logo">
                    <img src={folder} alt="folder" />
                  </div>
                  <div className="portfolio__info-header-link">
                    <a
                      href="https://github.com/iqvver/UsApp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={git} alt="git" />
                    </a>
                    <a
                      href="https://iqvver.github.io/UsApp/#/all"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={link} alt="link" />
                    </a>
                  </div>
                </div>
                <div className="portfolio__info-deckr">
                  <div className="portfolio__info-deckr-title">Users-App</div>
                  <div className="portfolio__info-deckr-text">
                    Приложение для просмотра списка работников предприятия.
                  </div>
                </div>
                <div className="portfolio__info-footer">
                  React, Redux, RestAPI, SCSS, Figma
                </div>
              </div>
              <div className="portfolio__img">
                <img src={users} alt="users" />
              </div>
            </div>
            <div className="portfolio__item">
              <div className="portfolio__info animate__animated animate__zoomIn">
                <div className="portfolio__info-header">
                  <div className="portfolio__info-header-logo">
                    <img src={folder} alt="folder" />
                  </div>
                  <div className="portfolio__info-header-link">
                    <a
                      href="https://github.com/iqvver/my-shop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={git} alt="git" />
                    </a>
                    <a
                      href="https://iqvver.github.io/my-shop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={link} alt="link" />
                    </a>
                  </div>
                </div>
                <div className="portfolio__info-deckr">
                  <div className="portfolio__info-deckr-title">Shop-App</div>
                  <div className="portfolio__info-deckr-text">
                    Магазин мебели, с возможность добавление товара в корзину.
                  </div>
                </div>
                <div className="portfolio__info-footer">React, Redux, JS</div>
              </div>
              <div className="portfolio__img">
                <img src={shop} alt="shop" />
              </div>
            </div>
            <div className="portfolio__item horizontal">
              <div className="portfolio__info animate__animated animate__zoomIn">
                <div className="portfolio__info-header">
                  <div className="portfolio__info-header-logo">
                    <img src={folder} alt="folder" />
                  </div>
                  <div className="portfolio__info-header-link">
                    <a
                      href="https://github.com/iqvver/Pokemon-TCG"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={git} alt="git" />
                    </a>
                    <a
                      href="https://iqvver.github.io/Pokemon-TCG/#/home"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={link} alt="link" />
                    </a>
                  </div>
                </div>
                <div className="portfolio__info-deckr">
                  <div className="portfolio__info-deckr-title">
                    PokemonTCG-App
                  </div>
                  <div className="portfolio__info-deckr-text">
                    Приложение-база Pokémon TCG содержит данные карт.С
                    возможность поиска и просмотра детальной информации о
                    конкретном покемоне.
                  </div>
                </div>
                <div className="portfolio__info-footer">
                  React, Redux, RestAPI, MUI, Router
                </div>
              </div>
              <div className="portfolio__img">
                <img src={pokemon} alt="pokemon_img" />
              </div>
            </div>
            <div className="portfolio__item vertical">
              <div className="portfolio__info animate__animated animate__zoomIn">
                <div className="portfolio__info-header">
                  <div className="portfolio__info-header-logo">
                    <img src={folder} alt="folder" />
                  </div>
                  <div className="portfolio__info-header-link">
                    <div>
                      <img src={git} alt="git" />
                    </div>
                    <div>
                      <img src={link} alt="link" />
                    </div>
                  </div>
                </div>
                <div className="portfolio__info-deckr">
                  <div className="portfolio__info-deckr-title">EMPTY</div>
                  <div className="portfolio__info-deckr-text">
                    ОЙ! <br />
                    Сдесь пока, что нечего нет, но вскоре появистся!!!
                  </div>
                </div>
                <div className="portfolio__info-footer">... ... ...</div>
              </div>
              <div className="portfolio__img">
                <img src={ipad} alt="ipad" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="poligon"></div>
    </>
  );
};

export default Portfolio;
