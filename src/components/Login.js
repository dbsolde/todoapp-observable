import React, { Component } from 'react'

class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        const value = e.target.value
        const name = e.target.name
        this.setState({ [name]: value })
    }
    handleUserLogin = e => {
        e.preventDefault()
        // const { username, password } = this.state
        
    }
    render() {
        return (
            <div style={{width:500,margin:'30px auto'}}>
                <div style={{margin:'10px 0'}}>
                    <input 
                    type="text"
                    name="usernames"
                    onChange={this.handleChange}
                    placeholder="username"
                    style={{padding:'5px 10px',border:0}}/>
                </div>
                <div style={{margin:'10px 0'}}>
                    <input 
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    placeholder="password"
                    style={{padding:'5px 10px',border:0}}/>
                </div>
                <div>
                    <button onClick={this.handleUserLogin}>Login</button>
                </div>
            </div>
        )
    }
}

export default Login