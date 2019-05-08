import React, { Component } from 'react';
import { connect } from 'react-redux';
import { billingInfo } from './../../../ducks/reducers/customerReducer';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Billing extends Component {
    constructor(props){
        super(props)
        this.state = {
            bAddy: '',
            bCity: '',
            bState: '',
            bZipCode: '',
            bCountry: '',
            cardNumber: '',
            expire: '',
            code: ''
        }
    }

    handleInputChange = (prop, val) => {
        this.setState({
            [prop]: val
        })
    }

    addBillingInfo = () => {
        const { bAddy, bCity, bState, bZipCode, bCountry, cardNumber, expire, code } = this.state
        this.props.billingInfo({ bAddy, bCity, bState, bZipCode, bCountry, cardNumber, expire, code })
    }

    addNewCustomer = () => {
        const newCustomer = {
            firstname: this.props.firstname,
            lastname: this.props.lastname,
            company: this.props.company,
            home_phone: +this.props.homePhone,
            mobile_phone: +this.props.mobilePhone,
            email: this.props.email,
            shipping_addy: this.props.hAddy,
            shipping_city: this.props.hCity,
            shipping_state: this.props.hState,
            shipping_zipcode: +this.props.hZipCode,
            shipping_country: this.props.hCountry,
            billing_addy: this.state.bAddy,
            billing_city: this.state.bCity,
            billing_state: this.state.bState,
            billing_zipcode: +this.state.bZipCode,
            billing_country: this.state.bCountry,
            card: +this.state.cardNumber,
            expire: +this.state.expire,
            code: +this.state.code
        }

        axios.post('/api/addCustomer', newCustomer).then( res => {
            console.log('did this work???', res)
        })
    }

    render(){
        return (
            <div>
                <div>
                    <h2> Billing </h2>
                    <label>
                        <span> billing address </span>
                        <input
                            onChange={(e) => this.handleInputChange('bAddy', e.target.value)}
                            type="text"
                            value={this.state.bAddy} />
                    </label>
                    <label>
                        <span> city </span>
                        <input
                            onChange={(e) => this.handleInputChange('bCity', e.target.value)}
                            type="text"
                            value={this.state.bCity} />
                    </label>
                    <label>
                        <span> state </span>
                        <input
                            onChange={(e) => this.handleInputChange('bState', e.target.value)}
                            type="text"
                            value={this.state.bState} />
                    </label>
                    <label>
                        <span> zipcode </span>
                        <input
                            onChange={(e) => this.handleInputChange('bZipCode', e.target.value)}
                            type="text"
                            value={this.state.bZipCode} />
                    </label>
                    <label>
                        <span> country </span>
                        <input
                            onChange={(e) => this.handleInputChange('bCountry', e.target.value)}
                            type="text"
                            value={this.state.bCountry} />
                    </label>
                    <label>
                        <span> card # </span>
                        <input
                            onChange={(e) => this.handleInputChange('cardNumber', e.target.value)}
                            type="text"
                            value={this.state.cardNumber} />
                    </label>
                    <label>
                        <span> expiration date </span>
                        <input
                            onChange={(e) => this.handleInputChange('expire', e.target.value)}
                            type="text"
                            value={this.state.expire} />
                    </label>
                    <label>
                        <span> ccv </span>
                        <input
                            onChange={(e) => this.handleInputChange('code', e.target.value)}
                            type="text"
                            value={this.state.code} />
                    </label>
                    <div>
                        <Link to="/wizard/shipping"> 
                            <button onClic={() => this.addBillingInfo()}> previous </button>
                        </Link>
                        <button> Complete Order </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const {
        firstname, lastname, company, homePhone, mobilePhone, email, hAddy, hCity, hState, hZipCode, hCountry, bAddy, bCity, bState, bZipCode, bCountry, cardNumber, expire, code
     } = reduxState
    return {
        firstname, lastname, company, homePhone, mobilePhone, email, hAddy, hCity, hState, hZipCode, hCountry, bAddy, bCity, bState, bZipCode, bCountry, cardNumber, expire, code
    }
}

const dispatchStateToProps = {
    billingInfo
}

export default connect(mapStateToProps, dispatchStateToProps)(Billing)