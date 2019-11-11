import React from "react";
import { Route, Switch } from "react-router-dom";
import style from "./index.css";
import ExplorePage from "./components/ExplorePage";
import ProfilePage from "./components/ProfilePage";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App" style={style}>
      <Switch>
        <Route exact path="/" component={ExplorePage} />
        <Route path="/explore" component={ExplorePage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/profile/:user_id" component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
