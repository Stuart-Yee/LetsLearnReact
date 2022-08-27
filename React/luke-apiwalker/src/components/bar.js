import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Bar = (props) => {
    console.log("Rendering Bar")
    const items = ['people', 'planets'];

    const [navType, setNavType] = useState(items[0]);
    const [navId, setNavId] = useState();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        let ID;
        navId != null? ID = navId: ID = 1;
        navigate(`/${navType}/${ID}`)

    }

    return (
        <form onSubmit={submitHandler}>
            <label>Search for: </label>
            <select onChange={e=>setNavType(e.target.value)}>
                {items.map((item, key)=>{
                    return <option key={key} value={item}>{item}</option>
                })}
            </select>
            <label>ID:</label>
            <input type="number" min={1} step={1} onChange={e=>setNavId(e.target.value)}></input>
            <button>Search</button>
        </form>
    )
}

export default Bar;