import { useState, useEffect } from "react";
import axios from 'axios';
import BadRequest from "./badRequest";
import { Link } from "react-router-dom";

const Person = (props) => {
    const baseURL = 'https://swapi.dev/api/';
    const reqURL =`${baseURL}people/${props.id}`;

    const [response, setResponse] = useState();
    const [errRes, setErrRes] = useState(false);
    const [homeworld, setHomeworld] = useState({name: "", url: ""});

    const [planet, setPlanet] = useState();

    useEffect(()=>{
        // console.log("Here's the useEffect");
        console.log("Request URL", reqURL);
        axios.get(reqURL)
        .then(
            res=>{setResponse(res.data); 
                setErrRes(false);
                const homeworldURL = res.data.homeworld;
                console.log("Homeworld URL", homeworldURL);
                console.log(res.data)
                axios.get(homeworldURL).then(hwres=>{
                    console.log("Homeworld query", hwres.data)
                    let id =homeworldURL.slice(-3,-1);
                    isNaN(id) ? id = homeworldURL.slice(-2,-1) : id = id;
                    setHomeworld({name: hwres.data.name, url: `/planets/${id}`});
                    console.log("homeworld in state", homeworld);
                    setPlanet(hwres.data.name);
                    console.log("planet state", planet)
                })
            }
                
            )
        .catch((error)=>{console.log("Whoopsies"); setErrRes(true)});
    }, [props.id]);
    console.log("response state", response);
    console.log("state data", planet, homeworld);
    
    return(
        errRes ? <BadRequest/>:
        response == null ? <div></div>:
        <div>
            <h2>{response.name}</h2>
            <p><span className="bold">Height:</span> {response.height} cm</p>
            <p><span className="bold">Mass:</span> {response.mass} kg</p>
            <p><span className="bold">Hair:</span> {response.hair_color}</p>
            <p><span className="bold">Skin:</span> {response.skin_color}</p>
            <p><span className="bold">Homeworld:</span> <Link to={homeworld.url}>{homeworld.name}</Link></p>
        </div>
        
    )

}

export default Person;