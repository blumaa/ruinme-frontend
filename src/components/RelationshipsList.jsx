import React, { Component } from "react";
import RelationshipItem from "./RelationshipItem";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";

const RelationshipList = props => {
  let relationshipsItems;

  if (props.relationships) {
    relationshipsItems = props.relationships.map(relationship => {
      return (
        <Menu.Item
          key={relationship.relationship_id}
          active={props.activeRelationship === relationship}
        >
          <RelationshipItem
            user={props.user}
            relationship={relationship}
            selectRelationship={props.selectRelationship}
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
};

const mapStateToProps = state => {
  return {
    relationships: state.User.relationships,
    user: state.User.current_user
  };
};

export default connect(mapStateToProps)(RelationshipList);
