import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { Switch, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" alt="logo" src={logo} />
      <Switch>
          <Route exact path="/">
            <nav className="header__nav-box">
            <Link to="/signup" className="header__reg-link">
              Регистрация
            </Link>
            <Link to="/movies" className="header__login-link">
              Войти
            </Link>
            </nav>
          </Route>
          <Route path="/movies">
            <nav className="header__movies-nav-box">
                <Link to='/movies' className="header__movies-link header__movies-link_active">Фильмы</Link>
                <Link to='/saved-movies' className="header__movies-link">Сохранённые фильмы</Link>
            </nav>
            <Link to='/' className="header__account-link">Аккаунт</Link>
          </Route>
          <Route path="/saved-movies">
            <nav className="header__movies-nav-box">
                <Link to='/movies' className="header__movies-link">Фильмы</Link>
                <Link to='/saved-movies' className="header__movies-link header__movies-link_active">Сохранённые фильмы</Link>
            </nav>
            <Link to='/' className="header__account-link">Аккаунт</Link>
          </Route>
          <Route path="/profile">
            <nav className="header__movies-nav-box">
                <Link to='/movies' className="header__movies-link header__movies-link_active">Фильмы</Link>
                <Link to='/saved-movies' className="header__movies-link">Сохранённые фильмы</Link>
            </nav>
            <Link to='/' className="header__account-link">Аккаунт</Link>
          </Route>
      </Switch>
    </header>
  );
}
