import React, { Component } from "react";
import { Header, Image, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchReviews, fetchCurrentUser } from "../store/actions/users";
import ProfilePage from "./ProfilePage";

class MyProfilePage extends Component {
  componentDidMount = () => {
    /*this.props.getReviews(); */
  };

  render() {
    return (
      <div className="ProfilePage">
        <ProfilePage user={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.User.current_user,
    relationships: state.User.relationships
  };
};

const mapDispatchToProps = dispatch => {
  return { getCurrentUser: () => dispatch(fetchCurrentUser()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyProfilePage);
