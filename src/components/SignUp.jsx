import React, { Component } from "react";
import { addUser } from "../store/actions/users";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import { Button, TextArea, Checkbox, Form, Segment } from "semantic-ui-react";

class SignUp extends Component {
  state = {
    email: "",
    displayName: "",
    age: "",
    gender: "",
    lookingFor: "0101",
    zipCode: "",
    bio: ""
  };

  handleChange = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      email: "",
      displayName: "",
      age: "",
      gender: "",
      lookingFor: "0101",
      zipCode: "",
      bio: ""
    });
  };

  render() {
    return (
      <Segment inverted>
        <Form inverted onSubmit={this.handleSubmit} className="ui main" action='/explore'>
            <Form.Field>
              <Form.Input
                label="Email"
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                width={4}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Display Name"
                name="displayName"
                type="text"
                value={this.state.displayName}
                onChange={this.handleChange}
                width={4}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Age"
                name="age"
                type="number"
                value={this.state.age}
                onChange={this.handleChange}
                width={1}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Gender"
                name="gender"
                type="text"
                value={this.state.gender}
                onChange={this.handleChange}
                width={1}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Zip Code"
                name="zipCode"
                type="text"
                value={this.state.zipCode}
                onChange={this.handleChange}
                width={5}
              />
            </Form.Field>
            <Form.TextArea
              id='form-textarea-control-opinion'
              label='Bio'
              name='bio'
              placeholder='Bio'
              value={this.state.bio}
              onChange={this.handleChange}
              width={5}
            />
            <Button type="submit" className="olive">
              <span>Submit</span>
            </Button>
        </Form>
      </Segment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: formData => {
      dispatch(addUser(formData));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
