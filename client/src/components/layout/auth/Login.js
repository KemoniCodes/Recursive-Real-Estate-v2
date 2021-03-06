import React, { Fragment, useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import '../../../scss/login.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';
import NavBar from '../Navbar'
// import { withRouter, Redirect } from "react-router";

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    };

    //Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }
    return (
        <Fragment>
            <NavBar />
            <div className="login">
                <h1>Sign In</h1>
                <form onSubmit={e => onSubmit(e)}>
                    <label>
                        {/* Email */}
                        <input name="email" value={email} onChange={e => onChange(e)} type="email" placeholder="Email" />
                    </label>
                    <label>
                        {/* Password */}
                        <input name="password" value={password} onChange={e => onChange(e)} type="password" placeholder="Password" />
                    </label>
                    <button value='Login' type="submit">Sign In</button>
                </form>
                <p>Dont have an account? <Link to="/register">Sign Up</Link> </p>
            </div>
        </Fragment >
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { login }
)(Login);