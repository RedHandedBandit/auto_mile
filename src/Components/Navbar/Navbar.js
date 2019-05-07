import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { employee } from './../../ducks/reducer';
import axios from 'axios';

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    logout = () => {
        axios.get('/auth/logout')
        .then(res => {
            this.props.employee({})
            this.props.history.push('/')
        })
        .catch(error => console.log('did logout work',error))
    }

    render(){
        return (
            <div>
                <h1>
                    AutoMile
                </h1>
                <div>
                    <ul>
                        {this.props.username && <li> {this.props.username} </li>}
                        <Link to="/admin"> <li> view customers </li> </Link>
                        <Link to="/profile">  <li> edit profile </li> </Link>
                        <li onClick={() => this.logout()} > logout </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const { username, image } = reduxState
    return {
        username,
        image
    }
}

const dispatchToProps = {
    employee
}

export default withRouter(connect(mapStateToProps, dispatchToProps)(Navbar))