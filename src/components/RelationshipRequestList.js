import React, { Component } from "react";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";
import RelationshipRequestItem from './RelationshipRequestItem'

const RelationshipRequestList = props => {
  let relationshipRequests;
  if (props.relationships) {
  console.log('prop relationships', props.relationships)

  const requests = props.relationships.filter(rel => {
    console.log(rel.pending)
    console.log(rel.receiver.id, props.user.id, rel.requester.id !== props.user.id)
    return rel.pending && rel.requester.id !== props.user.id
  })
  console.log(requests)
  relationshipRequests = requests.map(rel => {
    return <RelationshipRequestItem key={rel.relationship_id} relationship={rel}/>
  })
}
  return (
    <List className="ui main">
      {relationshipRequests || "No new requests"}
    </List>
  );
};

const mapStateToProps = state => {
  return {
    relationships: state.User.relationships,
    user: state.User.current_user
  };
};

export default connect(mapStateToProps)(RelationshipRequestList);
