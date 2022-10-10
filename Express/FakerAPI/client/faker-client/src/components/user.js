const User = (props) => {
    return (
        <div>
            <h2>{props.firstName} {props.lastName}</h2>
            <p>Password: #HIDDEN#</p>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
        </div>
    );
}

export default User;