import BaseDomainContext from "../context/baseDomain";
import { useState, useContext } from "react";
import axios from "axios";
import Company from './company';

const CreateCompany = (props) => {
    const [newCompany, setNewCompany] = useState();
    const domain = useContext(BaseDomainContext);

    const getNewCompany = () => {
        axios.get(domain+"/companies/new")
        .then((res)=> {
            setNewCompany(res.data);
            console.log(newCompany)
        })
        .catch((err)=>console.log(err));
    }

    return (
        <div>
            <button onClick={getNewCompany}>Create Company</button>
            {newCompany?
                <Company name={newCompany.name} address={newCompany.address}/>
                : null
            }
        </div>
    )
}

export default CreateCompany;