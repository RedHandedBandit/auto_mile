import React, { Component } from 'react';

class Register extends Component {
    constructor(){
        super()
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            email: '',
            phone: ''
        }
    }

    handleInputChange = (prop, val) => {
        this.setState({
            [prop]: val
        })
        console.log(this.state)
    }

    render(){
        return (
            <div>
                <div>
                    <h2> Register </h2>
                    <div>
                        <input
                            placeholder="First Name"
                            onChange={(e) => this.handleInputChange('firstname', e.target.value)}
                            type="text"
                            value={this.state.firstname} />
                        <input
                            placeholder="Last Name"
                            onChange={(e) => this.handleInputChange('lastname', e.target.value)}
                            type="text"
                            value={this.state.lastname} />
                        <input 
                            placeholder="phone #"
                            onChange={(e) => this.handleInputChange('phone', e.target.value)}
                            type="text"
                            value={this.state.phone} />
                        <input
                            placeholder="username"
                            onChange={(e) => this.handleInputChange('username', e.target.value)}
                            type="text"
                            value={this.state.username} />
                        <input
                            placeholder="email"
                            onChange={(e) => this.handleInputChange('email', e.target.value)}
                            type="text"
                            value={this.state.email} />
                        <input
                            placeholder="password"
                            onChange={(e) => this.handleInputChange('password', e.target.value)}
                            type="text"
                            value={this.state.password} />
                    </div>
                    <footer>
                        <button> Complete </button>
                        <button> Cancel </button>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Register