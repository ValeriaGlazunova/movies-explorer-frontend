import React from "react";
import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
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
  const token = localStorage.getItem("token");

  // проверка токена
  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    return mainApi.checkToken(token);
  };

  React.useEffect(() => {
    const res = checkToken();
    if (res) {
      history.push("/movies");
      setIsLoggedIn(true);
      mainApi.getCurrentUser(token).then((user) => {
        setCurrentUser(user);
      });
    } else {
      setIsLoggedIn(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //регистрация
  function handleRegister(data) {
    mainApi
      .signUp(data)
      .then((res) => {
        if (res) {
          history.push("/signin");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  //авторизация
  function handleLogin(data) {
    mainApi
      .signIn(data)
      .then((res) => {
        localStorage.setItem("token", res.token);
        setIsLoggedIn(true);
        history.push("/movies");
        mainApi.getCurrentUser(res.token).then((userData) => {
          setCurrentUser(userData);
        });
        mainApi.getMovies(res.token).then((movies) => {
          localStorage.setItem("savedMovies", JSON.stringify(movies));
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  //разлогинимся
  function onSignOut() {
    localStorage.clear();
    setCurrentUser({});
    setIsLoggedIn(false);
  }

  //редактирование профиля
  function handleEditProfile(newData) {
    mainApi.updateUser(newData, token).then((res) => {
      console.log("resuser", res);
      setCurrentUser(res);
    });
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
              <Movies />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute path="/saved-movies" isLoggedIn={isLoggedIn}>
              <Header />
              <SavedMovies />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
              <Header />
              <Profile
                onSignOut={onSignOut}
                onEditProfile={handleEditProfile}
              />
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
