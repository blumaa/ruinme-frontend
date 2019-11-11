import React, {Component} from 'react';
import { Card, Header, Icon } from 'semantic-ui-react'
import UserCard from './UserCard'
import ProfilePage from "./ProfilePage";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchUsers } from "../store/actions/users";

class ExplorePage extends Component {
  state = {
    userShow: {}
  };

  componentDidMount = () => {
    this.props.getUsers();
  };

  userShow = user => {
    console.log(user);
    this.setState({ userShow: [user] });
  };


 /* state = {
    users: []
  }

  async componentDidMount() {
    let resp = await fetch(USER_API, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    let userData = await resp.json()

    if (userData.data) {
    console.log(userData)
    this.setState({
      users: [...userData.data]
    }, ()=>console.log(this.state)) }
    else {

    }
  } */
  /* let userCards = this.state.users.map(user=> {

  return <UserCard key={user.data.id} user={user.data.attributes} />}) */


  render() {
    const { users } = this.props;

    if (users.length > 0) {
    return (
      <Card.Group itemsPerRow={5} className="ui main">
        {userCards}
      </Card.Group>
    ) }

    else {
      return (
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>Please Log In to start ruining everyone </Header.Content>
        </Header>
      )
    }
}

const mapStateToProps = state => {
  return {
    users: state.users.users.data
  };
};

const mapDispatchToProps = dispatch => {
  return { getUsers: () => dispatch(fetchUsers()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExplorePage);
