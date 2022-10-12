import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.css';
import { getFilms } from "../../utils/MoviesApi";
import Preloader from '../../components/Preloader/Preloader';

export default function Movies() {
    const [movies, setMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');

    function searchFilter(array, query, short) {
        if (!array) {
          return [];
        }
      
        let filtered = [...array];
      
        if (query) {
          filtered = filtered.filter((element) => element.nameRU
            .toLowerCase()
            .includes(query.toLowerCase()));
        }
      
        if (short) {
          return filtered.filter((element) => element.duration <= 40);
        }
      
        return filtered;
      }

  const filter = (query, shorts) => {
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    const filtered = searchFilter(storedMovies, query, shorts);

    if (filtered.length === 0) {
      setErrorMessage("Ничего не найдено");
    }

    setMovies(filtered);
    setLoading(false);
  };

  const handleSearch = (query, shorts) => {
    setLoading(true);
    setErrorMessage('');

    const storedMovies = JSON.parse(localStorage.getItem('movies'));

    if (!storedMovies) {
      getFilms()
        .then((films) => {
          localStorage.setItem('movies', JSON.stringify(films));
          filter(query, shorts);
        })
        .catch(() => {
          setErrorMessage("Во время запроса произошла ошибка");
        });
    } else {
      filter(query, shorts);
    }
  };

    return (
        <div className="movies-section">
            <SearchForm handleSearch={handleSearch} />
            {loading
        ? <Preloader />
        : <MoviesCardList movies={movies} errorMessage={errorMessage} />}
        </div>
    )
}