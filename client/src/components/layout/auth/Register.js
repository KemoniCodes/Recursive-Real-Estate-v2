import React from "react";
import '../../../scss/register.scss';

const Register = () => {
    return (
        <div className="register">
            <h1>Register</h1>
            <form >
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                     <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Register;