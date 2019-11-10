import React, { Component } from "react";
import { addUser } from "../store/actions/addUser";
import { connect } from "react-redux";



class SignUp extends Component {
  state = {
    email: "",
    displayName: "",
    age: "",
    gender: "",
    lookingFor: "0101",
    zipCode: "",
    bio: ""
  }

  handleChange = (e) => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addUser(this.state)
    this.setState({})
  }

  render() {
    return (
      <div>
        <form className="ui item" onSubmit={this.handleSubmit}>
          <p><label>Email</label></p>
          <p><input name="email" type="text" value={this.state.email} onChange={this.handleChange}></input></p>
          <p><label>Display Name</label></p>
          <p><input name="displayName" type="text" value={this.state.displayName} onChange={this.handleChange}></input></p>
          <p><label>Age</label></p>
          <p><input name="age" type="number" value={this.state.age} onChange={this.handleChange}></input></p>
          <p><label>Gender</label></p>
          <p><input name="gender" type="text" value={this.state.gender} onChange={this.handleChange}></input></p>
          <p><label>Zip Code</label></p>
          <p><input name="zipCode" type="text" value={this.state.zipCode} onChange={this.handleChange}></input></p>
          <p><label>Bio</label></p>
          <p><input name="bio" type="text" value={this.state.bio} onChange={this.handleChange}></input></p>
          <button>Sign Up</button>
        </form>
        {this.state.displayName}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: formData => {
      dispatch(addUser(formData))
    }
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
