import React from 'react';

const AdminCustomerInfo = (props) => (
    <div className="customerInfo_div">
        <label>
            <span className="title_span"> Name: </span>
            <span className="info_span"> { props.firstname } { props.lastname } </span>
        </label>
        <label> 
            <span className="title_span"> Company: </span>
            <span className="info_span"> { props.company } </span>
        </label>
        <label> 
            <span className="title_span"> Home Phone: </span>
            <span className="info_span"> { props.homePhone } </span>
        </label>
        <label>
            <span className="title_span"> Mobile Phone: </span>
            <span className="info_span"> { props.mobilePhone } </span>
        </label>
        <label>
            <span className="title_span"> Email: </span>
            <span className="info_span"> { props.email } </span>
        </label>
        <label>
            <span className="title_span"> Home Address: </span>
            <span className="info_span"> { props.address } </span>
        </label>
        <label>
            <span className="title_span"> City: </span>
            <span className="info_span"> { props.city } </span>
        </label>
        <label>
            <span className="title_span"> State: </span>
            <span className="info_span"> { props.state } </span>
        </label>
        <label>
            <span className="title_span"> Zipcode: </span>
            <span className="info_span"> { props.zipcode } </span>
        </label>
        <label>
            <span className="title_span"> Country: </span>
            <span className="info_span"> { props.country } </span>
        </label>
        <button onClick={() => props.deleteCustomer(props.id)} > Delete </button>
    </div>
)

export default AdminCustomerInfo