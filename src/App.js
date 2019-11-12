import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom'
import style from './index.css'
import ExplorePage from './components/ExplorePage'
import SignUpForm from './components/SignUpForm'
import LogInForm from './components/LogInForm';
import ProfilePage from "./components/ProfilePage";
import MessagesPage from './components/MessagesPage';
import NavBar from './components/Navbar'
import { connect } from 'react-redux'
import { fetchCurrentUser } from './store/actions/users'


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
  return (
    <div className="App" style={style}>
      <NavBar currentUser={this.props.currentUser}/>
      <Switch>
        <Route exact path="/" component={ExplorePage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/sign_up" component={SignUpForm} />
        <Route path="/login" component={LogInForm} />
        <Route path='/messages' component={MessagesPage} />
        <Route exact path="/profile/:user_id" component={ProfilePage} />
      </Switch>
    </div>
  );}
}
const mapDispatchToProps = (dispatch) => {
  return { getCurrentUser: ()=> dispatch(fetchCurrentUser())}
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.User.current_user
  };
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);
