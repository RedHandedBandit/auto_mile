import React, { Component } from 'react';
import axios from 'axios';
import AdminCustomerInfo from './AdminCustomerInfo/AdminCustomerInfo';

class Admin extends Component {
    constructor(){
        super()
        this.state = {
            customerList: [{}],
            selectedIndex: 0
        }
    }

    componentDidMount = () => {
        axios.get('/api/customers').then( res => {
            this.setState({
                customerList: res.data
            })
        })
    }

    selectedCustomer = (id) => {
        // const { customer_id } = this.state.customerList[0]
        console.log('show me the money',id)
        this.setState({
            selectedIndex: id
        })
    }

    deleteCustomerInfo = (id) => {
        axios.delete(`/api/delete/${id}`).then( res => {
            this.componentDidMount(res.data)
            this.setState({
                selectedIndex: 0
            })
        })
    }

    render(){
        console.log(this.state.customerList)
        const { selectedIndex } = this.state
        const allCustomerNames = this.state.customerList.map((el, i) => {
            return (
                <div key={i} className="mapped_div" >
                    <span 
                        className="list_name"
                        onClick={() => this.selectedCustomer(i)} >
                             {el.firstname} {el.lastname} 
                    </span>
                </div>
            )
        })
        return (
            <div className="admin_div">
            <h1> Customer Information </h1>
                <div className="theNameDiv">{allCustomerNames}</div>
                    <AdminCustomerInfo 
                        firstname={this.state.customerList[selectedIndex].firstname} 
                        lastname={this.state.customerList[selectedIndex].lastname} 
                        address={this.state.customerList[selectedIndex].address} 
                        city={this.state.customerList[selectedIndex].city} 
                        state={this.state.customerList[selectedIndex].state} 
                        zipcode={this.state.customerList[selectedIndex].zipcode} 
                        country={this.state.customerList[selectedIndex].country} 
                        email={this.state.customerList[selectedIndex].email} 
                        homePhone={this.state.customerList[selectedIndex].home_phone} 
                        mobilePhone={this.state.customerList[selectedIndex].mobile_phone} 
                        company={this.state.customerList[selectedIndex].company} 
                        deleteCustomer={this.deleteCustomerInfo}
                        id={this.state.customerList[selectedIndex].customer_id}
                    />
            </div>
        )
    }
}

export default Admin