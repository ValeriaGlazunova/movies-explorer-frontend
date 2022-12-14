import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

export default function MoviesCard({
  movie,
  handleSaveMovie,
  handleDeleteMovie,
}) {
  const { nameRU, duration, image, trailerLink, id, _id } = movie;
  const [saved, setSaved] = React.useState(false);
  const location = useLocation();
  const movieFrame =
    location.pathname === "/movies"
      ? `https://api.nomoreparties.co${image.url}`
      : image;

  const onMovieSave = () => {
    handleSaveMovie(movie);
    toggleSavedButton();
  };

  const onMovieDelete = () => {
    if (location.pathname === "/movies") {
      handleDeleteMovie(movie.id);
      toggleSavedButton();
    } else {
      handleDeleteMovie(movie._id);
    }
  };

  const toggleSavedButton = () => {
    if (!saved) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  };

  React.useEffect(() => {
    const savedArray = JSON.parse(localStorage.getItem("savedMovies"));
    if (savedArray) {
      savedArray.forEach((savedMovie) => {
        if (savedMovie.movieId === id || savedMovie._id === _id) {
          setSaved(true);
        }
      });
    }
  }, []);

  return (
    <div className="movie-card">
      <div className="movie-card__head">
        <div className="movie-card__description">
          <h3 className="movie-card__title">{nameRU}</h3>
          <p className="movie-card__duration">{`${Math.floor(duration / 60)}ч ${
            duration % 60
          }м`}</p>
        </div>
        {location.pathname === "/movies" ? (
          !saved ? (
            <button
              className="movie-card__fav-icon"
              type="button"
              onClick={onMovieSave}
            ></button>
          ) : (
            <button
              className="movie-card__fav-icon movie-card__fav-icon_type_active"
              type="button"
              onClick={onMovieDelete}
            ></button>
          )
        ) : (
          <button
            type="button"
            className="movie-card__fav-icon movie-card__fav-icon_type_delete"
            onClick={onMovieDelete}
          ></button>
        )}
      </div>
      <a
        className="movie-card__link"
        href={trailerLink}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <img className="movie-card__frame" src={movieFrame} alt={nameRU} />
      </a>
    </div>
  );
}
