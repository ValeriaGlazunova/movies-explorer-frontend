import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  return (
    <section className="register">
      <div className="register__logo"></div>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <div className="register__input-container">
          <div className="register__input-box">
            <p className="register__input-head">Имя</p>
            <input className="register__input" />
            <span className="register__input-error"></span>
          </div>
          <div className="register__input-box">
            <p className="register__input-head">E-mail</p>
            <input className="register__input" />
            <span className="register__input-error"></span>
          </div>
          <div className="register__input-box">
            <p className="register__input-head">Пароль</p>
            <input className="register__input" type="password" />
            <span className="register__input-error">
              Что-то пошло не так...
            </span>
          </div>
        </div>
        <button type="submit" className="register__submit-btn">
          Зарегистрироваться
        </button>
      </form>
      <p className="register__subtitle">
        Уже зарегистрированы?{" "}
        <Link to="/signin" className="register__link">
          Войти
        </Link>
      </p>
    </section>
  );
}
