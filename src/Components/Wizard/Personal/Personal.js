import React, { Component } from 'react';
import { connect } from 'react-redux';
import { personalInfo } from './../../../ducks/reducers/customerReducer';
// import { Link } from 'react-router-dom';
import swal from 'sweetalert';

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
        console.log(firstname, lastname, company, email, homePhone, mobilePhone)
        console.log(this.state)
        if(firstname === '' && lastname === ''){
            return swal("Incomplete Form")
        }
        this.props.personalInfo({firstname, lastname, company, email, homePhone, mobilePhone})
        this.props.history.push('/wizard/shipping')
        this.setState({
            firstname: this.props.firstname,
            lastname: this.props.lastname,
            company: this.props.company,
            email: this.props.email,
            homePhone: this.props.homePhone,
            mobilePhone: this.props.mobilePhone
        })
    }

    render(){
        return (
            <div className="personal_div">
                <div className="allInfo_div"> 
                    <h1 className="personal_info_h1"> Personal Info</h1>
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
                    <div className="btn_div"> 
                        <button onClick={() => this.cancelBtn()}> cancel </button>
                        {/* <Link to='/wizard/shipping'>  */}
                            <button onClick={() => this.addPersonalInfo()} > next </button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const {firstname, lastname, company, email, homePhone, mobilePhone } = reduxState.customer
    return { firstname, lastname, company, email, homePhone, mobilePhone }
}

const dispatchToProps = {
    personalInfo
}

export default connect(mapStateToProps, dispatchToProps)(Personal)