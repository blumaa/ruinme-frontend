import React, { Component } from "react";
import { Icon, Button, Modal, Header, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { makeReview } from '../store/actions/reviews'


class ReviewCreateModal extends Component {

  state = { modalOpen: false, comment: "" }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleSubmit=()=> {
    this.handleClose()
    const input = this.state
    delete input.modalOpen
    this.props.createReview(this.props.user.id, input)
    console.log("review sent")
    this.setState({comment: ""})
  }

  handleChange = (event) => {
      const name = event.target.name
      const input = event.target.value
      this.setState({
          [name]:input
      }, )
  }

  render() {
    return (

      <Modal
        trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="browser" content={"Your comment about " + this.props.user.display_name} />
        <Modal.Content>
          <Form onChange={this.handleChange} >
            <Form.TextArea name="comment" value={this.state.comment}/>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.handleSubmit} inverted>
            <Icon name="checkmark" /> Submit
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.User.current_user
  };
};

const mapDispatchToProps = dispatch => {
  return { createReview: (id, payload) => dispatch(makeReview(id, payload)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewCreateModal);
