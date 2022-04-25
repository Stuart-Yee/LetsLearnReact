import React, { Component } from 'react';

class PersonCard extends Component{
    render() {
        return (
            <div>
                <h2>{this.props.lName}, {this.props.fName}</h2>
                <p>Age: {this.props.age }</p>
                <p>Hair Color: {this.props.hColor}</p>
                <button onClick={()=>alert(`My name is ${this.props.fName} ${this.props.lName}`)}>Click!</button>
            </div>
        );
    }
}

export default PersonCard;