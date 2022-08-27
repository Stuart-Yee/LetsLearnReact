import { useEffect, useState } from "react";
import axios from "axios";

const Planet = (props) => {
    const baseURL = 'https://swapi.dev/api/';
    const reqURL =`${baseURL}planets/${props.id}`;

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
            <p><span className="bold">Climate:</span> {response.climate}</p>
            <p><span className="bold">Terrain:</span> {response.terrain}</p>
            <p><span className="bold">Surface Water:</span> {response.surface_water}</p>
            <p><span className="bold">Population:</span> {response.population}</p>
        </div>
        
    )
}

export default Planet