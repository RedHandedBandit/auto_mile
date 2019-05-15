import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { employee } from './../../ducks/reducers/reducer';
import { connect } from 'react-redux';
import './Register.css'

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            email: '',
            phone: ''
        }
    }

    register = () => {
        const { firstname, lastname, username, email, password, phone} = this.state
        axios.post('/auth/register', { firstname, lastname, username, phone: +phone, email, password }).then( res => {
            this.props.employee(res.data)
            this.props.history.push('/personal')
            this.setState({
                firstname: '',
                lastname: '',
                username: '',
                password: '',
                email: '',
                phone: ''
            })
        })
        .catch(error => console.log(error))
    }

    handleInputChange = (prop, val) => {
        this.setState({
            [prop]: val
        })
    }

    render(){
        return (
            <div className="register_div">
                <div className="register_info">
                    <h2> Register </h2>
                    <div className="inputBox_div">
                        <section>
                            <div> first name </div>
                            <input
                                // placeholder="First Name"
                                onChange={(e) => this.handleInputChange('firstname', e.target.value)}
                                type="text"
                                value={this.state.firstname} />
                        </section>
                        <section>
                            <div> last name </div>
                            <input
                                // placeholder="Last Name"
                                onChange={(e) => this.handleInputChange('lastname', e.target.value)}
                                type="text"
                                value={this.state.lastname} />
                        </section>
                        <section>
                            <div> phone # </div>
                            <input 
                                // placeholder="phone #"
                                onChange={(e) => this.handleInputChange('phone', e.target.value)}
                                type="text"
                                value={this.state.phone} />
                        </section>
                        <section>
                            <div> username </div>
                            <input
                                // placeholder="username"
                                onChange={(e) => this.handleInputChange('username', e.target.value)}
                                type="text"
                                value={this.state.username} />
                        </section>
                        <section>
                            <div> email </div>
                            <input
                                // placeholder="email"
                                onChange={(e) => this.handleInputChange('email', e.target.value)}
                                type="text"
                                value={this.state.email} />
                        </section>
                        <section>
                            <div> password </div>
                            <input
                                // placeholder="password"
                                onChange={(e) => this.handleInputChange('password', e.target.value)}
                                type="text"
                                value={this.state.password} />
                        </section>
                    </div>
                    <footer className="btn_footer">
                        <button onClick={() => this.register()}> Complete </button>
                        <Link to="/" > <button className="cancel_register"> Cancel </button> </Link>
                    </footer>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState.reducer.username
}

const dispatchToProps = {
    employee
}

export default connect(mapStateToProps, dispatchToProps)(Register)