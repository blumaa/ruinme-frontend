import React, { Component } from "react";
import RelationshipItem from "./RelationshipItem";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { fetchCurrentUser } from '../store/actions/users'

class RelationshipList extends Component {


  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
  let relationshipsItems;

  if (this.props.relationships) {
    relationshipsItems = this.props.relationships.map(relationship => {
      return (
        <Menu.Item
          key={relationship.relationship_id}
          active={this.props.activeRelationship === relationship}
        >
          <RelationshipItem
            user={this.props.user}
            relationship={relationship}
            selectRelationship={this.props.selectRelationship}
          />
        </Menu.Item>
      );
    });
  }

  return (
    <Menu fluid vertical tabular>
      {relationshipsItems || "No relationships found"}
    </Menu>
  );
}

}

const mapStateToProps = state => {
  if (state.User.relationships) {
  const relationships = state.User.relationships.filter(rel=> !rel.pending)
  return {
    relationships,
    user: state.User.current_user
  } }
  return {};
};

const mapDispatchToProps = dispatch => {
  return { getCurrentUser: () => dispatch(fetchCurrentUser()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(RelationshipList);
