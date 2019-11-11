import React from 'react'
import { Card, Icon} from 'semantic-ui-react'

const UserCard = ( {user} ) => (
  <Card>
    <Card.Content>
      <Card.Header>{user.display_name}</Card.Header>
      <Card.Meta>
        <span className='date'>age: {user.age}</span>
      </Card.Meta>
      <Card.Description>
        {user.bio}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="heart" color="red" />
    </Card.Content>
  </Card>
)

export default UserCard
