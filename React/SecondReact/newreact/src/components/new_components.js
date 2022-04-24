import React, { Component } from 'react';

class NewComponent extends Component {
    render(){
            return <><p>This is a new component</p><p>{this.props.myText}</p></>
    }
}

export default NewComponent;