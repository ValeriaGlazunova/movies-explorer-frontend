import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-me" id="about-student">
      <h3 className="about-me__title">Студент</h3>
      <div className="about-me__desc-box">
        <div className="about-me__name-box">
          <h4 className="about-me__name-title">Валерия</h4>
          <p className="about-me__job-title">Фронтенд-разработчик, 28 лет</p>
          <p className="about-me__info-subtitle">
            Живу в Тюмени. Закончила факультет мировой экономики в ТюмГУ. В
            свободное время люблю бег и занятия верховой езды. В 2021 году
            решила попробовать новое занятие - разработка веб приложений. Пошла
            на курс веб-разработки - загорелись глаза. Сейчас активно развиваюсь
            в этой сфере.
          </p>
          <ul className="about-me__link-box">
            <li className="about-me__link">
              <a
                className="about-me__link-text"
                href="https://telegram.me/valeriaglazunova"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
            </li>
            <li className="about-me__link">
              <a
                className="about-me__link-text"
                href="https://github.com/ValeriaGlazunova"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="about-me__photo"></div>
      </div>
    </section>
  );
}
