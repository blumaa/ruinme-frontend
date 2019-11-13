import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";
import { connect } from 'react-redux'
import { postMessage } from '../store/actions/messages'

class SendMessageInput extends Component {
  state= {
    content: ""
  }

  handleChange = (event) => {
    this.setState({content: event.target.value})
    console.log(this.state)
  }

  render() {
    return(
      <Input
        onChange={this.handleChange}
        action={
          <Button onClick={() => this.props.sendMessage(this.state.content, this.props.id)}>Send</Button>
        }
        placeholder="Your message..."
        className="row"
        style={{ position: "fixed", bottom: "10px" }}
      />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { sendMessage: (content, id) => dispatch( postMessage(content, id)) };
};



export default connect(null, mapDispatchToProps)(SendMessageInput);
