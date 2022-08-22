import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from '../Header/Header';
import Promo from '../Promo/Promo';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
            <Header />
            <Promo />
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
