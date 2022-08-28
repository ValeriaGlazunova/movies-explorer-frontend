import React from "react";
import './SearchForm.css';
import icon from '../../images/icon.svg';

export default function SearchForm() {
    return (
        <section className="search-form">
            <div className="search-form__container">
                <img className="search-form__icon" alt="icon" src={icon} />
                <form className="serch-form__line">
                <input className="search-form__input" placeholder="Фильм" />
                <button className="search-form__button" type="button"></button>
                <label className="search-form__checkbox">
                    <input className="search-form__checkbox__input" type="checkbox" />
                <span className="search-form__checkbox__pseudo-element"></span>
                Короткометражки
                </label>
                </form>
            </div>
        </section>
    )
}