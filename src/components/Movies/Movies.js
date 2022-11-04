import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import { getFilms } from "../../utils/MoviesApi";
import Preloader from "../../components/Preloader/Preloader";
import { searchFilter } from "../../utils/FilteredArray";
import mainApi from "../../utils/MainApi";

export default function Movies() {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const token = localStorage.getItem("token");
  const storedMovies = JSON.parse(localStorage.getItem("allMovies"));

  const filter = (text, shorts) => {
    const storedMovies = JSON.parse(localStorage.getItem("allMovies"));
    const filtered = searchFilter(storedMovies, text, shorts);

    if (filtered.length === 0) {
      setErrorMessage("Ничего не найдено");
    }

    setMovies(filtered);
    setLoading(false);
  };

  const handleSearch = (text, shorts) => {
    setLoading(true);
    setErrorMessage("");

    if (!storedMovies) {
      getFilms()
        .then((films) => {
          localStorage.setItem("allMovies", JSON.stringify(films));
          filter(text, shorts);
        })
        .catch(() => {
          setErrorMessage(`Во время запроса произошла ошибка. 
          Возможно, проблема с соединением или сервер недоступен.
          Подождите немного и попробуйте ещё раз`);
        });
    } else {
      filter(text, shorts);
    }
  };

  const handleSaveMovie = (movie) => {
    const newSavedMovie = {
      ...movie,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
    };
    delete newSavedMovie.id;
    delete newSavedMovie.created_at;
    delete newSavedMovie.updated_at;
    mainApi
      .saveMovie(newSavedMovie, token)
      .then((savedMovie) => {
        let savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
        if (!savedMovies) {
          savedMovies = [];
        }
        savedMovies.push(savedMovie);
        localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="movies-section">
      <SearchForm handleSearch={handleSearch} />
      {loading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          errorMessage={errorMessage}
          handleSaveMovie={handleSaveMovie}
        />
      )}
    </div>
  );
}
