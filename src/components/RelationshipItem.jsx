import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'


const RelationshipItem = ({user, relationship, selectRelationship}) => {
    
    const handleClick = (event) => {
        selectRelationship(relationship)
    }

    return (<Item onClick={handleClick}> 
       <Item.Content>
        <Item.Header as='h3'>{relationship.user.display_name} </Item.Header>
        <Item.Meta>
          <span>Matched on: {relationship.created_at}</span>
        </Item.Meta>
        <Item.Description>{relationship.user.bio}</Item.Description>
      </Item.Content>
    </Item>) 
}



export default RelationshipItem