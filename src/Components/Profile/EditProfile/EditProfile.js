import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { employee } from './../../../ducks/reducers/reducer';
import { Link } from 'react-router-dom';
require('dotenv').config();

class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employeeInfo: [],
            firstname: this.props.firstname,
            lastname: this.props.lastname,
            username: this.props.username,
            email: this.props.email,
            newPassword: '',
            comfirmedPassword: ''
        }
        // console.log(this.props)
    }

    componentDidMount = async () => {
        const res = await axios.get(process.env.REACT_APP_EMPLOYEE_INFO)
            this.setState({
                employeeInfo: res.data[0]
            })
            // console.log(this.state)
        
    }

    handleInputChange = (prop, val) => {
        this.setState({
            [prop]: val
        })
        // console.log(this.state)
    }

    saveChanges = (id) => {
        const {firstname, lastname, username, email, newPassword, comfirmedPassword} = this.state

        const newEmployeeInfo = {
            firstname,
            lastname,
            username,
            email,
            newPassword
        }

        if(newPassword === comfirmedPassword){
            axios.put(process.env.REACT_APP_EDIT_EMPLOYEE_INFO, newEmployeeInfo).then( res => {
                // res.sendStatus(200)
                this.props.history.push('/profile')
            })
        } else {
            alert('please make sure password is correct')
        }
    }

    render(){
        // console.log(this.state.employeeInfo.login_id)
        return (
            <div className="editProfile_div">
                <div className="label_div">
                    <label>
                        <div> first name </div>
                        <input
                            onChange={(e) => this.handleInputChange('firstname', e.target.value)}
                            type="text"
                            value={this.state.firstname} />
                    </label>
                    <label>
                        <div> last name </div>
                        <input
                            onChange={(e) => this.handleInputChange('lastname', e.target.value)}
                            type="text"
                            value={this.state.lastname} />
                    </label>
                    <label>
                        <div> username </div>
                        <input 
                            onChange={(e) => this.handleInputChange('username', e.target.value)}
                            type="text"
                            value={this.state.username} />
                    </label>
                    <label>
                        <div> email </div>
                        <input
                            onChange={(e) => this.handleInputChange('email', e.target.value)}
                            type="text"
                            value={this.state.email} />
                    </label>
                    <label>
                        <div> new password </div>
                        <input
                            onChange={(e) => this.handleInputChange('newPassword', e.target.value)}
                            type="text"
                            value={this.state.newPassword} />
                    </label>
                    <label>
                        <div> confirm password </div>
                        <input
                            onChange={(e) => this.handleInputChange('comfirmedPassword', e.target.value)}
                            type="text"
                            value={this.state.comfirmedPassword} />
                    </label>
                    <div className="editProfileBtn_div"> 
                        <Link to="/profile" >
                            <button className="editProfileCancel_btn"> cancel </button> 
                        </Link>
                        <button
                            className="editProfileSave_btn"
                             onClick={() => this.saveChanges(this.state.employeeInfo.login_id)} > 
                            save
                        </button> 
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const { firstname, lastname, username, email, password } = reduxState.reducer
    return {firstname, lastname, username, email, password}
}

const dispatchToProps = {
    employee
}

export default connect(mapStateToProps, dispatchToProps)(EditProfile)