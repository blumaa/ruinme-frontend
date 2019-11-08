import React, {Component} from 'react';
import { Card } from 'semantic-ui-react'
import UserCard from './UserCard'
import ProfielPage from './ProfilePage'

const USER_API = 'http://localhost:3001/users'

export default class ExplorePage extends Component {

  state = {
    users: [],
    userShow: []
  }

  async componentDidMount() {
    let resp = await fetch(USER_API)
    let userData = await resp.json()
    console.log(userData)
    this.setState({
      users: [...userData.data]
    }, ()=>console.log(this.state))
  }

  userShow = (user) => {
    console.log(user)
    this.setState({userShow: [user]})
  }

  handleBackButton = (event) => {
    console.log(event)
    this.setState({userShow: []})
  }

  render() {

    let userCards = this.state.users.map(user=> <UserCard key={user.id} user={user} userShow={this.userShow}/>)

    return (
      <div>
        {this.state.userShow.length > 0 ? <ProfielPage user={this.state.userShow[0]} handleBackButton={this.handleBackButton} /> : <Card.Group> {userCards} </Card.Group> }
      </div>
    )
  }

}
