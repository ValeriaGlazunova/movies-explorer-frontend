import React from "react";
import './Movies.css';
import { getFilms } from "../../utils/MoviesApi";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function Movies() {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        getFilms()
        .then((films) => {
            setMovies(films)
        })
        .catch(console.log)
    }, [])
    

    return (
        <section className="movies">
            <div className="movies__container">
                {
                    movies.map((movie) => (
                        <MoviesCard 
                        key={movie.id}
                        movie={movie}
                        />
                    ))
                }
            </div>
            <button className="movies__more-btn" type="button">Ещё</button>
        </section>
    )
}