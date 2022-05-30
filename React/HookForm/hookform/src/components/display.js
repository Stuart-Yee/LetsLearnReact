import React from 'react'

const DisplayField = props => { 
    return(
        <div>
            <label>{props.label}:</label>
            <p id={props.id}></p>
        </div>    
    );
}

export default DisplayField;