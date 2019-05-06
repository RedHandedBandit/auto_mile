import React, { Component } from 'react';
import Billing from './Billing/Billing';
import Shipping from './Shipping/Shipping';
import { Route, Link } from 'react-router-dom';

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
                <Route path='/shipping' component={Shipping} />
                <Route path='/billing' component={Billing} />
            </div>
        )
    }
}

export default Wizard