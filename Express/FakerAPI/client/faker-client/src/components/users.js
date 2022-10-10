import { useContext, useEffect, useState } from "react";
import axios from "axios";
import User from "./user";
import BaseDomainContext from "../context/baseDomain";

const Users = (props) => {

    const domain = useContext(BaseDomainContext);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get(domain+"/user/all")
        .then((res)=> {
            setUsers([...res.data]);
            console.log(users)
        })
        .catch(err=>console.log(err));
    }, []);

    return(
        <div>
            <h3>Users:</h3>
            {users.map((val, idx)=>{
                return(
                    <User key={idx} firstName={val.firstName} lastName={val.lastName} email={val.email} phone={val.phoneNumber}/>
                )
            })}
        </div>
    )

}

export default Users;