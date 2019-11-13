import React, { Component } from "react";
import { Comment, Input } from "semantic-ui-react";
import SendMessageInput from "./SendMessageInput";

const MessagesShow = ({ messages, currentUser, showRelationship, matchedUser }) => {
  const messageComments = messages.map(message => {
    const author =
      message.sender_id === currentUser.id
        ? currentUser
        : showRelationship.receiver;
    return (
      <Comment key={message.id}>
        <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
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
    );
  });

  return (
    <div className="messageShow grid">
      <Comment.Group className="row">{messageComments}</Comment.Group>
      <SendMessageInput matchedUser={matchedUser} currentUser={currentUser} id={showRelationship.relationship_id}/>
    </div>
  );
};

export default MessagesShow;
