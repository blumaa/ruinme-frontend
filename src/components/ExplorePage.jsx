import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import UserCard from "./UserCard";
import ProfilePage from "./ProfilePage";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchUsers } from "../store/actions/fetchUsers";

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

  handleBackButton = event => {
    this.setState({ userShow: [] });
  };

  render() {
    const { users } = this.props;
    let userCards = users.data
      ? users.data.map(user => (
          <UserCard key={user.id} user={user} userShow={this.userShow} />
        ))
      : "no users";

    return (
      <div className="ui main">
        {this.state.userShow.id ? (
          <ProfilePage user={this.state.userShow} />
        ) : (
          <Card.Group itemsPerRow={6}> {userCards} </Card.Group>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = dispatch => {
  return { getUsers: () => dispatch(fetchUsers()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExplorePage);
