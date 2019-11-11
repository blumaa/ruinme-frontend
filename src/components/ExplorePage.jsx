import React, {Component} from 'react';
import { Card, Header, Icon } from 'semantic-ui-react'
import UserCard from './UserCard'

const USER_API = 'http://localhost:3001/users'

export default class ExplorePage extends Component {

  state = {
    users: []
  }

  async componentDidMount() {
    let resp = await fetch(USER_API, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    let userData = await resp.json()

    if (userData.data) {
    console.log(userData)
    this.setState({
      users: [...userData.data]
    }, ()=>console.log(this.state)) }
    else {

    }
  }

  render() {

  let userCards = this.state.users.map(user=> {
  
  return <UserCard key={user.data.id} user={user.data.attributes} />})

    if (this.state.users.length > 0) {
    return (
      <Card.Group>
        {userCards}
      </Card.Group>
    ) }

    else {
      return (
        <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Please Log In to start ruining everyone </Header.Content>
    </Header>
      )
    }
  }

}
