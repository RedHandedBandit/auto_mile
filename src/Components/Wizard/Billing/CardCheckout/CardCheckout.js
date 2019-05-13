import React, {Component} from 'react';
import { Elements } from 'react-stripe-elements';
import InjectedCheckoutForm from './InjectedCheckoutForm/InjectedCheckoutForm';

class CardCheckout extends Component {

    render(){
        
        return (
            <Elements>
                <InjectedCheckoutForm />
            </Elements>
        )
    }
}

export default CardCheckout