import React from "react";
import "./SearchForm.css";
import icon from "../../images/icon.svg";
import { useLocation } from "react-router-dom";

export default function SearchForm({ handleSearch }) {
  const [input, setInput] = React.useState('');
  const [check, setCheck] = React.useState(false);
  const [placeholder, setPlaceholder] = React.useState("Фильм");
  const [error, setError] = React.useState(false);
  const { path } = useLocation();

  const handleCheck = () => {
    setCheck(!check);
    localStorage.setItem("check", !check);
    handleSearch(input, !check);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      setError(true);
      setPlaceholder("Нужно ввести ключевое слово");
      return;
    }

    setError(false);
    setPlaceholder("Фильм");
    localStorage.setItem("query", input);

    handleSearch(input, check);
  };

  React.useEffect(() => {
    if (path === "/movies") {
      const inputValue = localStorage.getItem("query");
      const checkValue = JSON.parse(localStorage.getItem("check"));

      if (inputValue) {
        setInput(inputValue);
      }

      if (checkValue) {
        setCheck(checkValue);
      }

      if (inputValue || checkValue === true) {
        handleSearch(inputValue, checkValue);
      }
    }
  }, []);

  return (
    <section className="search-form" onSubmit={handleSubmit} noValidate>
      <div className="search-form__container">
        <img className="search-form__icon" alt="icon" src={icon} />
        <form className="search-form__line">
          <div className="search-form__input-container">
            <input
              className="search-form__input"
              placeholder={placeholder}
              onChange={handleInput}
              value={input}
              required
            />
            <button className="search-form__button" type="submit"></button>
          </div>
          <label className="search-form__checkbox">
            <input
              className="search-form__checkbox__input"
              type="checkbox"
              value={check}
              onChange={handleCheck}
            />
            <span className="search-form__checkbox__pseudo-el"></span>
            Короткометражки
          </label>
        </form>
      </div>
    </section>
  );
}
