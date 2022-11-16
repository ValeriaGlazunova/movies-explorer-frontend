import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
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
  const [isLoggedIn, setIsLoggedIn] = React.useState(false || true);
  const token = localStorage.getItem("token");
  const [editMessage, setEditMessage] = React.useState('');

  // проверка токена
  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    return mainApi.checkToken(token)
  };

  React.useEffect(() => {
    const res = checkToken();
    if (res) {
      setIsLoggedIn(true);
      mainApi.getCurrentUser(token).then((user) => {
        setCurrentUser(user);
      })
    } else {
      setIsLoggedIn(false);
      localStorage.removeItem('token');
      setCurrentUser({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //регистрация
  function handleRegister(data) {
    mainApi
      .signUp(data)
      .then((res) => {
        if (res) {
          handleLogin({ email: data.email, password: data.password });
          <Redirect to='/movies' />
        }
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoggedIn(false)
      });
  }

  //авторизация
  function handleLogin(data) {
    mainApi
      .signIn(data)
      .then((res) => {
        localStorage.setItem("token", res.token);
        setIsLoggedIn(true);
        <Redirect to='/movies' />
        mainApi.getCurrentUser(res.token).then((userData) => {
          setCurrentUser(userData);
        });
        mainApi.getMovies(res.token).then((movies) => {
          localStorage.setItem("savedMovies", JSON.stringify(movies));
        });
      })
      .catch((error) => {
        console.log(error.message);
          localStorage.removeItem('token')
      });
  }

  //разлогинимся
  function onSignOut() {
    localStorage.clear();
    setCurrentUser({});
    setIsLoggedIn(false);
  }

  const handleEditProfile = (newData) => {
    mainApi.updateUser(newData, token).then((res) => {
      setCurrentUser(res);
      setEditMessage('Профиль успешно изменен');
      setTimeout(() => {
        setEditMessage('')
      }, 5000)
    })
    .catch((err) => {
      console.log(err.message);
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Header isLoggedIn={isLoggedIn} />
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
                editMessage={editMessage}
              />
            </ProtectedRoute>
            <Route path="/signin">
              {isLoggedIn ? (
                <Redirect to='/movies' />
              ) : (
                <Login onLogin={handleLogin} />
              )}
            </Route>
            <Route path="/signup">
              {isLoggedIn ? (
                <Redirect to='/movies' />
              ) : (
                <Register onRegister={handleRegister} />
              )}
            </Route>
            <Route path="**">
              <NotFound />
            </Route>
          </Switch>
        </div>
      }
    </CurrentUserContext.Provider>
  );
}

export default App;
