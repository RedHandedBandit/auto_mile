import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {employee} from './../../ducks/reducer';
import {connect} from 'react-redux';
import './Login.css'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            loggedIn: false
        }
    }

    login = () => {
        const { email, password } = this.state
        axios.post('/auth/login', {email, password}).then( res => {
            this.props.employee(res.data)
            this.props.history.push('/personal')
            console.log('res.data login', res.data)
            this.setState({
                email: '',
                password: ''
            })
        })
        .catch(error => console.log(error))
    }

    handleInputeChange(prop, val) {
        this.setState({
            [prop]: val
        })
        console.log(this.state)
    }

    render(){
        return (
            <div className="background_login">
                <div className="background_overlay"> 
                    <div className="login_info">
                        <h1> Login </h1>
                        <div className="input_boxes"> 
                            <input 
                                placeholder="email"
                                onChange={(e) => this.handleInputeChange('email', e.target.value)}
                                type="text"
                                value={this.state.email} 
                                />
                            <input
                                placeholder="password"
                                onChange={(e) => this.handleInputeChange('password', e.target.value)}
                                type="text"
                                value={this.state.password} 
                                />
                        </div>
                        <div className="button_div">
                            <button onClick={() => this.login()} > Login </button>
                            <Link to="/register">
                                <button> Register </button>
                            </Link>
                        </div>
                    <span className="floating_span">  </span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState.username
}

const dispatchToProps = {
    employee
}

export default connect(mapStateToProps, dispatchToProps)(Login)