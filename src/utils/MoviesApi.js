export const movieUrl = "https://api.nomoreparties.co/beatfilm-movies";

function checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

export const getFilms = () => {
    return fetch(movieUrl, {
        method: "GET"
    })
    .then((res) => checkResponse(res));
};