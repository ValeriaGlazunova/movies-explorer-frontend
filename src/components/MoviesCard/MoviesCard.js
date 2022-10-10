import React from "react";
import './MoviesCard.css';
import cardFrame from '../../images/pic__COLOR_pic.jpg';
import { useLocation } from "react-router-dom";
import mainApi from '../../utils/MainApi';

export default function MoviesCard(props) {
    

    return (
        <div className="movie-card">
            <div className="movie-card__head">
                <div className="movie-card__description">
                <h3 className="movie-card__title">33 слова о дизайне</h3>
                <p className="movie-card__duration">1ч 47м</p>
                </div>
                <button className={`movie-card__fav-icon movie-card__fav-icon${props.btn}`} type="button"></button>
            </div>
            <img className="movie-card__frame" src={cardFrame} alt="33 слова о дизайне"/>
        </div>
    )
}