import { useEffect, useState } from "react";
import axios from "axios";
import BadRequest from "./badRequest";

const Planet = (props) => {
    const baseURL = 'https://swapi.dev/api/';
    const reqURL =`${baseURL}planets/${props.id}`;

    const [response, setResponse] = useState();
    const [errorRes, setErrorRes] = useState(false);

    useEffect(()=>{
        console.log("Request URL", reqURL);
        axios.get(reqURL)
        .then(res=>{setResponse(res.data); setErrorRes(false); console.log(res.data)})
        .catch((error) => {console.log("Whoopsies"); setErrorRes(true)})
    }, [props.id]);
    // console.log("response state", response);

    return(
        errorRes ? <BadRequest/>:
        response != null ?
        <div>
            <h2>{response.name}</h2>
            <p><span className="bold">Climate:</span> {response.climate}</p>
            <p><span className="bold">Terrain:</span> {response.terrain}</p>
            <p><span className="bold">Surface Water:</span> {response.surface_water}</p>
            <p><span className="bold">Population:</span> {response.population}</p>
        </div>
        :
        <div></div>
        
    )
}

export default Planet