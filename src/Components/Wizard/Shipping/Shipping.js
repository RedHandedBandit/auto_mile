import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shippingInfo } from './../../../ducks/reducers/customerReducer';
import { Link } from 'react-router-dom';


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
        this.props.shippingInfo({ hAddy, hCity, hState, hZipCode, hCountry })
    }

    render(){
        return (
            <div>
                <h1> Shipping </h1>
                <div>
                    <label> 
                        <span> shipping address </span>
                        <input
                            onChange={(e) => this.handleInputChange('hAddy', e.target.value)}
                            type='text'
                            value={this.state.hAddy} />
                    </label>
                    <label> 
                        <span> city </span>
                        <input
                            onChange={(e) => this.handleInputChange('hCity', e.target.value)}
                            type='text'
                            value={this.state.hCity} />
                    </label>
                    <label> 
                        <span> state </span>
                        <input
                            onChange={(e) => this.handleInputChange('hState', e.target.value)}
                            type='text'
                            value={this.state.hState} />
                    </label>
                    <label> 
                        <span> zip code </span>
                        <input
                            onChange={(e) => this.handleInputChange('hZipCode', e.target.value)}
                            type='text'
                            value={this.state.hZipCode} />
                    </label>
                    <label> 
                        <span> country </span>
                        <input
                            onChange={(e) => this.handleInputChange('hCountry', e.target.value)}
                            type='text'
                            value={this.state.hCountry} />
                    </label>
                </div>
                <Link to="/wizard/personal"> 
                    <button onClick={() => this.addShippingInfo()} > previous </button> 
                </Link>
                <Link to="/wizard/billing"> 
                    <button onClick={() => this.addShippingInfo()}> next </button>
                </Link>
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