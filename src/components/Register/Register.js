import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register({ onRegister }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  function handleEmailPut(e) {
    setEmail(e.target.value);
  }

  function handlePasswordPut(e) {
    setPassword(e.target.value);
  }

  function handleNamePut(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({password, email, name});
  }

  return (
    <section className="register">
      <div className="register__logo"></div>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form"
      onSubmit={handleSubmit}
      >
        <div className="register__input-container">
          <div className="register__input-box">
            <p className="register__input-head">Имя</p>
            <input 
            value={name}
            name="name"
            className="register__input"
            type="text"
            required
            onChange={handleNamePut}
             />
            <span className="register__input-error"></span>
          </div>
          <div className="register__input-box">
            <p className="register__input-head">E-mail</p>
            <input
            value={email}
            name="email"
            type="email"
            required
            className="register__input"
            onChange={handleEmailPut}
             />
            <span className="register__input-error"></span>
          </div>
          <div className="register__input-box">
            <p className="register__input-head">Пароль</p>
            <input
            value={password}
            required
             className="register__input" 
             type="password"
             onChange={handlePasswordPut} 
             />
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
