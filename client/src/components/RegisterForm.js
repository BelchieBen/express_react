import React from 'react';
import {useState} from 'react';

export default function RegisterForm(props){
    const [state, setState] = useState();
    const [firstName, setFirstname] = useState("");
    const [lastName, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({
            user: {
                firstName: firstName,
                surname: lastName,
                email: email
            },
        }),
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/register', requestOptions)
        .then((response) => response.json());
    }
    return(
        <div className = 'register-form'>
            <form method = 'post' onSubmit = {e => handleSubmit(e)}>
                <label htmlFor = 'firstName'>First Name</label>
                <input type = 'text' name = 'firstName' placeholder = 'First Name' onChange = {e => setFirstname(e.target.value)} value={firstName}/>
                <label htmlFor = 'lastName'>Last Name</label>
                <input type = 'text' name = 'lastName' placeholder = 'Last Name' onChange = {e => setSurname(e.target.value)} value={lastName} />
                <label htmlFor = 'email'>Last Name</label>
                <input type = 'text' name = 'email' placeholder = 'Email' onChange = {e => setEmail(e.target.value)} value={email} />
                <button type = 'submit'>Registrer</button>
            </form>
        </div>
    );
}