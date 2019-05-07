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
                        <li className="dropdown">
                        <span className="fas fa-bars hamy"> </span>
                            <div className="dropdown-content">
                                {this.props.username && <span> {this.props.username} </span>}
                                <Link to="/personal"> <span> Home </span></Link>
                                <Link to="/admin"> <span> view customers </span> </Link>
                                <Link to="/profile">  <span> edit profile </span> </Link>
                                <span onClick={() => this.logout()} > logout </span>
                            </div>
                        </li>
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