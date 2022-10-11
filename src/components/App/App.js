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
import { mainApi } from "../../utils/MainApi";
import ProtectedRoute from "../../utils/ProtectedRoute";

function App() {
const [currentUser, setCurrentUser] = React.useState({});
const history = useHistory();
const [isLoggedIn, setIsLoggedIn] = React.useState(false);

function handleRegister(data) {
  console.log('regdata', data)
  mainApi
  .signUp(data)
  .then((res) => {
    console.log('res', res)
    // if (res) {
    //   history.push("/signin");
    // }
  })
  .catch ((error) => {
    console.log(error.message);
  })
}

function handleLogin(data) {
  mainApi
  .signIn(data)
  .then((data) => {
    setIsLoggedIn(true);
    history.push('/movie')
  })
  .catch((error) => {
    console.log(error.message)
  })
}

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header />
          <SearchForm />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies" >
          <Header />
          <SearchForm />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header />
          <Profile />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
