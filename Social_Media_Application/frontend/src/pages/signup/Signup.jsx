import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { axiosClient } from '../../utils/axiosClient';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(name, email, password);

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("sdfsd")
        const result = await axiosClient.post('/api/auth/signup', {
            name,
            email,
            password
        })
        console.log(result);
        // onSubmitUsername(event.currentTarget.elements.usernameInput.value)
    }

    return (
        <div className="signup-container">
            <h2 style={{ color: '#365486' }}>Signup</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-group" >
                    <label htmlFor="Name">Name:</label>
                    <input type="text" id="Name" name="Name" onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email:</label>
                    <input type="email" id="Email" name="Email" onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password:</label>
                    <input type="password" id="Password" name="Password" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button type="submit" >Sign Up</button>
                <h3>Already Registered? <Link to={'/login'}>Login</Link></h3>
            </form>
        </div>
    );
}

export default Signup;
