import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            employeeInfo: []
        }
    }

    componentDidMount = () => {
        axios.get('/auth/employeeInfo').then( res => {
            this.setState({
                employeeInfo: res.data
            })
            // console.log(this.state)
        })
    }

    render(){
        const allEmployeeInfo = this.state.employeeInfo.map((el, i) => {
            return (
                <div key={i}>
                    <div>
                        <img src={el.image} alt="profile Pic" />
                        <button> edit profile picture </button>
                    </div>
                    <div>
                    <label>
                        <h4> first name </h4>
                        <div> {el.firstname} </div>
                    </label>
                    <label>
                        <h4> last name </h4>
                        <div> {el.lastname} </div>
                    </label>
                    <label>
                        <h4> username </h4>
                        <div> {el.username} </div>
                    </label>
                    <label>
                        <h4> email </h4>
                        <div> {el.email} </div>
                    </label>
                    <label>
                        <h4> password </h4>
                        <div> unavailable </div>
                    </label>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div> {allEmployeeInfo} </div>
                <div>
                    <Link to="/editProfile"> 
                        <button> edit profile </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Profile