import BaseDomainContext from '../context/baseDomain';
import { useState, useContext } from 'react';
import axios from 'axios';
import User from './user';

const CreateUser = (props) => {

    const [newUser, setNewUser] = useState();
    const domain = useContext(BaseDomainContext);

    const getNewUser = () => {
        axios.get(domain+"/user/new")
        .then((res)=> {
            setNewUser(res.data);
            console.log("new user", newUser);
            
        })
        .catch((err)=> console.log(err));
    }

    return (
        <div>
            <button onClick={getNewUser}>Create User</button>
            {newUser ? <User firstName={newUser.firstName} lastName={newUser.lastName} email={newUser.email} phone={newUser.phoneNumber}/> : null}
        </div>
    )

}

export default CreateUser