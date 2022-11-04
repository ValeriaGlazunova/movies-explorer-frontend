import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Profile({ onEditProfile, onSignOut }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [messageError, setMessageError] = React.useState({
    name: "",
    email: "",
  });
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isFormValid, setIsFormValid] = React.useState(true);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setMessageError({ name: e.target.validationMessage });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setMessageError({ email: e.target.validationMessage });
  };

  const handleSubmitNewData = (e) => {
    if (messageError.name && messageError.email) {
      return;
    }
    e.preventDefault();
    onEditProfile({ name, email });
  };

  React.useEffect(() => {
    if (messageError.name || messageError.email) {
      return setIsFormValid(false);
    } else if (currentUser.name === name && currentUser.email === email) {
      return setIsFormValid(false);
    }
    setIsFormValid(true);
  }, [messageError, name, email, currentUser]);

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
      <form className="profile__form" onSubmit={handleSubmitNewData}>
        <div className="profile__input-container">
          <div className="profile__name-container">
            <p className="profie__input-name">Имя</p>
            <div className="input-container">
              <input
                className="profile__input"
                pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                placeholder="Имя"
                required
                onChange={handleNameChange}
                defaultValue={name}
              />
              {messageError.name && (
                <span className="profile__input-error">
                  {messageError.name}
                </span>
              )}
            </div>
          </div>
          <div className="profile__email-container">
            <p className="profie__input-name">E-mail</p>
            <div className="input-container">
              <input
                className="profile__input"
                pattern="^[^ ]+@[^ ]+\.[a-z]{2,3}$"
                required
                onChange={handleEmailChange}
                placeholder="email"
                defaultValue={email}
              />
              {messageError.email && (
                <span className="profile__input-error">
                  {messageError.email}
                </span>
              )}
            </div>
          </div>
        </div>
        <button
          className="profile__submit-btn"
          disabled={!isFormValid}
          type="submit"
        >
          Редактирование
        </button>
      </form>
      <Link to="/" className="profile__logout-btn" onClick={onSignOut}>
        Выйти из аккаунта
      </Link>
    </section>
  );
}
