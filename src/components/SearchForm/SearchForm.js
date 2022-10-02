import React from "react";
import "./SearchForm.css";
import icon from "../../images/icon.svg";

export default function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <img className="search-form__icon" alt="icon" src={icon} />
        <form className="search-form__line">
          <div className="search-form__input-container">
          <input className="search-form__input" placeholder="Фильм" />
          <button className="search-form__button" type="button"></button>
          </div>
          <label className="search-form__checkbox" htmlFor="checkbox">
            <input
              className="search-form__checkbox__input"
              type="checkbox"
              name="checkbox"
            />
            <span className="search-form__checkbox__pseudo-el"></span>
            Короткометражки
          </label>
        </form>
      </div>
    </section>
  );
}
