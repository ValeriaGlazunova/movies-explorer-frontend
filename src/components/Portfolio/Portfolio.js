import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ui className="portfolio__link-box">
        <li className="portfolio__link">
          <a
            className="portfolio__link-text"
            href="https://github.com/ValeriaGlazunova/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
          <a
            className="portfolio__link-arrow"
            href="https://github.com/ValeriaGlazunova/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            ↗
          </a>
        </li>
        <li className="portfolio__link">
          <a
            className="portfolio__link-text"
            href="https://github.com/ValeriaGlazunova/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
          <a
            className="portfolio__link-arrow"
            href="https://github.com/ValeriaGlazunova/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            ↗
          </a>
        </li>
        <li className="portfolio__link">
          <a
            className="portfolio__link-text"
            href="https://github.com/ValeriaGlazunova/mesto"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
          <a
            className="portfolio__link-arrow"
            href="hhttps://github.com/ValeriaGlazunova/mesto"
            target="_blank"
            rel="noreferrer"
          >
            ↗
          </a>
        </li>
      </ui>
    </section>
  );
}
