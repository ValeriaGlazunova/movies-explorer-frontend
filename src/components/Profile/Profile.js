import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Валерия!</h2>
      <form className="profile__form" disa>
        <div className="profile__input-container">
          <div className="profile__name-container">
            <p className="profie__input-name">Имя</p>
            <input className="profile__input" placeholder="Валерия" />
          </div>
          <div className="profile__email-container">
            <p className="profie__input-name">E-mail</p>
            <input
              className="profile__input"
              placeholder="Valerila@mail.ru"
            />
          </div>
        </div>
      </form>
      <button className="profile__submit-btn" type="submit">
        Редактирование
      </button>
      <button className="profile__logout-btn" type="button">
        Выйти из аккаунта
      </button>
    </section>
  );
}
