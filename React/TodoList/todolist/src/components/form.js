import React, { useState } from 'react';

const ItemForm = (props) => {
    const [formText, setFormText] = useState();

    const submitHandler = (e, item) => {
        e.preventDefault();
        console.log("Adding", formText);
        document.getElementById("entry").value = "";
        const task = {
            "title": item,
            "done" : false
        }
        props.handler(task);

    }

    return (
        <div>
            <form onSubmit={(e)=>submitHandler(e, formText)}>
                <input type="text" id="entry" onChange={(e)=> setFormText(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default ItemForm;