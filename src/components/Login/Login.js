import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailPut(e) {
    setEmail(e.target.value);
  }

  function handlePasswordPut(e) {
    setPassword(e.target.value);
  }

  function handleLogin(e) {
    e.preventDefault();
    onLogin({ password, email })
  }

  return (
    <section className="login">
      <div className="login__logo"></div>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleLogin}>
        <div className="login__input-container">
          <div className="login__input-box">
            <p className="login__input-head">E-mail</p>
            <input className="login__input"
            name="email"
            type="email"
            required
            onChange={handleEmailPut}
            />
            <span className="login__input-error"></span>
          </div>
          <div className="login__input-box">
            <p className="login__input-head">Пароль</p>
            <input className="login__input"
            name="password"
            required
            onChange={handlePasswordPut}
            type="password" />
            <span className="login__input-error"></span>
          </div>
        </div>
        <button type="submit" className="login__submit-btn">
          Войти
        </button>
      </form>
      <p className="login__subtitle">
        Ещё не зарегистрированы?{" "}
        <Link to="/signup" className="login__link">
          Регистрация
        </Link>
      </p>
    </section>
  );
}
