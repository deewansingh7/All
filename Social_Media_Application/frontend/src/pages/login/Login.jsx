import React, { useState } from 'react'
import { axiosClient } from '../../utils/axiosClient';
import { Link } from 'react-router-dom';
// import '../signup/Signup.css'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { setItem } from '../../utils/localStorageManager';
import { KEY_ACCESS_TOKEN } from '../../utils/localStorageManager';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    console.log(email, password);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const data = await axiosClient.post('/api/auth/login', { email, password })
            // console.log(data);
            if (data.data.statusCode === 404) {
                alert(data.data.result);
                return;
            }
            setItem(KEY_ACCESS_TOKEN, data.data.result);
            // console.log(data.data.result);
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className='signup-container'>
                <h2 style={{ color: '#365486' }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Email">Email:</label>
                        <input type="email" id="Email" name="Email" onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password:</label>
                        <input type="password" id="Password" name="Password" onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <button type="submit" >Login</button>
                    <h3>Not Registered? <Link to={'/signup'}>Signup</Link></h3>
                </form>
            </div>
        </div>
    )
}

export default Login