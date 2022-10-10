import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="project-info">
      <h2 className="project-info__title">О проекте</h2>
      <div className="project-info__description">
        <div className="project-info__desc-container">
          <h3 className="project-info__desription__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project-info__desription__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="project-info__desc-container">
          <h3 className="project-info__desription__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project-info__desription__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="project-info__period">
        <div className="project-info__time-scale">
          <div className="project-info__time-scale__backend">1 неделя</div>
          <div className="project-info__time-scale__frontend">4 недели</div>
        </div>
        <div className="projec-info__bottom-scale">
          <div className="project-info__bottom-scale__backend">Back-end</div>
          <div className="project-info__bottom-scale__frontend">Front-end</div>
        </div>
      </div>
    </section>
  );
}
