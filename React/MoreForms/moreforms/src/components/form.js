import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [fNameError, setFNameError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, passwordConfirm };
        console.log("Welcome", newUser);
    };

    const greaterThan = (fieldName, entry, min) => {
        if (entry.length >= min ){
            return null;
        } else {
            return `${fieldName} must be at least ${min} characters`;
        }
    }

    const matchPass = () => {
        if (password === passwordConfirm) {
            return null;
        } else {
            return "Passwords must match";
        }
    }

    const fNameVal = (e) => {
        setFirstname(e.target.value);
        console.log(firstname, firstname.length);
        if (firstname.length < 2) {
            setFNameError("First Name must be at least two characters");
        } else {
            setFNameError("");
        }
    }
    
    return(
        <>
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ fNameVal} />
                {
                    fNameError ?
                    <p style={{color:'red'}}>{fNameError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
                <p style={{color:'red'}}>{greaterThan("Last name", lastname, 2)}</p>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="email" onChange={ (e) => setEmail(e.target.value) } />
                <p style={{color:'red'}}>{greaterThan("Email", email, 2)}</p>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                <p style={{color:'red'}}>{greaterThan("Password", password, 8)}</p>
                <p style={{color:'red'}}>{matchPass()}</p>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setPasswordConfirm(e.target.value) } />
            </div>
            <input type="submit" value="Create User" onClick={createUser} />
        </form>
        <p>First Name: {firstname}</p>
        <p>Last Name: {lastname}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password {passwordConfirm}</p>
        </>
    );
};
    
export default UserForm;