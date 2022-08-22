import React from "react";
import './Header.css';
import logo from "../../images/logo.svg"

export default function Header() {

    return (
<header className="header">
    <img className="header__logo" alt="logo" src={logo} />
    <nav className="header__nav-box">
        <p className="header__reg-link">Регистрация</p>
        <p className="header__login-link">Войти</p>
    </nav>
</header>
    );
}