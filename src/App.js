import React from 'react';
import { Route, Switch} from 'react-router-dom'
import NavBar from './components/Navbar'
import style from './index.css'
import ExplorePage from './components/ExplorePage'
import SignUpForm from './components/SignUpForm'
import LogInForm from './components/LogInForm';


function App() {
  return (
    <div className="App" style={style}>
      <Route path="/" component={NavBar} />
      <Switch>
        <Route path="/explore" component={ExplorePage} />
        <Route path="/sign_up" component={SignUpForm} />
        <Route path="/login" component={LogInForm} />
      </Switch>
    </div>
  );
}

export default App;
