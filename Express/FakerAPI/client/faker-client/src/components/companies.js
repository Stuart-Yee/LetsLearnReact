import {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import Company from './company'
import BaseDomainContext from '../context/baseDomain';

const Companies = (props) => {
    const baseDomain = useContext(BaseDomainContext);

    const [companies, setCompanies] = useState([]);

    useEffect(()=>{
        const endPoint = "/companies/all";
        console.log("Querying API")
        axios.get(baseDomain+endPoint)
        .then((res)=>{
            setCompanies([...res.data]);
            console.log(companies);
        })
        .catch((err)=>{
            console.log("Server Error" + err);
        });

    }, []);

    return (
        <div>
            <h1>List of companies</h1>
            {companies.map((val, idx)=>{
                return <Company key={idx} name={val.name} address={val.address}/>
            })}
        </div>
        
    )

};

export default Companies;