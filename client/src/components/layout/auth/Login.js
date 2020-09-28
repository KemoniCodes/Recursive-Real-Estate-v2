import React from "react";
import { Link } from 'react-router-dom';
import '../../../scss/login.scss';
// import { withRouter, Redirect } from "react-router";

const Login = () => {
    return (
        <div className="login">
            <h1>Sign In</h1>
            <form>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Sign In</button>
            </form>
            <p>Dont have an account? <Link to="/register">Sign Up</Link> </p>
        </div>
    );
};

export default Login;