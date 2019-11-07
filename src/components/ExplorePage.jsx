import React, {Component} from 'react';
import { Card } from 'semantic-ui-react'
import UserCard from './UserCard'

const USER_API = 'http://localhost:3001/users'

export default class ExplorePage extends Component {

  state = {
    users: []
  }

  async componentDidMount() {
    let resp = await fetch(USER_API)
    let userData = await resp.json()
    console.log(userData)
    this.setState({
      users: [...userData.data]
    }, ()=>console.log(this.state))
  }

  render() {

    let userCards = this.state.users.map(user=> <UserCard key={user.id} user={user} />)

    return (
      <Card.Group>
        {userCards}
      </Card.Group>
    )
  }

}
