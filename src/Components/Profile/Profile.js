import React, { Component } from 'react';

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            employeeInfo: []
        }
    }

    render(){
        return (
            <div>
                <div> 
                    <img src="this.state.image" alt="profile Pic" />
                    <button> edit profile picture </button>
                </div>
                <div>
                    <label>
                        <h4> name </h4>
                        <div> this.state.name </div>
                    </label>
                    <label>
                        <h4> username </h4>
                        <div> this.state.username </div>
                    </label>
                    <label>
                        <h4> email </h4>
                        <div> this.state.email </div>
                    </label>
                    <label>
                        <h4> password </h4>
                        <div> this.state.password </div>
                    </label>
                </div>
                <div>
                    <button> edit </button>
                </div>
            </div>
        )
    }
}

export default Profile