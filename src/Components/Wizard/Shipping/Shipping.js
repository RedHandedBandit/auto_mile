import React, { Component } from 'react';


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
                <button> previous </button>
                <button> next </button>
            </div>
        )
    }
}

export default Shipping