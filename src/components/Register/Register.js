import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register({ onRegister }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [messageError, setMessageError] = React.useState({
    name: '',
    email: '',
    password: '',
  });
  const [isFormValid, setIsFormValid] = React.useState(false);

  function handleEmailPut(e) {
    setEmail(e.target.value);
    setMessageError({email: e.target.validationMessage});
  }

  function handlePasswordPut(e) {
    setPassword(e.target.value);
    setMessageError({password: e.target.validationMessage});
  }

  function handleNamePut(e) {
    setName(e.target.value);
    setMessageError({name: e.target.validationMessage});
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({password, email, name});
  }

  React.useEffect(() => {
    if (messageError.name || messageError.email || messageError.password) {
      return setIsFormValid(false);
    } else if (!name || !password || !email) {
      return setIsFormValid(false);
    }
    setIsFormValid(true);
  }, [messageError, password, email, name])

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
            pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
            className="register__input"
            type="text"
            required
            onChange={handleNamePut}
             />
            {messageError.name && (<span className="register__input-error">{messageError.name}</span>)}
          </div>
          <div className="register__input-box">
            <p className="register__input-head">E-mail</p>
            <input
            value={email}
            name="email"
            type="email"
            required
            pattern='^[^ ]+@[^ ]+\.[a-z]{2,3}$'
            className="register__input"
            onChange={handleEmailPut}
             />
            {messageError.email && (<span className="register__input-error">{messageError.email}</span>)}
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
            {messageError.password && (<span className="register__input-error">{messageError.password}
            </span>)}
          </div>
        </div>
        <button type="submit" 
        disabled={!isFormValid}
        className="register__submit-btn">
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
