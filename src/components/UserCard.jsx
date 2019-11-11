import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const UserCard = ( {user, userShow} ) => (
  <Link to={'/' + user.id}>
    <Card className="ui link">
      <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' wrapped ui={false} />
      <Card.Content>
          <Card.Header>{user.display_name}</Card.Header>
        <Card.Meta>
          <span className='date'>age: {user.age}</span>
        </Card.Meta>
        <Card.Description>
          {user.bio}
        </Card.Description>
      </Card.Content>
    </Card>
  </Link>
)

export default UserCard
