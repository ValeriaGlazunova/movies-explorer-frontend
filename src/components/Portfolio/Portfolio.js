import React from "react";
import  './Portfolio.css';

export default function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <ui className="portfolio__link-box">
                <li className="portfolio__link">
                    <a className="portfolio__link-text" href="https://github.com/ValeriaGlazunova/how-to-learn">Статичный сайт</a>
                    <a className="portfolio__link-arrow" href="https://github.com/ValeriaGlazunova/how-to-learn">↗</a>
                </li>
                <li className="portfolio__link">
                    <a className="portfolio__link-text" href="https://github.com/ValeriaGlazunova/russian-travel">Адаптивный сайт</a>
                    <a className="portfolio__link-arrow" href="https://github.com/ValeriaGlazunova/russian-travel">↗</a>
                </li>
                <li className="portfolio__link">
                    <a className="portfolio__link-text" href="https://github.com/ValeriaGlazunova/mesto">Одностраничное приложение</a>
                    <a className="portfolio__link-arrow" href="hhttps://github.com/ValeriaGlazunova/mesto">↗</a>
                </li>
            </ui>
        </section>
    )
}