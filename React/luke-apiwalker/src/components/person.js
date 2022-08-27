import { useState, useEffect } from "react";
import axios from 'axios';
const Person = (props) => {
    const baseURL = 'https://swapi.dev/api/';
    const reqURL =`${baseURL}people/${props.id}`;

    const [response, setResponse] = useState();
    useEffect(()=>{
        console.log("Here's the useEffect");
        console.log("Request URL", reqURL);
        axios.get(reqURL).then(res=>{setResponse(res.data); console.log(res.data)});
    }, [props.id]);
    console.log("response state", response);
    
    return(response == null ? <div></div>:
        <div>
            <h2>{response.name}</h2>
            <p><span className="bold">Height:</span> {response.height} cm</p>
            <p><span className="bold">Mass:</span> {response.mass} kg</p>
            <p><span className="bold">Hair:</span> {response.hair_color}</p>
            <p><span className="bold">Skin:</span> {response.skin_color}</p>
        </div>
        
    )

}

export default Person;