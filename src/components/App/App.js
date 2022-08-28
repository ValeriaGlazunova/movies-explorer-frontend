import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
            <Header />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </Route>
        <Route path="/movies">
          <Header />
          <SearchForm />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header />
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
