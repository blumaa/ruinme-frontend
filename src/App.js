import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import style from "./index.css";
import ExplorePage from "./components/ExplorePage";
import ProfilePage from "./components/ProfilePage";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App" style={style}>
      <Route path="/" component={NavBar} />
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/explore" component={ExplorePage} />
\        <Route path="/profile/:user_id" component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
