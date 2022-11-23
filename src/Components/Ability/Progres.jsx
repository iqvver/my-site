import React, { useState } from "react";

const Progres = () => {
  const [[web, app, data, crea, des, sskil], addProces] = useState([
    0, 0, 0, 0, 0, 0,
  ]);

  window.onscroll = () => {
    if (window.pageYOffset > 1600) {
      addProces([100, 85, 90, 75, 90, 95]);
    }
  };
  return (
    <div className="progres" id="ability">
      <div className="container">
        <div className="progres__wrapper">
          <div className="progres__item">
            <div className="progres__item-head">
              <div className="progres__item-head-title">Создание сайтов</div>
              <div className="progres__item-head-procent">{web}%</div>
            </div>
            <div className="progres__item-line">
              <progress value={web} max="100" />
            </div>
          </div>
          <div className="progres__item">
            <div className="progres__item-head">
              <div className="progres__item-head-title">
                Создание приложений
              </div>
              <div className="progres__item-head-procent">{app}%</div>
            </div>
            <div className="progres__item-line">
              <progress value={app} max="100" />
            </div>
          </div>
          <div className="progres__item">
            <div className="progres__item-head">
              <div className="progres__item-head-title">Работа с данными</div>
              <div className="progres__item-head-procent">{data}%</div>
            </div>
            <div className="progres__item-line">
              <progress value={data} max="100" />
            </div>
          </div>
          <div className="progres__item">
            <div className="progres__item-head">
              <div className="progres__item-head-title">Креативность</div>
              <div className="progres__item-head-procent">{crea}%</div>
            </div>
            <div className="progres__item-line">
              <progress value={crea} max="100" />
            </div>
          </div>
          <div className="progres__item">
            <div className="progres__item-head">
              <div className="progres__item-head-title">Создание дизайна</div>
              <div className="progres__item-head-procent">{des}%</div>
            </div>
            <div className="progres__item-line">
              <progress value={des} max="100" />
            </div>
          </div>
          <div className="progres__item">
            <div className="progres__item-head">
              <div className="progres__item-head-title">Soft skills</div>
              <div className="progres__item-head-procent">{sskil}%</div>
            </div>
            <div className="progres__item-line">
              <progress value={sskil} max="100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progres;
