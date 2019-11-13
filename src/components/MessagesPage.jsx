import React, { Component } from "react";
import { connect } from "react-redux";
import RelationshipsList from "./RelationshipsList";
import { fetchCurrentUser, setShowRelationship } from "../store/actions/users";
import MessagesShow from "./MessagesShow";
import { Grid } from "semantic-ui-react";

class MessagesPage extends Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  selectRelationship = relationship => {
    this.props.setShowRelationship(relationship)
  };

  render() {
    return (
      <Grid className="ui main">
        <Grid.Column width={5}>
          <RelationshipsList
            selectRelationship={this.selectRelationship}
            activeRelationship={this.props.showRelationship}
          />
        </Grid.Column>
        <Grid.Column width={11}>
          {this.props.showRelationship ? (
            <MessagesShow
              currentUser={this.props.user}
              showRelationship={this.props.showRelationship}
              messages={this.props.showRelationship.messages}
              matchedUser={this.props.showRelationship.receiver == this.props.user ? this.props.showRelationship.requester : this.props.showRelationship.receiver}
            />
          ) : (
            <h2>No Relationship selected</h2>
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { getCurrentUser: () => dispatch(fetchCurrentUser()),
  setShowRelationship: (relationship) => dispatch(setShowRelationship(relationship)) };
};

const mapStateToProps = state => {
  return {
    relationships: state.User.relationships,
    user: state.User.current_user,
    showRelationship: state.User.showRelationship
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesPage);
