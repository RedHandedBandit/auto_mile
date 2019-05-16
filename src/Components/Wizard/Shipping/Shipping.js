import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shippingInfo } from './../../../ducks/reducers/customerReducer';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


class Shipping extends Component {
    constructor(){
        super()
        this.state = {
            hAddy: '',
            hCity: '',
            hState: '',
            hZipCode: '',
            hCountry: ''
        }
    }

    handleInputChange = (prop, val) => {
        this.setState({
            [prop]: val
        })
    }

    addShippingInfo = () => {
        const { hAddy, hCity, hState, hZipCode, hCountry } = this.state
        if(hAddy === '' && hCity === '' && hState === '' && hZipCode === '' && hCountry === ''){
            return swal('incomplete Form')
        }
        this.props.shippingInfo({ hAddy, hCity, hState, hZipCode, hCountry })
        this.props.history.push('/wizard/billing')
    }

    render(){
        return (
            <div className="shipping_div">
                <h1 className="shipping_h1"> Shipping </h1>
                <div className="fullInfo_div">
                    <label className="shipping_label"> 
                        <span> shipping address </span>
                        <input
                            onChange={(e) => this.handleInputChange('hAddy', e.target.value)}
                            type='text'
                            value={this.state.hAddy} />
                    </label>
                    <label className="city_label"> 
                        <span> city </span>
                        <input
                            onChange={(e) => this.handleInputChange('hCity', e.target.value)}
                            type='text'
                            value={this.state.hCity} />
                    </label>
                    <label className="state_label"> 
                        <span> state </span>
                        <input
                            onChange={(e) => this.handleInputChange('hState', e.target.value)}
                            type='text'
                            value={this.state.hState} />
                    </label>
                    <label className="zip_label"> 
                        <span> zip code </span>
                        <input
                            onChange={(e) => this.handleInputChange('hZipCode', e.target.value)}
                            type='text'
                            value={this.state.hZipCode} />
                    </label>
                    <label className="country_label"> 
                        <span> country </span>
                        <input
                            onChange={(e) => this.handleInputChange('hCountry', e.target.value)}
                            type='text'
                            value={this.state.hCountry} />
                    </label>
                </div>
                <div className="btn_div">
                    <Link to="/wizard/personal"> 
                        <button onClick={() => this.addShippingInfo()} > 
                            <i className="fas fa-arrow-left"></i> 
                        </button> 
                    </Link>
                    {/* <Link to="/wizard/billing">  */}
                        <button onClick={() => this.addShippingInfo()}> 
                            <i className="fas fa-arrow-right"> </i>  
                        </button>
                    {/* </Link> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const { hAddy, hCity, hState, hCountry, hZipCode } = reduxState.customer;
    return { hAddy, hCity, hState, hCountry, hZipCode }
}

const dispatchStateToProps = {
    shippingInfo
}

export default connect(mapStateToProps, dispatchStateToProps)(Shipping)