import React from "react";
import "./Promo.css";

export default function Promo() {
  return (
    <div className="promo__frame">
      <section className="promo">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <nav className="promo__nav-links">
          <button className="promo__btn promo__about">
            <a className="promo__link" href="#about-project">О проекте</a>
          </button>
          <button className="promo__btn promo__techs">
            <a className="promo__link" href="#technologies">Технологии</a>
          </button>
          <button className="promo__btn promo__student">
            <a className="promo__link" href="#about-student">Студент</a>
          </button>
        </nav>
      </section>
    </div>
  );
}
