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
        axios.get(baseDomain+"/user/new")
        .then((res)=>{console.log(res)})
        .catch(err=>console.log(err));

    }, []);

    return (
        <h1>List of companies {baseDomain}</h1>
    )

};

export default Companies;