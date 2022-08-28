import { useState, useEffect } from "react";
import axios from 'axios';
import BadRequest from "./badRequest";

const Resource = (props) => {
    const baseURL = 'https://swapi.dev/api/';
    const reqURL =`${baseURL}${props.type}/${props.id}`;

    const [response, setResponse] = useState();
    const [errRes, setErrRes] = useState(false);

    useEffect(()=>{
        // console.log("Here's the useEffect");
        console.log("Resource URL", reqURL);
        axios.get(reqURL)
        .then(
            res=>{setResponse(res.data); 
                setErrRes(false);
                console.log(res.data)
            })
        .catch((error)=>{console.log("Whoopsies"); setErrRes(true)});
    }, [props.type, props.id]);
    console.log("response state", response);

    const keys = Object.keys(response)
    
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