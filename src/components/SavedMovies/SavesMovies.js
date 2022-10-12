import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./SavedMovies.css";
import { mainApi } from "../../utils/MainApi";

export default function SavedMovies() {
const [savedMovies, setSavedMovies] = React.useState([]);


  return (
    <section className="saved-movies">
      <div className="saved-movies__container">

        {/* <MoviesCard btn="_type_delete" />
        <MoviesCard btn="_type_delete" />
        <MoviesCard btn="_type_delete" /> */}
      </div>
    </section>
  );
}
