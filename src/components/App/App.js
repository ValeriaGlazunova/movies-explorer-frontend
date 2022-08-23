import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
            <Header />
            <Promo />
            <AboutProject />
            <Techs />
        </Route>
        <Route path="/movies">

        </Route>
        <Route path="/saved-movies">

        </Route>
        <Route path="profile">

        </Route>
        <Route path="signin">

        </Route>
        <Route path="signup">
          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
