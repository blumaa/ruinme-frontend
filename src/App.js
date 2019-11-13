import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom'
import style from './index.css'
import ExplorePage from './components/ExplorePage'
import SignUpForm from './components/SignUpForm'
import LogInForm from './components/LogInForm';
import ProfilePage from "./components/ProfilePage";
import MyProfile from "./components/MyProfile";
import MessagesPage from './components/MessagesPage';
import RelationshipRequestList from './components/RelationshipRequestList';
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
        <Route exact path="/explore" component={ExplorePage} />
        <Route exact path="/sign_up" component={SignUpForm} />
        <Route exact path="/login" component={LogInForm} />
        <Route exact path='/messages' component={MessagesPage} />
        <Route exact path='/requests' component={RelationshipRequestList} />
        <Route exact path="/users/:user_id" component={ProfilePage} />
        <Route exact path="/profile" component={MyProfile} />
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
