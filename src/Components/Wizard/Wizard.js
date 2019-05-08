import React, { Component } from 'react';
import Billing from './Billing/Billing';
import Shipping from './Shipping/Shipping';
import { Route, Link } from 'react-router-dom';
import Personal from './Personal/Personal';

class Wizard extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return (
            <div>
                I am Wizard
                <Route path='/wizard/personal' component={Personal} />
                <Route path='/wizard/shipping' component={Shipping} />
                <Route path='/wizard/billing' component={Billing} />
            </div>
        )
    }
}

export default Wizard