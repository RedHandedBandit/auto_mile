import React, {Component} from 'react';
import {injectStripe} from 'react-stripe-elements';
import CardSection from './CardSection/CardSection';

class InjectedCheckoutForm extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    handleSubmit = (ev) => {
        // const { data } = this.props.stripe.handleCardPayment
        // ev.preventDefault()

        // this.props.stripe 
        //     .createPaymentMethod('card', {billing_details: {name: 'Jackson Tanner'}})
        //     .then(({paymentMethod}) => {
        //         console.log('Received Stripe PaymentMethod: ', paymentMethod)
        //     })
        // this.props.stripe.handleCardPayment('{PAYMENT_INTENT_CLIENT_SECTRET}', data)

        // this.props.stripe.createToken({ type: 'card', name: 'Jackson Tanner' })

        // this.props.stripe.createSource({type: 'card', 
        //     owner: {
        //         name: 'Jackson Tanner',
        //     },
        // });
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <CardSection /> */}
                <button> complete order stripe </button>
            </form>
        )
    }
}

export default injectStripe(InjectedCheckoutForm)