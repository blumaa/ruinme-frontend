import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

const LOGIN = "http://localhost:3001/login"

export default class LogInForm extends Component {


    state = {
        email: "",
        password: ""
    }


    handleSubmit = async () => {
        
        const userCreds = this.state
        const payload = JSON.stringify({user: userCreds})
        const req = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: payload
        }
        console.log(userCreds)
        const resp = await fetch(LOGIN, req)
        const data = await resp.json()
        console.log(data, data.user, data.token)
        localStorage.setItem('token', data.token)
        
    }

    handleChange = (event) => {
        const name = event.target.name
        const input = event.target.value
        this.setState({
            [name]:input
        }, )
    }

   
    render() {

        const passwordsMatch = this.state.password === this.state.passwordConfirm ? "Passwords match" : "Passwords MUST match"


        return <Form onSubmit={this.handleSubmit} onChange={this.handleChange} >
            <Form.Input label='Email' type='email'name="email"id="email-field" required/>
            <Form.Input label='Enter Password' name="password"type='password' id='password-field' required/>
            <Button type='submit'>Submit</Button>
        </Form>
    }

}