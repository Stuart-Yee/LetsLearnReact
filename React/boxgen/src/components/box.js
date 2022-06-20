import React from 'react';

const Box = props => {
    const style = {background: props.color}
    return (
        <div className='box' style={style}></div>
    )
}

export default Box;