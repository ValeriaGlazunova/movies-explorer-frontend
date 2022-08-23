import React from "react";
import './Footer.css';

export default function Footer () {
    return (
        <footer className="footer">
            <h5 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h5>
            <div className="footer__bottom-box">
                <p className="footer__date">&copy; 2022</p>
                <ul className="footer__links">
                    <li>
                        <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
                    </li>
                    <li>
                        <a className="footer__link" href="https://github.com/ValeriaGlazunova/">Github</a>
                    </li>
                    <li>
                        <a className="footer__link" href="https://facebook.com">Facebook</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}