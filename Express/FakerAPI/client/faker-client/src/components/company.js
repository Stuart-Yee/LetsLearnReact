const Company = (props) => {

    return (
        <div>
            <h2>{props.name}</h2>
            <p> {props.address.street}</p>
            <p> {props.address.city}</p>
            <p> {props.address.state} {props.address.zipCode}</p>
            <p> {props.address.country}</p>
        </div>
    )
    
}

export default Company;