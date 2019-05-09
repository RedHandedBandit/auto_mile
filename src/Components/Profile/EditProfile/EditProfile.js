import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { employee } from './../../../ducks/reducers/reducer';
import { Link } from 'react-router-dom';

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
        console.log(this.props)
    }

    componentDidMount = async () => {
        const res = await axios.get('/auth/employeeInfo')
            this.setState({
                employeeInfo: res.data[0]
            })
            console.log(this.state)
        
    }

    handleInputChange = (prop, val) => {
        this.setState({
            [prop]: val
        })
        console.log(this.state)
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
            axios.put(`/auth/editEmployeeInfo/${id}`, newEmployeeInfo).then( res => {
                // res.sendStatus(200)
                this.props.history.push('/profile')
            })
        } else {
            alert('please make sure password is correct')
        }
    }

    render(){
        console.log(this.state.employeeInfo.login_id)
        return (
            <div>
                I am EditProfile
                <div>
                    <label>
                        <span> first name </span>
                        <input
                            onChange={(e) => this.handleInputChange('firstname', e.target.value)}
                            type="text"
                            value={this.state.firstname} />
                    </label>
                    <label>
                        <span> last name </span>
                        <input
                            onChange={(e) => this.handleInputChange('lastname', e.target.value)}
                            type="text"
                            value={this.state.lastname} />
                    </label>
                    <label>
                        <span> username </span>
                        <input 
                            onChange={(e) => this.handleInputChange('username', e.target.value)}
                            type="text"
                            value={this.state.username} />
                    </label>
                    <label>
                        <span> email </span>
                        <input
                            onChange={(e) => this.handleInputChange('email', e.target.value)}
                            type="text"
                            value={this.state.email} />
                    </label>
                    <label>
                        <span> new password </span>
                        <input
                            onChange={(e) => this.handleInputChange('newPassword', e.target.value)}
                            type="text"
                            value={this.state.newPassword} />
                    </label>
                    <label>
                        <span> confirm password </span>
                        <input
                            onChange={(e) => this.handleInputChange('comfirmedPassword', e.target.value)}
                            type="text"
                            value={this.state.comfirmedPassword} />
                    </label>
                    <div> 
                        <button onClick={() => this.saveChanges(this.state.employeeInfo.login_id)} > 
                            save changes
                        </button> 
                        <Link to="/profile" >
                            <button> cancel </button> 
                        </Link>
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