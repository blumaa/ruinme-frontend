import React, { Component } from "react";
import { Header, Image, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import MatchButton from "./MatchButton";
import {fetchCurrentUser} from '../store/actions/users'


class MyProfilePage extends Component {

  componentDidMount = () => {
    if (localStorage.getItem("token")) {
        this.props.getCurrentUser()
    }
    else {
        this.props.history.push("/login")
    }
  };

  render() {
    console.log(this.props.user)
    console.log('relationships', this.props.relationships)
    const relationships = this.props.relationships ? this.props.relationships.map(relationship => relationship.relationship_id) : "no relationships"
    if (this.props.user) {
      const { display_name, age, gender, bio } = this.props.user;
      return (
        <div className="ui item">
          <Container text>
            <Header as="h2">{display_name}</Header>

            <Image
              align="right"
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              size="medium"
              circular
            />
            <Header as="h4">Age: {age}</Header>
            <Header as="h4">Gender: {gender}</Header>
            <Header as="h4">Bio:</Header>
            <p>{bio}</p>
            <NavLink to={"/"}>
              <button className="ui button"> Back</button>
            </NavLink>
            <MatchButton />
            <Header as="h4">{relationships}</Header>
          </Container>
        </div>
      );
    } else {
      return <div className="ui main">No user found</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.User.current_user,
    relationships: state.User.relationships
  };
};

const mapDispatchToProps = dispatch => {
    return { getCurrentUser: ()=> dispatch(fetchCurrentUser())}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyProfilePage);
