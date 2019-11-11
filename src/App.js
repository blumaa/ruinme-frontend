import React from 'react';
import { Route, Switch} from 'react-router-dom'
import NavBar from './components/Navbar'
import style from './index.css'
import ExplorePage from './components/ExplorePage'
import SignUpForm from './components/SignUpForm'
import LogInForm from './components/LogInForm';
import ProfilePage from "./components/ProfilePage";


function App() {
  return (
    <div className="App" style={style}>
      <Switch>
        <Route exact path="/" component={ExplorePage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/sign_up" component={SignUpForm} />
        <Route path="/login" component={LogInForm} />
        <Route exact path="/profile/:user_id" component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
