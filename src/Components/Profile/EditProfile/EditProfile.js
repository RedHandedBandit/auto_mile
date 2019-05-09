import React, {Component} from 'react';
import axios from 'axios';

class EditProfile extends Component {
    constructor(props) {
        super(props)
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
        return (
            <div>
                I am EditProfile
                <div>
                    <label>
                        <span> first name </span>
                        <input />
                    </label>
                    <label>
                        <span> last name </span>
                        <input />
                    </label>
                    <label>
                        <span> username </span>
                        <input />
                    </label>
                    <label>
                        <span> email </span>
                        <input />
                    </label>
                    <label>
                        <span> password </span>
                        <input />
                    </label>
                </div>
            </div>
        )
    }
}

export default EditProfile