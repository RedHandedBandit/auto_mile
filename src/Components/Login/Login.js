import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInputeChange(prop, val) {
        this.setState({
            [prop]: val
        })
        console.log(this.state)
    }

    render(){
        return (
            <div>
                <div className="login_info">
                    Login
                    <input 
                        placeholder="email"
                        onChange={(e) => this.handleInputeChange('email', e.target.value)}
                        type="text"
                        value={this.state.email} />
                    <input
                        placeholder="password"
                        onChange={(e) => this.handleInputeChange('password', e.target.value)}
                        type="text"
                        value={this.state.password} />
                    <div>
                        <Link to="/personal"> 
                            <button> Login </button>
                        </Link>
                        <Link to="/register">
                            <button> Register </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login