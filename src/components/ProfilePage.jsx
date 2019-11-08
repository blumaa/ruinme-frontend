import React, { Component } from 'react'
import { Header, Image, Container, Button } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'info' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    console.log('user', this.props.user)
    const { display_name, age, gender, bio } = this.props.user
    return (
      <div>
        <Container text>
          <Header as='h2'>{display_name}</Header>

          <Image align='right' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='medium' circular />
          <Header as='h4'>Age: {age}</Header>
          <Header as='h4'>Gender: {gender}</Header>
          <Header as='h4'>Bio:</Header>
          <p>
            {bio}
          </p>
          <button class="ui button" onClick={(event)=> this.props.handleBackButton(event)}> Back</button>
        </Container>

      </div>

    )
  }
}
