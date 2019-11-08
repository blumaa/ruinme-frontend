import React, {Component} from 'react';
import { Card } from 'semantic-ui-react'
import UserCard from './UserCard'
import ProfilePage from './ProfilePage'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


const USER_API = 'http://localhost:3001/users'

class ExplorePage extends Component {
  state = {
    userShow: {}
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

    const { users } = this.props

    let userCards = users.map(user=> <UserCard key={user.id} user={user} userShow={this.userShow}/>)

    return (
      <div>
        {this.state.userShow.id ?
            <ProfilePage user={this.state.userShow} />
          : <Card.Group> {userCards} </Card.Group> }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(ExplorePage)
