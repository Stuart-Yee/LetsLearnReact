import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Bar = (props) => {
    console.log("Rendering Bar")

    const [navId, setNavId] = useState();
    const [items, setItems] = useState(['people', 'planets']);
    const [navType, setNavType] = useState(items[0]);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        let ID;
        navId != null? ID = navId: ID = 1;
        navigate(`/${navType}/${ID}`)
    }

    useEffect(()=>{
        axios.get('https://swapi.dev/api/')
        .then((res)=>{
            let resources =[];
            for (const key in res.data) {
                resources.push(key)
            }
            setItems([...resources]);


        })

    }, []);

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