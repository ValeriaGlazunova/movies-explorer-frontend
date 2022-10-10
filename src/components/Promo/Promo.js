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
          <button className="promo__btn promo__about">О проекте</button>
          <button className="promo__btn promo__techs">Технологии</button>
          <button className="promo__btn promo__student">Студент</button>
        </nav>
      </section>
    </div>
  );
}
