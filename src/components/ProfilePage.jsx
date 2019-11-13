import React, { Component } from "react";
import { Header, Image, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import MatchButton from "./MatchButton";
import { fetchProfile, emptyProfile } from "../store/actions/users";

class ProfilePage extends Component {
  state = {
    activeItem: "info",
    id: null
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount = () => {
    if (this.props.match) {
      this.props.getProfile(this.props.match.params.user_id);
    }

  };

  componentWillUnmount() {
    this.props.clearProfile()
  }


  render() {
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
            <MatchButton id={this}/>
          </Container>
        </div>
      );
    } else {
      return <div className="ui main">No user found</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.User.profile || state.User.current_user
  return ({
    user
    })
  };

const mapDispatchToProps = (dispatch, ownProps) => {
  return { getProfile: id => dispatch(fetchProfile(id)),
      clearProfile: () => dispatch(emptyProfile())
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
