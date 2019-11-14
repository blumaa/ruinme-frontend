import React, { Component } from "react";
import { Header, Image, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import MatchButton from "./MatchButton";
import { fetchProfile, emptyProfile } from "../store/actions/users";
import ReviewCreateModal from './ReviewCreateModal'

class ProfilePage extends Component {
  state = {
    activeItem: "info",
    id: null
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount = () => {
    console.log(this.props.match)
    if (this.props.match) {
      this.props.getProfile(this.props.match.params.user_id);
    }

  };

  componentWillUnmount() {
    this.props.clearProfile()
  }


  render() {
    if (!!this.props.user) {
      const { display_name, age, gender, bio, img_url } = this.props.user;
      console.log('looooke heree', this.props.user)
      return (
        <div className="ui item">
          <Container text>
            <Header as="h2">{display_name}</Header>

            <Image
              align="right"
              src={img_url}
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
            <MatchButton id={this.props.user.id}/>
            <ReviewCreateModal user={this.props.user}/>
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
