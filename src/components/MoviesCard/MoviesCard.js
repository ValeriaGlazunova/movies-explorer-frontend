import React from "react";
import './MoviesCard.css';
import cardFrame from '../../images/pic__COLOR_pic.jpg';
import { useLocation } from "react-router-dom";
import mainApi from '../../utils/MainApi';

export default function MoviesCard({ movie, btn }) {

    return (
        <div className="movie-card">
            <div className="movie-card__head">
                <div className="movie-card__description">
                <h3 className="movie-card__title">{movie.nameRU}</h3>
                <p className="movie-card__duration">{`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`}</p>
                </div>
                <button className={`movie-card__fav-icon movie-card__fav-icon${btn}`} type="button"></button>
            </div>
            <img className="movie-card__frame" src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.image.name}/>
        </div>
    )
}