import { useState } from "react";

const Item = (props) => {      

    console.log(props.item_state.title, "is here and is", props.item_state.done)
    let classes = ""
    props.item_state.done ? classes = "strike-through" : classes = ""

    return (
        <form onSubmit={(e)=> e.preventDefault()}>
            <label id={props.item_state.title} className={classes}>{props.item_state.title}</label>
            <input type="checkbox" onChange={
                () => {
                    const el = document.getElementById(props.item_state.title);
                    props.checker(props.idx, el);
                }
                }
                checked = {props.item_state.done}
                />
            <button onClick={()=>props.delete(props.item_state.title)}>Delete</button>
        </form>
        
    )
}

export default Item;