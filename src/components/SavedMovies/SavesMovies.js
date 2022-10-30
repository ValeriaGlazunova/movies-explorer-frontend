import React from "react";
import "./SavedMovies.css";
import { searchFilter } from "../../utils/FilteredArray";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

export default function SavedMovies({handleSaveMovie}) {
  const [loader, setLoader] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const savedArray = JSON.parse(localStorage.getItem('savedMovies')) || [];
  const [savedMovies, setSavedMovies] = React.useState(savedArray);

const handleSearch = (text, shorts) => {
  setLoader(true);
  setErrorMessage('');

  const filteredArr = searchFilter(savedArray, text, shorts);

  if(filteredArr.length === 0) {
    setErrorMessage('Ничего не найдено');
  }

  setSavedMovies(filteredArr);
  setLoader(false);
}


  return (
    <section className="saved-movies">
<SearchForm handleSearch={handleSearch} />
            {loader
        ? <Preloader />
        : <MoviesCardList movies={savedMovies} errorMessage={errorMessage} handleSaveMovie ={handleSaveMovie} />}
    </section>
  );
}
