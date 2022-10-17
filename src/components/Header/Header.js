import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { Switch, Route, Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        {" "}
        <img className="header__logo" alt="logo" src={logo} />
      </Link>
      <Switch>
        <Route exact path="/">
          <nav className="header__nav-box">
            <Link to="/signup" className="header__reg-link">
              Регистрация
            </Link>
            <Link to="/signin" className="header__login-link">
              Войти
            </Link>
          </nav>
        </Route>
        <Route path="/movies">
          <Navigation />
        </Route>
        <Route path="/saved-movies">
          <Navigation />
        </Route>
        <Route path="/profile">
          <Navigation />
        </Route>
      </Switch>
    </header>
  );
}
