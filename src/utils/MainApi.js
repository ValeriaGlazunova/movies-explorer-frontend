export const mainUrl = "https://glazunova.diploma.nomoredomains.xyz";

class Api {
    constructor(mainUrl) {
        this._mainUrl = mainUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(res.status);
        }
    }

    _fetch(path, body, method = 'GET') {
        return fetch(this._mainUrl + path, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then((res) => this._checkResponse(res));
    }

    getCurrentUser() {
        return this._fetch('/users/me');
    }

    updateUser(user) {
        return this._fetch('/users/me', user, 'PATCH');
    }

    getMovies() {
        return this._fetch('/movies');
    }

    saveMovie(movie) {
        return this._fetch('/movies', movie, 'POST');
    }

    deleteMovie(id) {
        return this._fetch(`/movies/${id}`, {}, 'DELETE');
    }

    signUp(user) {
        return this._fetch('/signup', user, 'POST');
    }

    signIn(user) {
        return this._fetch('/signin', user, 'POST');
    }

    signOut() {
        return this._fetch('/signout', {}, 'POST');
    }
}

export const mainApi = new Api(mainUrl);