import React, { createRef } from 'react'
import { Comment, Input, Sticky, Menu } from 'semantic-ui-react' 

const MessagesShow = ({messages, currentUser, matchedUser}) => {

const messageComments = messages.map(message=>{
    const author = message.sender_id === currentUser.id ? currentUser : matchedUser
    return <Comment key={message.id}>
    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
    <Comment.Content>
      <Comment.Author>{author.display_name}</Comment.Author>
      <Comment.Metadata>
        <div>{message.created_at}</div>
      </Comment.Metadata>
      <Comment.Text>{message.content}</Comment.Text>
      <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
}) 

const contextRef = createRef()
    return (
        <div className="messageShow grid" ref={contextRef} > 
            <Comment.Group className="row">
                {messageComments}
            </Comment.Group>
                        <Input  action='Send' placeholder='Your message...' className="row" style={{position:'fixed', bottom:'10px'}} />
        </div>
    )
}

export default MessagesShow