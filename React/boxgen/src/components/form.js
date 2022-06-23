import React, {useState} from 'react';

const Form = (props) => {
    
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.colorAdder(color);
        document.getElementById("color").value="";
    }

    return (
        <form onSubmit={ handleSubmit}>
            <label>Color</label>
            <input type="text" id="color" onChange = {(e) => {setColor(e.target.value); console.log(color);}}></input>
            <input type="submit" value="submit"/>
            <p>Submit: {color}</p>
        </form>
    )

}

export default Form;