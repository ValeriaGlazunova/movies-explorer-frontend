import React from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [showMenu, setShowMenu] = React.useState(false);
  const location = useLocation();

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const handleHideMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navigation">
      <ul
        className={`navigation__links ${
          showMenu && "navigation__links_opened"
        }`}
      >
        <button
          className="navigation__close-btn"
          type="button"
          onClick={handleHideMenu}
        ></button>
        <li className="navigation__link navigation__link_hidden">
          <Link to="/" className="navigation__link-item">
            Главная
          </Link>
        </li>
        <li className="navigation__link">
          <Link
            to="/movies"
            className={
              location.pathname === "/movies"
                ? "navigation__link-item navigation__link_active"
                : "navigation__link-item"
            }
          >
            Фильмы
          </Link>
        </li>
        <li className="navigation__link">
          <Link
            to="/saved-movies"
            className={
              location.pathname === "/saved-movies"
                ? "navigation__link-item navigation__link_active"
                : "navigation__link-item"
            }
          >
            Сохранённые фильмы
          </Link>
        </li>
        <li className="navigation__link navigation__acc-link">
          <Link to="/profile" className="navigation__account-link">
            Аккаунт
          </Link>
        </li>
      </ul>
      <button
        className="navigation__burger-menu-btn"
        type="button"
        onClick={handleShowMenu}
      ></button>
    </nav>
  );
}
