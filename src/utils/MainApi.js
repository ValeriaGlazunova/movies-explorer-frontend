class Api {
    constructor({mainUrl, headers}) {
        this._mainUrl = mainUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(res.status);
        }
    }

    getCurrentUser (token) {
        return fetch(`${this._mainUrl}/users/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
              },
          })
          .then(this._checkResponse);
    }

    updateUser(user, token) {
        return fetch(`${this._mainUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user)
        })
        .then(this._checkResponse);
    }

    getMovies(token) {
        return fetch (`${this._mainUrl}/movies`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            })
            .then(this._checkResponse)
    }

    saveMovie(movie, token) {
        return fetch (`${this._mainUrl}/movies`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(movie),
        })
        .then(this._checkResponse);
    }

    deleteMovie(id, token) {
        return fetch (`${this._mainUrl}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
              },
        })
        .then(this._checkResponse);
    }

    signUp(user) {
        return fetch (`${this._mainUrl}/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(user)
        })
        .then(this._checkResponse);
    }

    signIn(user) {
        return fetch (`${this._mainUrl}/signin`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(user),
        })
        .then(this._checkResponse);
    }

    checkToken(token) {
        return fetch(`${this._mainUrl}/users/me`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          })
          .then(this._checkResponse);
    }
}

const mainApi = new Api({
    mainUrl: "https://glazunova.diploma.nomoredomains.xyz"
});

export default mainApi;
