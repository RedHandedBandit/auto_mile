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
                    <div className="editPic_div">
                        <img src={el.image} alt="profile Pic" />
                        <button className="profilePic_btn"> edit profile picture </button>
                    </div>
                    <h1 className="profileInfo_h1"> Profile Information </h1> 
                    <div className="profileLabel_div">
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
                            <div> ********* </div>
                        </label>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div> {allEmployeeInfo} </div>
                <div className="editBtn_div">
                    <Link to="/editProfile"> 
                        <button className="editBtn_profile"> edit profile </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Profile