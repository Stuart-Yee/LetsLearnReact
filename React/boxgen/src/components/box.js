import React from 'react';

const Box = props => {
    const style = {background: props.color}
    return (
        <div className='box' style={style}>
            <p>
                {props.color}
            </p>
        </div>
    )
}

export default Box;