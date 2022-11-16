import React from "react";
import "./SavedMovies.css";
import { searchFilter } from "../../utils/FilteredArray";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import mainApi from "../../utils/MainApi";

export default function SavedMovies() {
  const [loader, setLoader] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const savedArray = JSON.parse(localStorage.getItem("savedMovies")) || [];
  const [savedMovies, setSavedMovies] = React.useState(savedArray);
  const token = localStorage.getItem("token");

  const handleSearch = (text, shorts) => {
    setLoader(true);
    setErrorMessage("");

    const filteredArr = searchFilter(savedArray, text, shorts);

    if (filteredArr.length === 0) {
      setErrorMessage("Ничего не найдено");
    }

    setSavedMovies(filteredArr);
    setLoader(false);
  };

  const handleDeleteSavedMovie = (savedMovieId) => {
    mainApi
      .deleteMovie(savedMovieId, token)
      .then(() => {
        const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
        const newArr = savedMovies.filter((item) => item._id !== savedMovieId);
        localStorage.setItem("savedMovies", JSON.stringify(newArr));
        setSavedMovies(newArr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="saved-movies">
      <SearchForm handleSearch={handleSearch} />
      {loader ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={savedMovies}
          errorMessage={errorMessage}
          handleDeleteMovie={handleDeleteSavedMovie}
        />
      )}
    </section>
  );
}
