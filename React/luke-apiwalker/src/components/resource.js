import { useState, useEffect } from "react";
import axios from 'axios';
import BadRequest from "./badRequest";

const Resource = (props) => {
    const baseURL = 'https://swapi.dev/api/';

    const [response, setResponse] = useState();
    const [errRes, setErrRes] = useState(false);

    useEffect(()=>{
        const reqURL =`${baseURL}${props.type}/${props.id}`;
        console.log("Resource URL", reqURL);
        axios.get(reqURL)
        .then(
            res=>{setResponse(res.data); 
                setErrRes(false);
            })
        .catch((error)=>{console.log("Whoopsies"); setErrRes(true)});
    }, [props.type, props.id]);
    console.log("response state", response);

    let keys = []
    response != null ? keys = Object.keys(response): keys = []
    
    return(
        errRes ? <BadRequest/>:
        response == null ? <div></div>:
        <div>
            {keys.map((item, key)=>{
                return <p key={key}><span className="bold">{item}: </span>{response[item]}</p>
            })}
        </div>
        
    )

}

export default Resource;