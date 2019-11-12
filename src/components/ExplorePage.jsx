import React, {Component} from 'react';
import { Card, Header, Icon } from 'semantic-ui-react'
import UserCard from './UserCard'
import { connect } from "react-redux";
import { fetchUsers } from "../store/actions/users";
import SetsUserAuthState from '../HigherOrderConcerns/getAuthState'

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

  render() {

    if (this.props.userData) {
      const userCards = this.props.userData.map(user=> <UserCard key={user.id} user={user} />)
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
}

const mapStateToProps = state => {
  return {
    userData: state.User.all
  };
};

const mapDispatchToProps = dispatch => {
  return { getUsers: () => dispatch(fetchUsers()) };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExplorePage);
