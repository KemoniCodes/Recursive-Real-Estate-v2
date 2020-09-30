import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../../../scss/login.scss';
// import { withRouter, Redirect } from "react-router";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password, } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        console.log('SUCCESS');
    };

    return (
        <div className="login">
            <h1>Sign In</h1>
            <form onSubmit={e => onSubmit(e)}>
                <label>
                    Email
                    <input name="email" value={email} onChange={e => onChange(e)} type="email" required placeholder="Email" />
                </label>
                <label>
                    Password
                    <input name="password" value={password} onChange={e => onChange(e)} type="password" placeholder="Password" />
                </label>
                <button value='Login' type="submit">Sign In</button>
            </form>
            <p>Dont have an account? <Link to="/register">Sign Up</Link> </p>
        </div>
    );
};

export default Login;