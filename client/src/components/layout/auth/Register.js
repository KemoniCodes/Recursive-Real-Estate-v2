import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../../../scss/register.scss';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Passwords do not match!')
        } else {
            console.log('SUCCESS')
        }
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={e => onSubmit(e)}>
                <label>
                    Name
                    <input name="name" value={name} onChange={e => onChange(e)} type="text" placeholder="Name" />
                </label>
                <label>
                    Email
                    <input name="email" value={email} onChange={e => onChange(e)} required type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                     <input name="password" value={password} onChange={e => onChange(e)} type="password" placeholder="Password" />
                </label>
                <label>
                    Password
                     <input name="password2" value={password2} onChange={e => onChange(e)} type="password" placeholder="Confirm Password" />
                </label>
                <button value="Register" type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Sign In</Link> </p>
        </div>
    );
};

export default Register;