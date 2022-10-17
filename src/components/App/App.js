import React from "react";
import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavesMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import ProtectedRoute from "../../utils/ProtectedRoute";

function App() {
const [currentUser, setCurrentUser] = React.useState({});
const history = useHistory();
const [isLoggedIn, setIsLoggedIn] = React.useState(false);
const [savedMovieId, setSavedMovieId] = React.useState('');
const token = localStorage.getItem('token');


// проверка токена
const checkToken = () => {
  const token = localStorage.getItem('token')
  if (!token) {
    return false;
  }
  return mainApi.checkToken(token);
};

React.useEffect(() => {
  const res = checkToken();
  if (res) {
    setIsLoggedIn(true);
    setCurrentUser(res);
  } else {
    setIsLoggedIn(false);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


//регистрация
function handleRegister(data) {
  mainApi
  .signUp(data)
  .then((res) => {
    if (res) {
       history.push("/signin");
     }
  })
  .catch ((error) => {
    console.log(error.message);
  })
}

//авторизация
function handleLogin(data) {
  mainApi
  .signIn(data)
  .then((res) => {
    setIsLoggedIn(true);
    localStorage.setItem('token', res.token);
    mainApi.getCurrentUser(token)
      .then((userData) => {
        setCurrentUser(userData);
    })
     history.push('/movies')
  })
  .catch((error) => {
    console.log(error.message)
  })
}

//разлогинимся
function onSignOut() {
  localStorage.removeItem('token');
  setCurrentUser({});
  setIsLoggedIn(false);
}

//редактирование профиля
function handleEditProfile(newData) {
  mainApi.updateUser(newData)
  .then((res) => {
    setCurrentUser(res)
  })
}

//сохранение фильма
function handleSaveMovie(movie) {
  const newSavedMovie = {
    ...movie,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
  }
  delete newSavedMovie.id;
    delete newSavedMovie.created_at;
    delete newSavedMovie.updated_at;
    mainApi.saveMovie(newSavedMovie, token)
    .then((savedMovie) => {
      setSavedMovieId(savedMovie._id)
      let savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
      if (!savedMovies) {
        savedMovies = [];
      }

      savedMovies.push(savedMovie);
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    })
    .catch((err) => {
      console.log(err)
    })
};

//удаление фильма
function handleDeleteSavedMovie(savedMovieId) {
  mainApi.deleteMovie(savedMovieId, token)
  .then(() => {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const newArr = savedMovies.filter((item) => item._id !== savedMovieId)
    localStorage.setItem('savedMovies', JSON.stringify(newArr))
  })
  .catch(err => {
    console.log(err);
  })
}

  return (
    <CurrentUserContext.Provider value={currentUser}>
    {
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <ProtectedRoute path="/movies" isLoggedIn={isLoggedIn}>
          <Header />
          <Movies handleSaveMovie ={handleSaveMovie} />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path="/saved-movies" isLoggedIn={isLoggedIn}>
          <Header />
          <SearchForm />
          <SavedMovies handleSaveMovie={handleDeleteSavedMovie} />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
          <Header />
          <Profile onSignOut={onSignOut} onEditProfile={handleEditProfile} />
        </ProtectedRoute>
        <Route path="/signin">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/signup">
          <Register onRegister={handleRegister} />
        </Route>
        <Route path="/**">
          <NotFound />
        </Route>
      </Switch>
    </div>
    }
    </CurrentUserContext.Provider>
  );
}

export default App;
