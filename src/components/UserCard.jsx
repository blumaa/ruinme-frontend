import React from 'react'
import { Card, Icon} from 'semantic-ui-react'

const UserCard = ( {user, userShow} ) => (
  <Card onClick={() => {userShow(user)}}>
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
)

export default UserCard
