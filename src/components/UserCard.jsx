import React from 'react'
import { Card, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const UserCard = ( {user, userShow} ) => (
  <Link to={'/' + user.id}>
    <Card >
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
