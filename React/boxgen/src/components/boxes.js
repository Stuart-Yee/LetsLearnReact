import React from 'react';
import Box from './box';

const Boxes = (props) => {
    // const [allColors, setAllColors] = useState(props.colors);
    // const allColors = ["red", "green", "marigold"]
    return(
        <div className='boxes'>
            {props.colors.map((val, i) => 
                <Box key={i} color={val}/>
            )}
        </div>
    )
}

export default Boxes