import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import MatchButton from './MatchButton'

const UserCard = ( {user} ) => (
    <Card className="ui raised link" >
      <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' wrapped ui={false} />
      <Card.Content as={ Link } to={'/profile/' + user.id}>
          <Card.Header>{user.display_name}</Card.Header>
        <Card.Meta>
          <span className='date'>age: {user.age}</span>
        </Card.Meta>
        <Card.Description>
          {user.bio}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <MatchButton id={user.id} />
      </Card.Content>
    </Card>

)

export default UserCard
