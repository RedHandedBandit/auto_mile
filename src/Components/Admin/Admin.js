import React, { Component } from 'react';
import axios from 'axios';
import AdminCustomerInfo from './AdminCustomerInfo/AdminCustomerInfo';

class Admin extends Component {
    constructor(){
        super()
        this.state = {
            customerList: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/customers').then( res => {
            this.setState({
                customerList: res.data
            })
        })
        console.log(this.state)
    }

    render(){
        const fullCustomerList = this.state.customerList.map((el, i) => {
            return (
                <div>
                    <span> {el.firstname} {el.lastname} </span>
                    <AdminCustomerInfo />
                </div>
            )
        })
        return (
            <div>
                I am Admin
            </div>
        )
    }
}

export default Admin