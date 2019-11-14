import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { fetchCurrentUser } from '../store/actions/users'
import { connect } from 'react-redux'
import ActiveStorageProvider from "react-activestorage-provider";


const SIGN_UP = "http://localhost:3001/sign_up"
class SignUpForm extends Component {

    state = {
        email: "",
        display_name: "",
        age: 18,
        gender: "",
        bio: "",
        password: "",
        passwordConfirm: "",
        looking_for: "1111", //default to looking for everything
        zip_code: ""
    }

    handleSubmit = async (e) => {
        console.log('avatar files', e.target[6].files)
        const avatar = e.target[6].files[0]
        console.log('ava', avatar)
        const formData = new FormData()
        var user = {
          email: this.state.email
        }
        console.log('user', user)
        // formData.append('user', user)


        // formData.append("username", "Groucho");
        formData.append('email', this.state.email)
        formData.append('display_name', this.state.display_name)
        formData.append('gender', this.state.gender)
        formData.append('bio', this.state.bio)
        formData.append('age', this.state.age)
        formData.append('password', this.state.password)
        // formData.append('passwordConfirm', this.state.passwordConfirm)
        formData.append('looking_for', this.state.looking_for)
        formData.append('zip_code', this.state.zip_code)
        formData.append('avatar', avatar)
        console.log('formData', formData)
        /* const newUser = {...this.state, avatar: avatar}

        delete newUser.passwordConfirm
        console.log('check out this new user obje', newUser) */
        // const payload = {user: formData}
        // console.log('payload', payload)
        const req = {
            method: 'POST',
            body: formData
        }
        const resp = await fetch("http://localhost:3001/sign_up", req)
        const data = await resp.json()
        console.log(data, data.user, data.token)
        localStorage.setItem('token', data.token)
        this.props.getCurrentUser()
        this.props.history.push('/explore')
    }

    handleChange = (event) => {
        const name = event.target.name
        const input = event.target.value
        this.setState({
            [name]:input
        }, )
    }

    // validates 8 characters, 1 upper case, 1 lower case, 1 symbol in password
    validatePassword = () => {
       const regEx= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
       return regEx.test(this.state.password)
    }

    matchPasswords = () => {
        return this.state.password === this.state.passwordConfirm
    }

    render() {

        const passwordsMatch = this.state.password === this.state.passwordConfirm ? "Passwords match" : "Passwords MUST match"


        return <Form onSubmit={this.handleSubmit} onChange={this.handleChange} className="ui main" >
            <Form.Input label='Email' type='email'name="email"id="email-field" value={this.state.email} required/>
            <Form.Input label='Display Name' name="display_name" value={this.state.display_name} id='display-name-field'/>
            <Form.Input label='Age' name="age" min="18" id='age-field' value={this.state.age} type='number'/>
            <Form.Input label='Gender' name="gender" id='gender-field' value={this.state.gender}/>
            <Form.Input label='Zip Code' name="zip_code" id='zip-field' value={this.state.zip_code} />
            <Form.TextArea label="Bio" name="bio"id="bio-field" value={this.state.bio} required />
            <Form.Input type="file" label="Avatar" name="avatar" id="avatar" />

            <Form.Input label='Enter Password' name="password"type='password' id='password-field' value={this.state.password} required/>
            <Form.Input label={passwordsMatch} name="passwordConfirm"type='password' id='confirm-password-field' value={this.state.passwordConfirm} required/>
            <Button type='submit'>Submit</Button>
        </Form>
    }

}

const mapDispatchToProps = (dispatch) => {
        return { getCurrentUser: ()=> dispatch(fetchCurrentUser())}
}

export default connect(null, mapDispatchToProps)(SignUpForm)
