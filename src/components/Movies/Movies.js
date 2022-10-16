import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.css';
import { getFilms } from "../../utils/MoviesApi";
import Preloader from '../../components/Preloader/Preloader';
import { searchFilter } from "../../utils/FilteredArray";

export default function Movies({handleSaveMovie, handleDeleteSavedMovie}) {
    const [movies, setMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');

  const filter = (text, shorts) => {
    const storedMovies = JSON.parse(localStorage.getItem('allMovies'));
    const filtered = searchFilter(storedMovies, text, shorts);

    if (filtered.length === 0) {
      setErrorMessage("Ничего не найдено");
    }

    setMovies(filtered);
    setLoading(false);
  };

  const handleSearch = (text, shorts) => {
    setLoading(true);
    setErrorMessage('');

    const storedMovies = JSON.parse(localStorage.getItem('allMovies'));

    if (!storedMovies) {
      getFilms()
        .then((films) => {
          localStorage.setItem('allMovies', JSON.stringify(films));
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


    return (
        <div className="movies-section">
            <SearchForm handleSearch={handleSearch} />
            {loading
        ? <Preloader />
        : <MoviesCardList movies={movies} errorMessage={errorMessage} handleSaveMovie ={handleSaveMovie}
        handleDeleteSavedMovie={handleDeleteSavedMovie} />}
        </div>
    )
}