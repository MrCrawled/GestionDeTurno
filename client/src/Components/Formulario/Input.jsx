import React, { Component } from 'react';

class Input extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className="input-container">
                <input
                    autoComplete="off"
                    id={this.props.id}
                    name={this.props.name}
                    onChange={this.props.handleChange}
                    placeholder={this.props.extra ? this.props.extra : ""}
                    required
                    type="text"
                />
                <label htmlFor={this.props.id}>{this.props.placeholder}</label>
            </div>
        )
    }
};

export default Input;