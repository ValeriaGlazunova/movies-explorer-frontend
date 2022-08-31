import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './SavedMovies.css'

export default function SavedMovies() {
    return (
        <section className="saved-movies">
            <div className="saved-movies__container">
                <MoviesCard btn='_type_delete'/>
                <MoviesCard btn='_type_delete'/>
                <MoviesCard btn='_type_delete'/>
            </div>
        </section>
    )
}