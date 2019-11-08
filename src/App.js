import React from 'react';
import { Route, Switch} from 'react-router-dom'
import NavBar from './components/Navbar'
import style from './index.css'
import ExplorePage from './components/ExplorePage'
import ProfilePage from './components/ProfilePage'


function App() {
  return (
    <div className="App" style={style}>
      <Route path="/" component={NavBar} />
      <Switch>
        <Route path="/explore" component={ExplorePage} />
        <Route path="/Profile" component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
