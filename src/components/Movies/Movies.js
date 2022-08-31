import React from "react";
import './Movies.css';
import MoviesCard from "../MoviesCard/MoviesCard";

export default function Movies() {
    return (
        <section className="movies">
            <div className="movies__container">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            </div>
            <button className="movies__more-btn" type="button">Ещё</button>
        </section>
    )
}