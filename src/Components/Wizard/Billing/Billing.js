import React, { Component } from 'react';
import { connect } from 'react-redux';
import { billingInfo } from './../../../ducks/reducers/customerReducer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import swal from 'sweetalert';
require('dotenv').config()



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

    onToken = async (token) => {
       await fetch('/save-stripe-token', {
          method: 'POST',
          body: JSON.stringify(token),
        }).then(response => {
            console.log(11111111,response.email)
        swal('Transation Complete!', '', 'success')
        });
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
        console.log('does add new customer even fire?', this.props)
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
            // card: this.state.cardNumber,
            // expire: this.state.expire,
            // code: this.state.code
        }
        console.log('newCustomer', newCustomer)
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
                        <div> Card Details </div>
                        <StripeCheckout
                            token={this.onToken}
                            stripeKey='pk_test_mYd6jOwkm5YVyrT7OYwORmqo'
                        />
                    <div>
                        <Link to="/wizard/shipping"> 
                            <button onClick={() => this.addBillingInfo()}> previous </button>
                        </Link>
                        <Link to='/wizard/completePurchase' > 
                            <button onClick={() => this.addNewCustomer()}> Complete Order </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const {
        firstname, lastname, company, homePhone, mobilePhone, email, hAddy, hCity, hState, hZipCode, hCountry, bAddy, bCity, bState, bZipCode, bCountry, cardNumber, expire, code
     } = reduxState.customer
    return {
        firstname, lastname, company, homePhone, mobilePhone, email, hAddy, hCity, hState, hZipCode, hCountry, bAddy, bCity, bState, bZipCode, bCountry, cardNumber, expire, code
    }
}

const dispatchStateToProps = {
    billingInfo
}

export default connect(mapStateToProps, dispatchStateToProps)(Billing)