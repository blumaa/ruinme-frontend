import React from 'react'
import { Icon, Button } from "semantic-ui-react";
import { connect } from 'react-redux'
import { makeRelationship } from '../store/actions/relationships'



const MatchButton = (props) => {
  const handleClick = (e) => {
    if (props.id == props.user.id) {
      alert("You can't match yourself dummy, get outta here!")
    }
    else {
    props.requestRelationship(props.id) }
  }
  return(
        <Button onClick={handleClick}><Icon name="heart" color="red" /></Button>
      )
}

const mapStateToProps = state => {
  return {
    user: state.User.current_user
  };
};

const mapDispatchToProps = dispatch => {
  return { requestRelationship: (id) => dispatch(makeRelationship(id)) };
};


export default connect(mapStateToProps, mapDispatchToProps)(MatchButton);
