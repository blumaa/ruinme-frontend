import React, {Component} from 'react';

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

    let userPs = this.state.users.map(user=> <p key={user.id}> {user.display_name} </p>)

    return (
      <div className="ExplorePage">
        {userPs}
      </div>
    )
  }

}
