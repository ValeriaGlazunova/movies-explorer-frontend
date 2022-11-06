import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [messageError, setMessageError] = React.useState({
    email: "",
    password: "",
  });
  const [isFormValid, setIsFormValid] = React.useState(false);

  function handleEmailPut(e) {
    setEmail(e.target.value);
    setMessageError({ email: e.target.validationMessage });
  }

  function handlePasswordPut(e) {
    setPassword(e.target.value);
    setMessageError({ password: e.target.validationMessage });
  }

  function handleLogin(e) {
    e.preventDefault();
    onLogin({ password, email });
  }

  React.useEffect(() => {
    if (messageError.email || messageError.password) {
      return setIsFormValid(false);
    } else if (!password || !email) {
      return setIsFormValid(false);
    }
    setIsFormValid(true);
  }, [messageError, password, email]);

  return (
    <section className="login">
      <Link to="/">
        {" "}
        <div className="login__logo"></div>
      </Link>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleLogin}>
        <div className="login__input-container">
          <div className="login__input-box">
            <p className="login__input-head">E-mail</p>
            <input
              className="login__input"
              name="email"
              type="email"
              required
              pattern="^[^ ]+@[^ ]+\.[a-z]{2,3}$"
              onChange={handleEmailPut}
            />
            {messageError.email && (
              <span className="login__input-error">{messageError.email}</span>
            )}
          </div>
          <div className="login__input-box">
            <p className="login__input-head">Пароль</p>
            <input
              className="login__input"
              name="password"
              required
              onChange={handlePasswordPut}
              type="password"
            />
            {messageError.password && (
              <span className="login__input-error">
                {messageError.password}
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={!isFormValid}
          className="login__submit-btn"
        >
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
