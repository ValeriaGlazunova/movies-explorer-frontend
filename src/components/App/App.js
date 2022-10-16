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
const [currentMovies, setCurrentMovies] = React.useState([]);
const history = useHistory();
const [isLoggedIn, setIsLoggedIn] = React.useState(false);

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
    // const movies = mainApi.getMovies(res.token);
    // setCurrentMovies(movies);
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
    setCurrentUser(data);
    // const movies = mainApi.getMovies(res.token)
    // setCurrentMovies(movies)
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
  setCurrentMovies([]);
  setIsLoggedIn(false);
  localStorage.removeItem('token');
}

//редактирование профиля
function handleEditProfile(newData) {
  mainApi.updateUser(newData)
  .then((res) => {
    setCurrentUser(res)
  })
}

//сохранение фильма
function handleSaveMovie() {

};

//удаление фильма
function handleDeleteSavedMovie() {

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
        <Route path="/movies">
          <Header />
          <Movies handleSaveMovie ={handleSaveMovie}
                handleDeleteSavedMovie={handleDeleteSavedMovie} />
          <Footer />
        </Route>
        <Route path="/saved-movies" >
          <Header />
          <SearchForm />
          <SavedMovies handleSaveMovie ={handleSaveMovie}
                handleDeleteSavedMovie={handleDeleteSavedMovie} />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header />
          <Profile onSignOut={onSignOut} onEditProfile={handleEditProfile} />
        </Route>
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
