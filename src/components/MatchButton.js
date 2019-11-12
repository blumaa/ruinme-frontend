import React from 'react'
import { Icon, Button } from "semantic-ui-react";
import { connect } from 'react-redux'
import { makeRelationship } from '../store/actions/relationships'



const MatchButton = (props) => {
  const handleClick = (e) => {
    props.requestRelationship(props.id)
  }
  return(
        <Button onClick={handleClick}><Icon name="heart" color="red" /></Button>
      )
}

const mapDispatchToProps = dispatch => {
  return { requestRelationship: (id) => dispatch(makeRelationship(id)) };
};


export default connect(null, mapDispatchToProps)(MatchButton);
