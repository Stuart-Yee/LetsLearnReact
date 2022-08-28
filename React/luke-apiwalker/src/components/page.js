import Bar from "./bar";
import { useState } from "react";
import Planet from "./planet";
import Person from "./person";
import Resource from "./resource";
import BadRequest from "./badRequest";
import { useParams } from "react-router-dom";

const Page = (props) => {

    const { type } = useParams();
    const { id } = useParams();

    console.log("search type", type);

    return(
        <div>
            <Bar/>
            {
            type === 'planets'?<Planet id={id} />:
            type === 'people' ? <Person id={id} />:
            type != null ? <Resource type={type} id={id}/>:
            props.badRequest ? <BadRequest/>:
            null }
        </div>
        

    )
}

export default Page;