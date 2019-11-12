import React, { Component } from 'react'
import { connect } from 'react-redux'
import RelationshipsList from './RelationshipsList'
import { fetchCurrentUser } from '../store/actions/users'
import MessagesShow from './MessagesShow'
import { Grid } from 'semantic-ui-react'


class MessagesPage extends Component {

 state = {
     showRelationship: null
 }
    
componentDidMount() {
    this.props.getCurrentUser()
}

selectRelationship = (relationship) => {
this.setState({
showRelationship: relationship
})
}

render() {
    console.log(this.props)
    return (
        
        <Grid className="ui main">
        <Grid.Column width={5} >
        <RelationshipsList selectRelationship={this.selectRelationship} activeRelationship={this.state.showRelationship}/>
        </Grid.Column>
        <Grid.Column width={11}>
            {this.state.showRelationship ?
            <MessagesShow currentUser={this.props.user} matchedUser={this.state.showRelationship.user} messages={this.state.showRelationship.messages}/>
            :
            <h2>No Relationship selected</h2> }
        </Grid.Column>
        </Grid>
    ) }
}

const mapDispatchToProps = (dispatch) => {
    return { getCurrentUser: ()=> dispatch(fetchCurrentUser())}
}

const mapStateToProps = state => {
    return {
      relationships: state.User.relationships,
      user: state.User.current_user
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage)

