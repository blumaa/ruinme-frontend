import React from 'react'
import { Grid, Item, Icon, Button } from "semantic-ui-react";
import { connect } from 'react-redux'
import { handlePendingRelationship } from '../store/actions/relationships'
import { Link } from 'react-router-dom'



const RelationshipRequestItem = (props) => {
  const handleAcceptClick = () => {
    props.pendingRelationship(props.relationship.relationship_id, 'accept')
  }
  const handleDeclineClick = () => {
    props.pendingRelationship(props.relationship.relationship_id, 'decline')
  }
  return(
        <Item>
            <Item.Content className="floated left">
              <Link to={'/profile/' + props.relationship.requester.id}>{props.relationship.requester.display_name} LOVES YOU SOOOOO MUCH</Link>
            </Item.Content>
            <Item.Content>
              <Button onClick={handleAcceptClick}>Accept</Button>
              <Button onClick={handleDeclineClick}>Decline</Button>
            </Item.Content>
        </Item>
      )
}

const mapDispatchToProps = dispatch => {
  return { pendingRelationship: (id, decision) => dispatch(handlePendingRelationship(id, decision)) };
};


export default connect(null, mapDispatchToProps)(RelationshipRequestItem);
