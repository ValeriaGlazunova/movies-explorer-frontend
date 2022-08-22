import './App.css';
import { Switch, Route, useHistory } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
            
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
