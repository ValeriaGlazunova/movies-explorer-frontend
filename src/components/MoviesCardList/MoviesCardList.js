import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

export default function MoviesCardList({
  movies,
  errorMessage,
  handleSaveMovie,
  handleDeleteMovie,
}) {
  const [maxMovies, setMaxMovies] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const location = useLocation();

  const showMoreMovies = () => {
    setMaxMovies(maxMovies + step);
  };

  const setCards = () => {
    const width = window.innerWidth;

    if (location.pathname === "/saved-movies") {
      setMaxMovies(movies.length);
    }

    if (width >= 1140) {
      setMaxMovies(12);
      setStep(3);
    } else if (width >= 760) {
      setMaxMovies(8);
      setStep(2);
    } else {
      setMaxMovies(5);
      setStep(2);
    }
  };

  React.useEffect(() => {
    setCards();
    window.addEventListener("resize", () => {
      setCards();
    });
  }, []);

  return (
    <section className="movies">
      {errorMessage ? (
        <p className="movies__error-message">{errorMessage}</p>
      ) : (
        <div className="movies__container">
          {movies.map((movie, index) => {
            if (index < maxMovies) {
              return (
                <MoviesCard
                  key={movie.id}
                  movie={movie}
                  handleSaveMovie={handleSaveMovie}
                  handleDeleteMovie={handleDeleteMovie}
                />
              );
            }
            return null;
          })}
        </div>
      )}
      {movies.length > maxMovies && location.pathname !== "/saved-movies" && (
        <button
          className="movies__more-btn"
          type="button"
          onClick={showMoreMovies}
        >
          Ещё
        </button>
      )}
    </section>
  );
}
