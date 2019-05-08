import React, { Component } from 'react';
import { connect } from 'react-redux';
import { personalInfo } from './../../../ducks/reducers/customerReducer';
import { Link } from 'react-router-dom';

class Personal extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            company: '',
            email: '',
            homePhone: '',
            mobilePhone: ''
        }
    }

    handleInputChange = (prop, val) => {
        this.setState({
            [prop]: val
        })
    }

    cancelBtn = () => {
        this.setState({
            firstname: '',
            lastname: '',
            company: '',
            email: '',
            homePhone: '',
            mobilePhone: ''
        })
    }
    
    addPersonalInfo = () => {
        const { firstname, lastname, company, email, homePhone, mobilePhone } = this.state
        this.props.personalInfo({firstname, lastname, company, email, homePhone, mobilePhone})
    }

    render(){
        return (
            <div>
                <label>
                    <h3> first name </h3>
                    <input
                        onChange={(e) => this.handleInputChange('firstname', e.target.value)}
                        type="text"
                        value={this.state.firstname} />
                </label>
                <label>
                    <h3> last name </h3>
                    <input
                        onChange={(e) => this.handleInputChange('lastname', e.target.value)}
                        type="text"
                        value={this.state.lastname} />
                </label>
                <label>
                    <h3> company </h3>
                    <input
                        onChange={(e) => this.handleInputChange('company', e.target.value)}
                        type="text"
                        value={this.state.company} />
                </label>
                <label>
                    <h3> email </h3>
                    <input
                        onChange={(e) => this.handleInputChange('email', e.target.value)}
                        type="text"
                        value={this.state.email} />
                </label>
                <label>
                    <h3> home phone </h3>
                    <input
                        onChange={(e) => this.handleInputChange('homePhone', e.target.value)}
                        type="text"
                        value={this.state.homePhone} />
                </label>
                <label>
                    <h3> mobile phone </h3>
                    <input
                        onChange={(e) => this.handleInputChange('mobilePhone', e.target.value)}
                        type="text"
                        value={this.state.mobilePhone} />
                </label>
                <div> 
                    <button onClick={() => this.cancelBtn()}> cancel </button>
                    <Link to='/wizard/shipping'> 
                        <button onClick={() => this.addPersonalInfo()} > next </button>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const {firstname, lastname, company, email, homePhone, mobilePhone } = reduxState
    return { firstname, lastname, company, email, homePhone, mobilePhone }
}

const dispatchToProps = {
    personalInfo
}

export default connect(mapStateToProps, dispatchToProps)(Personal)