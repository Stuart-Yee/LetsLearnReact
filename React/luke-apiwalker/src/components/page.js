import Bar from "./bar";
import { useState } from "react";
import Planet from "./planet";
import Person from "./person";
import { useParams } from "react-router-dom";

const Page = (props) => {
    const [getType, setType] = useState('');
    const [getId, setId] = useState(null);

    const { type } = useParams();
    const { id } = useParams();

    return(
        <div>
            <Bar/>
            {type === 'planets'?<Planet id={id}/>:
            type === 'people' ? <Person id={id}/>:
            null }
        </div>
        

    )
}

export default Page;