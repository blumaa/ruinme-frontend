import React, { Component } from "react";
import { Header, Image, Container, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class ProfilePage extends Component {
  state = {
    activeItem: "info",
    id: null
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { display_name, age, gender, bio } = this.props.user;
    const { handleBackButton, id } = this.props;
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
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  let id = ownProps.match.params.user_id;
  return {
    user: state.User.all.find(user => {
      return user.id === parseInt(id);
    })
  };
};

export default connect(mapStateToProps)(ProfilePage);
