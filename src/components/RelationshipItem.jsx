import React, { Component } from "react";
import { Item } from "semantic-ui-react";

const RelationshipItem = ({ user, relationship, selectRelationship }) => {
  const handleClick = event => {
    selectRelationship(relationship);
  };

  const otherUser =
    relationship.receiver.id == user.id
      ? relationship.requester
      : relationship.receiver;
  return (
    <Item onClick={handleClick}>
      <Item.Content>
        <Item.Header as="h3">{otherUser.display_name} </Item.Header>
        <Item.Meta>
          <span>Matched on: {relationship.created_at}</span>
        </Item.Meta>
        <Item.Description>{otherUser.bio}</Item.Description>
      </Item.Content>
    </Item>
  );
};

export default RelationshipItem;
