import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

const SIGN_UP = "http://localhost:3001/users"

export default class SignUpForm extends Component {


    state = {
        email: "",
        display_name: "",
        age: 0,
        password: "",
        passwordConfirm: "",
        looking_for: "1111", //default to looking for everything
        zip_code: ""
    }


    handleSubmit = async () => {

        const newUser = this.state
        delete newUser.passwordConfirm
        console.log(newUser)
        const payload = JSON.stringify({user: newUser})
        const req = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        }
        console.log(newUser)
        const resp = await fetch(SIGN_UP, req)
        const data = await resp.json()
        console.log(data, data.user, data.token)
        localStorage.setItem('token', data.token)
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
            <Form.Input label='Email' type='email'name="email"id="email-field" required/>
            <Form.Input label='Display Name' name="display_name"id='display-name-field'/>
            <Form.Input label='Age' name="age" min="18" id='age-field' type='number'/>
            <Form.Input label='Gender' name="gender" id='gender-field'/>
            <Form.Input label='Zip Code' name="zip_code" id='zip-field' />
            <Form.TextArea label="Bio" name="bio"id="bio-field" required/>

            <Form.Input label='Enter Password' name="password"type='password' id='password-field' required/>
            <Form.Input label={passwordsMatch} name="passwordConfirm"type='password' id='confirm-password-field' required/>
            <Button type='submit'>Submit</Button>
        </Form>
    }

}
