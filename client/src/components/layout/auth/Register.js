import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../../actions/alert';
import { register } from '../../../actions/auth';
import PropTypes from 'prop-types';

import '../../../scss/register.scss';

const Register = ({ setAlert, register }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match!', 'danger');
        } else {
            register({ name, email, password });
        }
    };

    return (
        <div className="register ">
            <h1>Register</h1>
            <form onSubmit={e => onSubmit(e)}>
                <label>
                    {/* Name */}
                    <input name="name" value={name} onChange={e => onChange(e)} type="text" placeholder="Name" />
                </label>
                <label>
                    {/* Email */}
                    <input name="email" value={email} onChange={e => onChange(e)} type="email" placeholder="Email" />
                </label>
                <label>
                    {/* Password */}
                    <input name="password" value={password} onChange={e => onChange(e)} type="password" placeholder="Password" />
                </label>
                <label>
                    {/* Confirm password */}
                    <input name="password2" value={password2} onChange={e => onChange(e)} type="password" placeholder="Confirm Password" />
                </label>
                <button value="Register" type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Sign In</Link> </p>
        </div>
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
};

export default connect(null, { setAlert, register })(Register);