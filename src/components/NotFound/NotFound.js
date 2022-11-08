import React from "react";
import "./NotFound.css";

export default function NotFound() {
  const onGoBack = (e) => {
    e.preventDefault();
    window.history.go(-1);
  };

  return (
    <section className="notfound">
      <h2 className="notfound__title">404</h2>
      <p className="notfound__subtitle">Страница не найдена</p>
      <p className="notfound__link" onClick={onGoBack}>
        Назад
      </p>
    </section>
  );
}
